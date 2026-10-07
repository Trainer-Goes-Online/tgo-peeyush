'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

import { CHECKOUT_HREF, CTA_LABEL, CTA_SCARCITY } from './offer';

/* Hidden while the hero CTA is on screen (two identical buttons in one view)
   and again once the footer arrives, so it never sits over the legal details. */
export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta');
    const end = document.getElementById('page-end');
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const r = heroCta?.getBoundingClientRect();
      const heroCtaOffscreen = r ? r.bottom < 0 || r.top > vh : true;
      const atEnd = end ? end.getBoundingClientRect().top < vh : false;
      setShow(heroCtaOffscreen && !atEnd);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pp-sticky" data-show={show} aria-hidden={!show}>
      <div className="mx-auto flex w-full max-w-[1109px] flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:gap-6 sm:px-5">
        <p className="pp-sticky-scarcity">{CTA_SCARCITY}</p>
        <Link href={CHECKOUT_HREF} className="cta-pill pp-sticky-cta" tabIndex={show ? 0 : -1}>
          <span>{CTA_LABEL}</span>
          <ArrowRight weight="bold" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
