import type { Metadata, Viewport } from 'next';
import { DM_Sans, Montserrat } from 'next/font/google';

import Analytics from '@/components/Analytics';
import MetaPixel from '@/components/MetaPixel';
import { SITE_ORIGIN } from '@/lib/checkout-config';
import { DATES, FORMAT, SESSION_TIME, WORKSHOP_NAME } from './_landing/offer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const TITLE = `${WORKSHOP_NAME} | Dr. Peeyush Prabhat`;
const DESCRIPTION = `${FORMAT} with Dr. Peeyush Prabhat. ${DATES}, ${SESSION_TIME} IST.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_ORIGIN,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Dr. Peeyush Prabhat',
  },
  twitter: { card: 'summary_large_image', title: TITLE },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <MetaPixel />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
