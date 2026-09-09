/**
 * Shared motion language.
 *
 * One easing curve, one set of durations, one stagger rhythm — used by every
 * section so the whole site animates like a single product.
 */

export const EASE = [0.22, 1, 0.36, 1];
export const EASE_SOFT = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.22,
  base: 0.36,
  slow: 0.45,
  lazy: 0.6,
};

/** Standard viewport config for scroll reveals — fires once, slightly early. */
export const viewportOnce = { once: true, amount: 0.15, margin: '0px 0px -60px 0px' };
export const viewportEarly = { once: true, amount: 0.1, margin: '0px 0px -30px 0px' };

/* -------------------------------------------------------------- variants -- */

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const fadeUpLarge = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: DURATION.slow, ease: EASE } },
};

/** Parent container that staggers its children. */
export const staggerContainer = (stagger = 0.05, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Word-by-word / line-by-line entrance used in the hero headline. */
export const textReveal = {
  hidden: { opacity: 0, y: '30%' },
  show: { opacity: 1, y: '0%', transition: { duration: DURATION.base, ease: EASE } },
};

/* --------------------------------------------------------------- helpers -- */

/**
 * Strip movement out of a variant set when the visitor prefers reduced motion.
 * Elements still fade in, so nothing appears broken — they just don't travel.
 */
export function reduceVariants(variants, shouldReduce) {
  if (!shouldReduce) return variants;
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, ease: 'linear' } },
  };
}

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: DURATION.fast, ease: EASE } },
};

export const springSoft = { type: 'spring', stiffness: 240, damping: 26, mass: 0.9 };
export const springSnappy = { type: 'spring', stiffness: 420, damping: 32, mass: 0.7 };
