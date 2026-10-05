'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/components/animation/variants';
import { about, features } from '@/data/content';

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-8 border-b border-brand-maroon/15 pb-10 dark:border-white/15 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16 md:pb-14">
          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-leaf">The Tulas experience</p>
            <h2 className="mt-4 max-w-lg font-brand text-3xl leading-tight text-brand-maroon sm:text-4xl dark:text-white">
              {about.title}
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg dark:text-white/70">
            {about.body}
          </motion.p>
        </motion.div>

        <motion.ul id="campus" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group border-b border-brand-maroon/15 py-7 dark:border-white/15 lg:py-9"
            >
              <span className="grid h-11 w-11 place-items-center bg-brand-maroon text-brand-teal transition-colors group-hover:bg-brand-leaf group-hover:text-white dark:bg-white/10">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-brand-maroon dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70 dark:text-white/65">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
