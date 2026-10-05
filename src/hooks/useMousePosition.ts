'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, type MotionValue } from 'framer-motion';

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
  /** True while the pointer is inside the window. */
  active: boolean;
}

/** Tracks the pointer with motion values, so moving the mouse never re-renders React. */
export function useMousePosition(): MousePosition {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  return { x, y, active };
}
