import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../../data/site';
import cn from '../../lib/cn';

/**
 * Monogram mark — the initials from `profile` in the brand gradient, inside a
 * soft glass tile. Matches the favicon. Used in the navbar, footer and menu.
 */
export function LogoMark({ className = '', size = 'md' }) {
  const { tile, text } = {
    sm: { tile: 'h-8 w-8 rounded-lg', text: 'text-[11px]' },
    md: { tile: 'h-9 w-9 rounded-xl', text: 'text-[13px]' },
    lg: { tile: 'h-11 w-11 rounded-2xl', text: 'text-base' },
  }[size];

  return (
    <span
      className={cn(
        'relative grid shrink-0 place-items-center overflow-hidden border border-primary/25 bg-card',
        tile,
        className
      )}
    >
      <span className="absolute inset-0 bg-brand-gradient-soft" aria-hidden="true" />
      <span
        className={cn('relative font-display font-black leading-none tracking-tight text-gradient-static', text)}
        aria-hidden="true"
      >
        {profile.initials}
      </span>
    </span>
  );
}

export default function Logo({ href = '#home', className = '', showName = true, onClick }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      onClick={onClick}
      aria-label={`${profile.name} — back to top`}
      className={cn('group inline-flex items-center gap-2.5', className)}
      whileHover={shouldReduce ? undefined : { scale: 1.02 }}
      whileTap={shouldReduce ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <span className="relative">
        <LogoMark className="transition-shadow duration-300 group-hover:shadow-glow-sm" />
      </span>
      {showName && (
        <span className="font-display text-[15px] font-bold tracking-tight text-content-strong sm:text-base">
          {profile.firstName} <span className="text-gradient-static">{profile.lastName}</span>
        </span>
      )}
    </motion.a>
  );
}
