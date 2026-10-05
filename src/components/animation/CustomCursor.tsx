'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

const INTERACTIVE = 'a, button, input, textarea, select, summary, [role="button"], [data-cursor="hover"]';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const { x, y, active } = useMousePosition();
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 });

  // Only fine pointers (mouse, trackpad) get the custom cursor; touch devices never do.
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    const onOver = (e: MouseEvent) => setHovering(Boolean((e.target as Element).closest(INTERACTIVE)));
    root.classList.add('has-custom-cursor');
    document.addEventListener('mouseover', onOver);
    return () => {
      root.classList.remove('has-custom-cursor');
      document.removeEventListener('mouseover', onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: active ? 1 : 0, scale: hovering ? 1.8 : 1 }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border-2 border-white mix-blend-difference"
      />
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ opacity: active ? 1 : 0, scale: hovering ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
