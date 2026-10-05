import type { Metadata } from 'next';
import { Libre_Baskerville, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const brand = Libre_Baskerville({ subsets: ['latin'], weight: '700', variable: '--font-brand', display: 'swap' });

export const metadata: Metadata = {
  title: 'Tulas International School | CBSE Boarding School in Dehradun',
  description: 'CBSE co-ed boarding and day school in Dehradun for Classes 4 to 12. Explore the campus and apply online.',
};

// Runs before paint so the saved theme never flashes the wrong colors.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${brand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
