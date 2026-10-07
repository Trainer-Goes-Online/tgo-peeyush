/* Business facts for the footer and the three policy pages. Supplied by Atul
   for this client on 15 Sep 2026; carried over unchanged into the rebuild. */
export const LEGAL = {
  entity: 'Breath for health program',
  tradeName: 'Breath for health program',
  /* Deliberately empty until the client states it: the terms page omits the
     phrase rather than guess who the counterparty is. Fill as it reads in a
     sentence, e.g. 'sole proprietor'. */
  structure: '',
  // ⚠️ Ships without a PIN, on Atul's instruction of 16 Sep 2026.
  address: 'B Block, Hari Nagar, New Delhi, Delhi',
  phone: '+91 99104 29440',
  phoneHref: '+919910429440',
  email: 'breath4healthcommunity@gmail.com',
  jurisdiction: 'Delhi',
  effectiveDate: '7 October 2026',
  brand: 'Dr. Peeyush Prabhat',
  product: '2-Day Breath Healing Mastery Workshop',
} as const;

export const LEGAL_STRUCTURE_KNOWN = LEGAL.structure.trim().length > 0;

/* The client's own disclaimer wording, verbatim from the previous build's
   copy source. ⚠️ The breath-healing copy doc carries no disclaimer, so this
   still says "The challenge"; the client should confirm or reissue it. */
export const LEGAL_DISCLAIMER =
  'All content, live sessions and resources are for educational and general wellness purposes only. This is not medical advice and does not diagnose, treat, cure or prevent any disease. The challenge complements, but does not replace, care from your doctor. Consult a qualified healthcare professional before changing your health routine, especially if you have a medical condition, take medication or are undergoing treatment. Do not stop or alter prescribed medication without medical guidance. Individual results vary based on age, medical history, lifestyle, participation and consistency. Testimonials reflect individual experiences and do not guarantee similar results. This website is not affiliated with or endorsed by Meta. FACEBOOK and INSTAGRAM are trademarks of Meta Platforms, Inc.';
