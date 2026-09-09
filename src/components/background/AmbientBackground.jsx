import { useReducedMotion } from 'framer-motion';
import cn from '../../lib/cn';

/**
 * The hero backdrop: slow drifting gradient blobs, a very subtle grid and
 * thin gradient hairlines.
 *
 * Everything is decorative, CSS-driven (transform/opacity only) and fully
 * disabled for reduced-motion visitors.
 */
export default function AmbientBackground({
  className = '',
  showGrid = true,
  showLines = true,
  intensity = 'full',
}) {
  const shouldReduce = useReducedMotion();
  const soft = intensity === 'soft';

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />

      {/* Drifting gradient blobs */}
      <span
        className={cn(
          'glow-blob left-[-12%] top-[-8%] h-[34rem] w-[34rem] bg-brand-500/60',
          !shouldReduce && 'animate-blob-drift'
        )}
      />
      <span
        className={cn(
          'glow-blob right-[-14%] top-[6%] h-[30rem] w-[30rem] bg-sky-500/50',
          !shouldReduce && 'animate-blob-drift'
        )}
        style={{ animationDelay: '-6s' }}
      />
      {!soft && (
        <span
          className={cn(
            'glow-blob bottom-[-16%] left-[32%] h-[28rem] w-[28rem] bg-cyan-400/40',
            !shouldReduce && 'animate-blob-drift'
          )}
          style={{ animationDelay: '-11s' }}
        />
      )}

      {/* Subtle grid */}
      {showGrid && <div className="absolute inset-0 grid-backdrop mask-fade-b opacity-70" />}

      {/* Thin gradient hairlines */}
      {showLines && (
        <>
          {/* Kept clear of the headline band so nothing reads as a strikethrough. */}
          <div className="absolute left-0 top-[8%] h-px w-full bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
          <div className="absolute left-0 top-[78%] h-px w-full bg-gradient-to-r from-transparent via-cyan-400/18 to-transparent" />
          <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-sky-500/12 to-transparent" />
          <div className="absolute right-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-500/12 to-transparent" />
        </>
      )}

      {/* Very light grain to stop the gradients from banding */}
      <div className="noise-overlay absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]" />
    </div>
  );
}
