import { SITE, navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-brand-maroon/10 px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-brand-ink/70 sm:flex-row dark:text-white/60">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-maroon dark:hover:text-brand-teal">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
