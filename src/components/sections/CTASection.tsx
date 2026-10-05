'use client';

import { motion } from 'framer-motion';
import { Download, Phone } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/components/animation/variants';
import Button from '@/components/ui/Button';
import { cta, links } from '@/data/content';

export default function CTASection() {
  return (
    <section id="admissions" className="px-6 pb-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-6xl rounded-3xl bg-brand-maroon px-8 py-16 text-white sm:px-16 dark:bg-white/5 dark:ring-1 dark:ring-white/10"
      >
        <motion.h2 variants={fadeUp} className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{cta.title}</motion.h2>
        <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{cta.body}</motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={links.apply}>Apply Now</Button>
          <Button href={links.brochure} variant="outline">
            <Download size={16} aria-hidden /> Download Prospectus
          </Button>
          <Button href={`tel:${links.phone}`} variant="link">
            <Phone size={16} aria-hidden /> {links.phoneLabel}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
