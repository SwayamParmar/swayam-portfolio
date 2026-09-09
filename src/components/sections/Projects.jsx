import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LuArrowUpRight, LuGithub, LuExternalLink, LuX, LuArrowRight, LuLayers } from 'react-icons/lu';
import { projects, projectFilters, projectsCta } from '../../data/site';
import { EASE, DURATION, viewportOnce } from '../../lib/motion';
import cn from '../../lib/cn';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import SmartImage from '../ui/SmartImage';
import useScrollLock from '../../hooks/useScrollLock';

const ACCENT_RING = {
  purple: 'shadow-[0_28px_60px_-32px_rgb(139_92_246/0.75)]',
  blue: 'shadow-[0_28px_60px_-32px_rgb(59_130_246/0.7)]',
  cyan: 'shadow-[0_28px_60px_-32px_rgb(34_211_238/0.7)]',
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  useScrollLock(Boolean(active));

  return (
    <Section id="projects" glow="both">
      <SectionHeading
        eyebrow="Projects"
        title="Featured"
        highlight="work"
        description="A selection of products I've designed, built and shipped — from realtime mobile apps to full stack platforms."
      />

      {/* -------------------------------------------------------- Filters -- */}
      <Reveal delay={0.05} className="mt-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              aria-pressed={isActive}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                isActive ? 'text-white' : 'text-content-muted hover:text-content-strong'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="projects-tab"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow-sm"
                  transition={{ duration: 0.25, ease: EASE }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </Reveal>

      {/* ---------------------------------------------------------- Grid -- */}
      <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard
            /* Re-keying on the filter lets a newly shown card fade in once,
               instead of layout-animating cards between filters. */
            key={`${filter}-${project.id}`}
            project={project}
            index={index}
            onOpen={() => setActive(project)}
          />
        ))}
      </ul>

      {/* ----------------------------------------------------------- CTA -- */}
      <Reveal delay={0.05} className="mt-12 flex justify-center">
        <a href={projectsCta.href} target="_blank" rel="noreferrer noopener" className="btn btn-primary group px-7">
          {projectsCta.label}
          <LuArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </Reveal>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function ProjectCard({ project, index, onOpen }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.base, ease: EASE, delay: Math.min(index * 0.05, 0.2) }}
      className={cn(
        'gradient-ring group surface-card surface-card-hover relative flex flex-col overflow-hidden',
        ACCENT_RING[project.accent]
      )}
    >
      {/* ---- Media ---- */}
      <div className="relative overflow-hidden">
        <SmartImage
          src={project.image}
          alt={`${project.title} screenshot`}
          ratio="732 / 520"
          fallbackLabel={project.title}
          imgClassName="transition-transform duration-300 ease-premium group-hover:scale-[1.03]"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-[#050816]/10 to-transparent"
        />

        {/* Year + category */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
            {project.year}
          </span>
          {project.featured && (
            <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[11px] font-semibold text-white shadow-glow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Quick links appear on hover */}
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live demo`}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
            >
              <LuExternalLink className="text-sm" aria-hidden="true" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} source code`}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/65"
            >
              <LuGithub className="text-sm" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Metrics strip */}
        <div className="absolute inset-x-4 bottom-4 flex gap-4">
          {project.metrics.map((metric) => (
            <span key={metric.label} className="min-w-0">
              <span className="block font-display text-sm font-bold text-white">{metric.value}</span>
              <span className="block truncate text-[10px] uppercase tracking-wide text-white/60">{metric.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---- Body ---- */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-content-strong transition-colors duration-200 group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-content-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="tech-pill">
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="tech-pill text-primary">+{project.technologies.length - 4}</li>
          )}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <button
            type="button"
            onClick={onOpen}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            View Details
            <LuArrowUpRight
              className="transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>

          <div className="flex gap-1.5">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo`}
                className="icon-btn h-9 w-9 text-[15px]"
              >
                <LuExternalLink aria-hidden="true" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} GitHub repository`}
                className="icon-btn h-9 w-9 text-[15px]"
              >
                <LuGithub aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * Rendered through a portal on <body> so it can never be clipped or re-stacked
 * by a section's `overflow-hidden`. The panel is capped at 85vh and scrolls
 * internally, which keeps it clear of the navbar and the footer.
 */
function ProjectDialog({ project, onClose }) {
  const shouldReduce = useReducedMotion();
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-modal flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 cursor-default bg-[#050816]/75 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-lifted"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/70"
            >
              <LuX aria-hidden="true" />
            </button>

            {/* Everything scrolls inside the capped panel. */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <SmartImage
                src={project.image}
                alt={`${project.title} screenshot`}
                ratio="732 / 520"
                fallbackLabel={project.title}
                className="max-h-52 w-full sm:max-h-60"
              />

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip !text-[11px]">{project.year}</span>
                  <span className="chip !text-[11px] capitalize">{project.category}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold text-content-strong sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-content-muted">{project.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-line bg-card-alt p-4">
                      <span className="block font-display text-xl font-bold text-gradient-static">{metric.value}</span>
                      <span className="mt-0.5 block text-xs text-content-muted">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-label text-content-subtle">
                    <LuLayers aria-hidden="true" />
                    Built with
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="tech-pill">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary group"
                    >
                      Live Demo
                      <LuExternalLink aria-hidden="true" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-ghost"
                    >
                      View Code
                      <LuGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
