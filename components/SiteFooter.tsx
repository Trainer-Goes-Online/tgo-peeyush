import Link from 'next/link';

import { LEGAL, LEGAL_DISCLAIMER } from '@/app/_landing/legal';
import { C } from '@/app/_landing/shared';

/* One footer on every page. The disclaimer is the client's own wording: never
   reworded, and identical wherever a buyer lands. The operator identity and
   contact sit here because gateway merchant review looks for them on the site
   itself, not only inside a policy page. */
export default function SiteFooter() {
  return (
    <footer className="px-4 py-10 font-body sm:px-6 sm:py-12" style={{ background: C.dark }}>
      <div className="mx-auto max-w-[1180px] text-center">
        <p
          className="font-display text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: C.accent }}
        >
          {LEGAL.brand} · {LEGAL.product}
        </p>

        <p
          className="mx-auto mt-5 max-w-4xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
          style={{ color: C.onDarkMute }}
        >
          {LEGAL_DISCLAIMER}
        </p>

        <p
          className="mx-auto mt-6 max-w-3xl text-[12px] leading-relaxed sm:text-[12.5px]"
          style={{ color: C.onDarkMute }}
        >
          {LEGAL.entity}, trading as {LEGAL.tradeName}
          <br />
          {LEGAL.address}
          <br />
          <a href={`mailto:${LEGAL.email}`} className="hover:underline">
            {LEGAL.email}
          </a>
          {' · '}
          <a href={`tel:${LEGAL.phoneHref}`} className="hover:underline">
            {LEGAL.phone}
          </a>
        </p>

        <p className="mt-4 text-[12px] sm:text-[13px]" style={{ color: C.onDarkMute }}>
          © {new Date().getFullYear()} {LEGAL.brand}. All rights reserved.
        </p>

        <nav
          aria-label="Legal"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px]"
          style={{ color: C.onDark }}
        >
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span aria-hidden style={{ color: C.onDarkMute }}>
            ·
          </span>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
          <span aria-hidden style={{ color: C.onDarkMute }}>
            ·
          </span>
          <Link href="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
