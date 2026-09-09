import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'ay-theme';
const SWITCHING_CLASS = 'theme-switching';

const ThemeContext = createContext({
  theme: 'light',
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

/** Read whatever the pre-paint script in index.html already decided. */
function readInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  if (document.documentElement.classList.contains('dark')) return 'dark';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage blocked — fall through */
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme);
  // A ref, not state: nothing renders from it, and keeping it out of state
  // means an explicit theme choice does not re-run the media-query effect.
  const hasChosenRef = useRef(false);

  /**
   * Push the theme onto <html>.
   *
   * The swap is a single write to the root element — one class, one
   * data-attribute, one colorScheme — which flips every CSS variable at once.
   * No component below reads the theme to style itself, so a toggle costs one
   * style recalc rather than a render pass over the tree.
   *
   * The flip is wrapped in `.theme-switching`, which suppresses every CSS
   * transition on the page for the duration. Without it the swap starts
   * thousands of concurrent colour transitions (see THEME SWITCHING in
   * index.css) and the page visibly tears. Reading a computed colour between
   * the flip and the unwrap forces the browser to commit the new values while
   * transitions are still off, so removing the class cannot start any — and a
   * colour read forces only a style recalc, where reading `offsetHeight` would
   * force a full layout that a colour-only swap does not need.
   *
   * All of it runs synchronously from the click handler, so the paint does not
   * wait on React to re-render the toggle.
   */
  const applyTheme = useCallback((next) => {
    const root = document.documentElement;

    root.classList.add(SWITCHING_CLASS);

    root.classList.toggle('dark', next === 'dark');
    root.style.colorScheme = next;
    root.setAttribute('data-theme', next);

    void getComputedStyle(root).backgroundColor; // commit, transitions still off
    root.classList.remove(SWITCHING_CLASS);

    // Keep the mobile browser chrome in sync with the page background.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#050816' : '#F8FAFC');
  }, []);

  // Reconcile with whatever the pre-paint script in index.html decided.
  useEffect(() => {
    applyTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = useCallback(
    (next) => {
      hasChosenRef.current = true;
      setThemeState(next);
      applyTheme(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage blocked — theme still applies for this session */
      }
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Follow the OS preference until the visitor makes an explicit choice.
  useEffect(() => {
    const query = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!query) return undefined;

    const handleChange = (event) => {
      let stored = null;
      try {
        stored = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (hasChosenRef.current || stored) return;

      const next = event.matches ? 'dark' : 'light';
      setThemeState(next);
      applyTheme(next);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [applyTheme]);

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
