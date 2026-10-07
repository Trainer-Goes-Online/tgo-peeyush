import { PRICE_RUPEES, WORKSHOP_NAME } from '@/app/_landing/offer';

/* The one origin literal in the codebase. `||` rather than `??` so a blank
   env value falls back too; the trailing slash is stripped because the
   webhook appends `/checkout` to it. */
export const SITE_ORIGIN = ((process.env.NEXT_PUBLIC_SITE_URL || '').trim() ||
  'https://drpeeyushprabhat.com').replace(/\/+$/, '');

export const CHECKOUT_CONFIG = {
  amountRupees: PRICE_RUPEES,
  amountPaise: PRICE_RUPEES * 100,
  currency: 'INR',
  /* GA4 item name and the Pabbly `product` column only. Never sent to Meta. */
  contentName: WORKSHOP_NAME,
  /* Written into notes.kind by create-order and matched by the webhook, which
     ignores every payment on the Razorpay account that does not carry it. */
  orderKind: 'peeyush_2day_breath_workshop',
  fallbackEventSourceUrl: SITE_ORIGIN,
  meta: {
    pixelId: process.env.META_PIXEL_ID ?? '',
    accessToken: process.env.META_CAPI_ACCESS_TOKEN ?? '',
    testEventCode: process.env.META_CAPI_TEST_EVENT_CODE ?? '',
  },
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID ?? '',
    keySecret: process.env.RAZORPAY_KEY_SECRET ?? '',
    /* Settings -> Webhooks, not the API Keys page. */
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET ?? '',
  },
} as const;

export const capiReady = () =>
  Boolean(CHECKOUT_CONFIG.meta.pixelId && CHECKOUT_CONFIG.meta.accessToken);

/* Derived from the key prefix so it cannot drift from the keys in use. */
export const isTestMode = () =>
  CHECKOUT_CONFIG.razorpay.keyId.startsWith('rzp_test_') ||
  Boolean(CHECKOUT_CONFIG.meta.testEventCode);
