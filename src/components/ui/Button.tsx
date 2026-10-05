import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'link';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

// Variants are designed for the maroon surfaces used by the header, hero and CTA.
const styles: Record<Variant, string> = {
  solid: 'bg-white text-brand-maroon hover:bg-white/90',
  outline: 'border border-white/40 text-white hover:bg-white/10',
  link: 'text-white hover:text-brand-teal',
};

export default function Button({ href, children, variant = 'solid', className = '', onClick }: ButtonProps) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
