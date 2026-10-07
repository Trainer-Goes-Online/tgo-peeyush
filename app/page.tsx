import FunnelTracker from '@/components/FunnelTracker';
import SiteFooter from '@/components/SiteFooter';

import Hero from './_landing/hero';
import {
  Bonuses,
  Challenges,
  Faq,
  MeetYourGuide,
  SuccessStories,
  SuccessStoriesRepeat,
  WhatWillChange,
  WhatYoullLearn,
} from './_landing/sections';
import StickyBar from './_landing/sticky-bar';

export default function Page() {
  return (
    <>
      <FunnelTracker />
      <main>
        <Hero />
        <SuccessStories />
        <WhatWillChange />
        <Challenges />
        <WhatYoullLearn />
        <SuccessStoriesRepeat />
        <Bonuses />
        <MeetYourGuide />
        <Faq />
      </main>
      <StickyBar />
      <div id="page-end" aria-hidden />
      <SiteFooter />
    </>
  );
}
