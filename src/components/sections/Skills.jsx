import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { skills, skillCategories, skillHighlights } from '../../data/site';
import { EASE, DURATION, viewportOnce } from '../../lib/motion';
import cn from '../../lib/cn';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal';
import TechIcon from '../ui/TechIcon';

export default function Skills() {
  const [category, setCategory] = useState('all');

  const visible = useMemo(
    () => (category === 'all' ? skills : skills.filter((skill) => skill.category === category)),
    [category]
  );

  return (
    <Section id="skills" glow="right" grid>
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I"
        highlight="work with"
        description="A practical stack spanning frontend, backend, mobile, data, and delivery."
      />

      {/* ------------------------------------------------------- Filters -- */}
      <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
        {skillCategories.map((tab) => {
          const isActive = category === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategory(tab.id)}
              aria-pressed={isActive}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                isActive ? 'text-white' : 'text-content-muted hover:text-content-strong'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow-sm"
                  transition={{ duration: 0.25, ease: EASE }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </Reveal>

      {/* --------------------------------------------------------- Cards -- */}
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((skill, index) => (
          <SkillCard key={`${category}-${skill.id}`} skill={skill} index={index} />
        ))}
      </ul>

      {/* ---------------------------------------------------- Highlights -- */}
      <RevealGroup className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.05}>
        {skillHighlights.map((highlight) => (
          <RevealItem
            key={highlight.id}
            className="glass rounded-2xl p-5 text-center transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="block font-display text-2xl font-bold text-gradient-static sm:text-3xl">
              {highlight.value}
            </span>
            <span className="mt-1 block text-xs text-content-muted sm:text-[13px]">{highlight.label}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function SkillCard({ skill, index }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.base, ease: EASE, delay: Math.min(index * 0.03, 0.15) }}
      className="gradient-ring group surface-card surface-card-hover relative overflow-hidden p-5"
    >
      {/* Hover wash tinted with the technology's own colour */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: `radial-gradient(120% 90% at 0% 0%, ${skill.color}22, transparent 60%)` }}
      />

      <div className="relative flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line text-xl transition-transform duration-200 ease-premium group-hover:scale-110"
          style={{ color: skill.color, background: `${skill.color}14` }}
        >
          <TechIcon name={skill.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-[15px] font-bold text-content-strong">{skill.name}</h3>
          <p className="text-xs capitalize text-content-subtle">{skill.category}</p>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
          {skill.category}
        </span>
      </div>
      {/* <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-canvas-alt">
        <motion.span
          className="absolute inset-y-0 left-0 w-2/3 rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, #8B5CF6)` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={shouldReduce ? { duration: 0.001 } : { duration: 0.8, ease: EASE, delay: 0.12 + Math.min(index * 0.04, 0.25) }}
        />
      </div> */}
    </motion.li>
  );
}
