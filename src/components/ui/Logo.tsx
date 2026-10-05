/** Recreation of the TIS emblem and wordmark; swap for the official asset when available. */
export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden>
        <path d="M20 38V22" className="stroke-brand-sun" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M20 24C10 24 5 16 6 6c10 0 15 6 14 18Z" className="fill-brand-leaf" />
        <path d="M20 24C30 24 35 16 34 6c-10 0-15 6-14 18Z" className="fill-brand-sun" />
        <path d="M20 16C14 14 14 7 20 2c6 5 6 12 0 14Z" className="fill-brand-leaf" />
      </svg>
      <span className="leading-none">
        <span className="block font-brand text-2xl tracking-wide">TULA&apos;S</span>
        <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.12em]">INTERNATIONAL SCHOOL</span>
      </span>
    </span>
  );
}
