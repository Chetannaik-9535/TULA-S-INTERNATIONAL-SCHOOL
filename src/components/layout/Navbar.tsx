'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import ThemeToggle from '@/components/animation/ThemeToggle';
import { fadeUp, stagger } from '@/components/animation/variants';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { links, navLinks } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-maroon text-white shadow-lg shadow-black/10 dark:bg-brand-night">
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Tula's International School, home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-white/85 transition-colors hover:text-brand-teal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={`tel:${links.phone}`} className="hidden items-center gap-2 text-sm font-medium lg:flex">
            <Phone size={16} className="text-brand-teal" aria-hidden />
            {links.phoneLabel}
          </a>
          <ThemeToggle />
          <Button href={links.apply} className="hidden md:inline-flex">Apply Now</Button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full text-brand-teal md:hidden"
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <motion.ul variants={stagger} initial="hidden" animate="show" className="space-y-1 px-6 pb-6">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={fadeUp}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-xl font-semibold hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={fadeUp} className="pt-3">
                <Button href={links.apply} className="w-full" onClick={() => setOpen(false)}>Apply Now</Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
