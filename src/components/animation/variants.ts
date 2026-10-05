import type { Variants } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const wordUp: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.6, ease } },
};

export const viewport = { once: true, margin: '-80px' } as const;
