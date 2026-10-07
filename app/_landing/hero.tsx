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

        <p className="pp-hero-head mt-4 max-w-[900px]">
          Overcome <b className="pp-u">Asthma, Respiratory Issues, Migraines, Sinus, Poor Sleep, Stress etc.</b>{' '}
          by mastering a simple <b className="pp-u">10-Min Breath Routine</b>
        </p>

        <p className="mt-5 max-w-3xl font-display text-[17px] font-semibold leading-snug sm:text-[21px]" style={{ color: C.heading }}>
          <span className="pp-u">Without medicines, expensive treatments or long yoga sessions</span>
        </p>
      </Container>

      <Container className="mt-10 grid items-center gap-8 sm:mt-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-12">
        <div className="mx-auto w-full max-w-[420px]">
          <Image
            src={asset('/images/peeyush-portrait.webp')}
            alt="Dr. Peeyush Prabhat holding a TEDx sign"
            width={420}
            height={560}
            priority
            sizes="(min-width: 460px) 420px, calc(100vw - 40px)"
            className="pp-portrait"
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-display text-[16px] font-bold sm:text-[17px]" style={{ color: C.heading }}>
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} weight="fill" className="pp-star" style={{ color: C.amber }} />
              ))}
            </span>
            <span>
              <span className="sr-only">Five stars, </span>
              {RATING} {RATING_LABEL}
            </span>
          </p>

          <ul className="mt-6 grid w-full max-w-[560px] grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {FACTS.map(({ Icon, text }) => (
              <li key={text} className="pp-tile">
                <span className="pp-tile-icon" aria-hidden>
                  <Icon weight="bold" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <CtaBlock id="hero-cta" className="mt-8 w-full" />
        </div>
      </Container>
    </header>
  );
}
