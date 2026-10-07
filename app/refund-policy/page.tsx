import type { Metadata } from 'next';

import LegalPageLayout from '@/components/LegalPageLayout';

import { LEGAL } from '../_landing/legal';
import { PRICE, PROMISE_NAME, PROMISE_TEXT } from '../_landing/offer';

export const metadata: Metadata = {
  title: `Refund Policy | ${LEGAL.brand}`,
  description: `Refund terms for the ${LEGAL.product}.`,
  robots: { index: true, follow: true },
};

/* Sections 1 and 2 are the client's own promise and conditions, from the copy
   doc (hero promise line and FAQ 6). ⚠️ The client has not stated a request
   window, so no deadline is published; add one here once he does. */
export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      effectiveDate={LEGAL.effectiveDate}
      intro={`The ${LEGAL.product} is sold with our ${PROMISE_NAME}. Its terms are set out below.`}
    >
      <h2>1. The {PROMISE_NAME}</h2>
      <p>
        The {LEGAL.product} ({PRICE}) carries our <strong>{PROMISE_NAME}</strong>:{' '}
        {PROMISE_TEXT}
      </p>

      <h2>2. Conditions</h2>
      <p>
        Attend both sessions, practise the techniques as taught and experience
        the method for yourself. If you&rsquo;re not satisfied with the workshop,
        you can request a 100% refund.
      </p>

      <h2>3. How to request a refund</h2>
      <ul>
        <li>
          Email <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> from the same
          address you used at checkout.
        </li>
        <li>
          Use the subject line <strong>&ldquo;Refund Request: {LEGAL.product}&rdquo;</strong>.
        </li>
        <li>Include your full name and the date of purchase.</li>
      </ul>

      <h2>4. Processing time</h2>
      <p>
        A refund is initiated once your request has been checked against the
        payment record. Banks typically take 5 to 7 business days to show the
        credit after that, which is outside our control.
      </p>

      <h2>5. Refund method</h2>
      <p>
        Refunds go back to the original payment method used at checkout: the same
        card, UPI ID or account.
      </p>

      <h2>6. Chargebacks</h2>
      <p>
        Please email us before raising a dispute with your bank. A refund
        requested directly is handled faster.
      </p>

      <h2>7. Contact</h2>
      <p>
        {LEGAL.entity}, trading as {LEGAL.tradeName}, {LEGAL.address}.
        <br />
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        {' · '}
        <a href={`tel:${LEGAL.phoneHref}`}>{LEGAL.phone}</a>
      </p>
    </LegalPageLayout>
  );
}
