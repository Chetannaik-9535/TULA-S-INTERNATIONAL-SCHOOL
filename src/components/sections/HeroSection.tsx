'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { fadeUp, stagger, wordUp } from '@/components/animation/variants';
import Button from '@/components/ui/Button';
import { hero, links, stats } from '@/data/content';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-maroon px-6 pb-12 pt-32 text-white sm:pt-36 dark:bg-brand-night">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_30%,rgba(31,181,173,0.2),transparent_38%),linear-gradient(115deg,transparent_48%,rgba(255,255,255,0.04)_48%,transparent_75%)]" />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="py-8 sm:py-12">
          <motion.p variants={fadeUp} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-sm">
            <span className="h-px w-9 bg-brand-teal" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
            {hero.headline.split(' ').map((word, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-2 align-bottom">
                <motion.span variants={wordUp} className="inline-block">{word}</motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.sub}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={links.apply}>Apply Now</Button>
            <Button href={links.tour} variant="outline">Explore Campus</Button>
          </motion.div>
          <motion.a variants={fadeUp} href={links.brochure} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-brand-teal">
            <Download size={16} aria-hidden /> Download Prospectus
          </motion.a>
        </div>

        <motion.figure variants={fadeUp} className="relative mx-auto w-full max-w-xl lg:my-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-brand-leaf/30">
            <div
              role="img"
              aria-label="Bright, sunlit classroom arranged for learning"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85)' }}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-maroon/75 via-transparent to-brand-maroon/5" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <figcaption className="max-w-xs text-sm font-medium leading-relaxed text-white sm:text-base">A place to learn, discover and find your own way forward.</figcaption>
              <a href="#about" aria-label="Discover Tulas International School" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-teal text-brand-ink transition-transform hover:translate-y-1">
                <ArrowDown size={19} aria-hidden />
              </a>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-3 -left-3 -z-0 h-20 w-20 border-b-2 border-l-2 border-brand-teal sm:-bottom-4 sm:-left-4 sm:h-28 sm:w-28" />
        </motion.figure>
      </motion.div>

      <motion.dl variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto mt-12 grid max-w-6xl grid-cols-2 border-t border-white/20 pt-6 sm:grid-cols-4 sm:pt-8">
        {stats.map(({ value, label }) => (
          <motion.div key={label} variants={fadeUp} className="border-b border-white/15 py-4 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
            <dd className="text-3xl font-bold sm:text-4xl">{value}</dd>
            <dt className="mt-1 max-w-[12rem] text-xs leading-relaxed text-white/70 sm:text-sm">{label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
