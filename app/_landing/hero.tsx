import Image from 'next/image';
import { CalendarBlank, Clock, Gift, Star, Stethoscope } from '@phosphor-icons/react/dist/ssr';

import { asset } from './asset-version';
import {
  AUDIENCE_LINE,
  BONUS_TOTAL_LABEL,
  DATES,
  FORMAT,
  RATING,
  RATING_LABEL,
  SESSION_TIME,
  WORKSHOP_NAME,
} from './offer';
import { C, Container, CtaBlock } from './shared';

const FACTS = [
  { Icon: Stethoscope, text: FORMAT },
  { Icon: CalendarBlank, text: DATES },
  { Icon: Clock, text: SESSION_TIME },
  { Icon: Gift, text: BONUS_TOTAL_LABEL },
];

export default function Hero() {
  return (
    <header className="pp-band-white pb-14 sm:pb-20">
      <Container className="flex flex-col items-center text-center">
        <h1 className="pp-top-pill">{WORKSHOP_NAME}</h1>

        <p className="mt-7 max-w-3xl font-display text-[16px] font-semibold leading-snug sm:text-[19px]" style={{ color: C.inkSoft }}>
          {AUDIENCE_LINE}
        </p>

        <p className="pp-hero-head mt-6 max-w-[900px] sm:mt-7">
          Overcome <b className="pp-u">Asthma, Respiratory Issues, Migraines, Sinus, Poor Sleep, Stress etc.</b>{' '}
          by mastering a simple <b className="pp-u">10-Min Breath Routine</b>
        </p>

        <p className="mt-5 max-w-3xl font-display text-[17px] font-semibold leading-snug sm:text-[21px]" style={{ color: C.heading }}>
          <span className="pp-u">Without medicines, expensive treatments or long yoga sessions</span>
        </p>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-[16px] font-bold sm:text-[17px]" style={{ color: C.heading }}>
          <span className="sr-only">
            {RATING} out of 5 {RATING_LABEL}
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/images/trustpilot-logo.svg')} alt="" width={114} height={28} className="h-[26px] w-auto" aria-hidden />
          <span className="h-5 w-px" style={{ background: C.heading, opacity: 0.25 }} aria-hidden />
          <span className="flex items-center gap-0.5" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} weight="fill" className="pp-star" style={{ color: C.amber }} />
            ))}
          </span>
          <span aria-hidden>{RATING} Rating</span>
        </p>
      </Container>

      <Container className="mt-10 grid items-center gap-8 sm:mt-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-12">
        <div className="mx-auto w-full max-w-[520px]">
          <Image
            src={asset('/images/peeyush-hero.webp')}
            alt="Dr. Peeyush Prabhat: trusted by 20K+ students, 1M+ YouTube subscribers, TEDx speaker"
            width={1431}
            height={1099}
            priority
            sizes="(min-width: 560px) 520px, calc(100vw - 40px)"
            className="pp-portrait"
          />
        </div>

        <div className="flex flex-col items-center">
          <ul className="grid w-full max-w-[560px] grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {FACTS.map(({ Icon, text }) => (
              <li key={text} className="pp-tile">
                <span className="pp-tile-icon" aria-hidden>
                  <Icon weight="bold" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <CtaBlock id="hero-cta" hero className="mt-8 w-full" />
        </div>
      </Container>
    </header>
  );
}
