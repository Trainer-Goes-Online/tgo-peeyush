import Link from 'next/link';
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react/dist/ssr';

import { CHECKOUT_HREF, CTA_LABEL, PROMISE_NAME, PROMISE_TEXT } from './offer';
import { SeatCount } from './seat-count';

/* Every value is a hex measured on breathforhealth.in, or an alpha of one.
   globals.css carries the same palette as CSS variables: change both together. */
export const C = {
  page: '#FFFFFF',
  surface: '#FFFFFF',
  tint: 'rgba(16,185,129,0.2)',
  ink: '#06141C',
  inkSoft: 'rgba(6,20,28,0.74)',
  heading: '#0E2733',
  line: 'rgba(6,182,212,0.18)',
  lineStrong: 'rgba(6,182,212,0.4)',
  dark: '#06141C',
  band: '#0A1F2A',
  darkCard: '#0E2733',
  onDark: '#FFFFFF',
  onDarkMute: 'rgba(255,255,255,0.85)',
  accent: '#10B981',
  onAccent: '#06141C',
  cta: '#06B6D4',
  onCta: '#04141C',
  amber: '#F59E0B',
  error: '#DC2626',
} as const;

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1109px] px-5 ${className}`}>{children}</div>;
}

export function Band({
  tone,
  id,
  className = '',
  children,
}: {
  tone: 'white' | 'mint';
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${tone === 'mint' ? 'pp-band-mint' : 'pp-band-white'} py-14 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export function Hl({ children }: { children: React.ReactNode }) {
  return <span className="pp-hl">{children}</span>;
}

export function SectionHeading({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <h2 className="pp-h2">{children}</h2>
      <span className="pp-rule" aria-hidden />
      {sub ? (
        <p className="mx-auto mt-5 max-w-2xl font-display text-[17px] font-medium leading-snug sm:text-[20px]" style={{ color: C.inkSoft }}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* The copy's [CTA BLOCK]: button, scarcity line, promise line. */
export function CtaBlock({
  id,
  className = '',
  hero = false,
}: {
  id?: string;
  className?: string;
  hero?: boolean;
}) {
  return (
    <div id={id} className={`flex flex-col items-center text-center ${className}`}>
      {hero ? (
        <Link href={CHECKOUT_HREF} className="cta-pill cta-pill--hero w-full max-w-[560px]">
          <span>{CTA_LABEL}</span>
          <span className="cta-arrow" aria-hidden>
            <ArrowRight weight="bold" />
          </span>
        </Link>
      ) : (
        <Link href={CHECKOUT_HREF} className="cta-pill w-full max-w-[560px]">
          <span>{CTA_LABEL}</span>
          <ArrowRight weight="bold" aria-hidden />
        </Link>
      )}
      <p className="mt-3 w-full max-w-[560px] text-[14.5px] leading-snug sm:text-[15px]" style={{ color: C.inkSoft }}>
        <ShieldCheck weight="fill" aria-hidden className="pp-promise-icon" style={{ color: C.accent }} />
        <span className="font-semibold underline underline-offset-2" style={{ color: C.heading }}>
          {PROMISE_NAME}
        </span>
        : <em>{PROMISE_TEXT}</em>
      </p>
      {hero ? (
        <p className="mt-4 font-display text-[16px] font-bold leading-snug sm:text-[17px]" style={{ color: C.heading }}>
          Last{' '}
          <span className="seat-chip">
            <SeatCount />
          </span>{' '}
          Seats Left - Booking Closes Once Full
        </p>
      ) : (
        <p className="mt-4 font-display text-[15px] font-semibold italic sm:text-[16px]" style={{ color: C.heading }}>
          Last <SeatCount /> Seats Left - Booking Closes Once Full
        </p>
      )}
    </div>
  );
}
