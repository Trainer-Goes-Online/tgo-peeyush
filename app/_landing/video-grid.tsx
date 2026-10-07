'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from '@phosphor-icons/react/dist/ssr';

import { asset } from './asset-version';
import type { Clip } from './content';

const embed = (id: string) =>
  `https://player.vimeo.com/video/${id}?dnt=1&autoplay=1&title=0&byline=0&portrait=0`;

function VideoCard({ clip, sizes }: { clip: Clip; sizes: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="pp-video-card">
      <div className="pp-video-frame">
        {playing ? (
          <iframe
            src={embed(clip.vimeoId)}
            title={`${clip.name}, video testimonial`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="pp-video-poster"
            aria-label={`Play ${clip.name}'s video testimonial`}
          >
            <Image
              src={asset(clip.poster)}
              alt=""
              fill
              sizes={sizes}
              className={clip.portrait ? 'object-contain' : 'object-cover'}
            />
            <span className="pp-play" aria-hidden>
              <Play weight="fill" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="pp-video-caption">{clip.name}</figcaption>
    </figure>
  );
}

export default function VideoGrid({ clips, columns }: { clips: Clip[]; columns: 2 | 3 }) {
  const sizes =
    columns === 3
      ? '(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw'
      : '(min-width: 1024px) 525px, (min-width: 640px) 50vw, 100vw';

  return (
    <ul className={`pp-video-grid ${columns === 3 ? 'pp-video-grid--3' : 'pp-video-grid--2'}`}>
      {clips.map((clip) => (
        <li key={clip.vimeoId}>
          <VideoCard clip={clip} sizes={sizes} />
        </li>
      ))}
    </ul>
  );
}
