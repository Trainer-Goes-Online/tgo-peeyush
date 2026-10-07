import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

import { LEGAL } from '@/app/_landing/legal';
import { C } from '@/app/_landing/shared';
import SiteFooter from './SiteFooter';

const PROSE = [
  '[&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:leading-snug sm:[&_h2]:text-[24px]',
  '[&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-[16px] [&_h3]:font-bold',
  '[&_p]:mt-3',
  '[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5 [&_li]:leading-[1.7]',
  '[&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2',
  '[&_strong]:font-semibold',
].join(' ');

export default function LegalPageLayout({
  title,
  effectiveDate,
  intro,
  children,
}: {
  title: string;
  effectiveDate: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="font-body" style={{ background: C.page }}>
        <header
          className="px-4 py-14 sm:px-6 sm:py-16"
          style={{ background: C.dark, color: C.onDark }}
        >
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold"
              style={{ color: C.onDarkMute }}
            >
              <ArrowLeft size={14} weight="bold" aria-hidden="true" />
              Back to {LEGAL.brand}
            </Link>
            <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.08] sm:text-[38px]">
              {title}
            </h1>
            <p
              className="mt-3 text-[12.5px] font-medium uppercase tracking-[0.18em]"
              style={{ color: C.onDarkMute }}
            >
              Effective {effectiveDate}
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-[15.5px] leading-relaxed sm:text-[16.5px]" style={{ color: C.inkSoft }}>
            {intro}
          </p>
          <div
            className={`mt-8 space-y-7 text-[15px] leading-relaxed sm:mt-10 sm:text-[16px] [&_a]:text-[color:var(--legal-ink)] [&_h2]:text-[color:var(--legal-ink)] [&_h3]:text-[color:var(--legal-ink)] [&_strong]:text-[color:var(--legal-ink)] ${PROSE}`}
            style={{ color: C.inkSoft, ['--legal-ink' as string]: C.ink }}
          >
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
