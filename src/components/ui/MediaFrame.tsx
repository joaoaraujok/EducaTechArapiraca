import { ReactNode, useState } from 'react';
import { InlineBadgeTone } from './InlineBadge';
import { TiltStage } from './TiltStage';

interface MediaFrameProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  priority?: boolean;
  tilt?: boolean;
  frameTone?: 'light' | 'dark';
  angleClass?: string;
  cornerTag?: {
    label: string;
    tone?: InlineBadgeTone;
  };
  fallback?: ReactNode;
  className?: string;
}

const CORNER_TAG_TONES: Record<InlineBadgeTone, string> = {
  lime: 'bg-poster-lime text-ink-carbon',
  lavender: 'bg-brand-lavender text-ink-carbon',
  sky: 'bg-poster-sky text-ink-carbon',
  peach: 'bg-poster-peach text-ink-carbon',
  white: 'bg-bg-white text-ink-carbon',
  purple: 'bg-brand-purple text-white',
};

export function MediaFrame({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[16/10]',
  priority = false,
  tilt = true,
  frameTone = 'light',
  angleClass = '',
  cornerTag,
  fallback,
  className = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src && !hasError);
  const isDark = frameTone === 'dark';

  const frame = (
    <figure
      className={`group relative overflow-hidden rounded-[24px] border transition-transform duration-500 ${
        isDark
          ? 'border-white/12 bg-ink-carbon shadow-poster-stage'
          : 'border-ink-carbon/12 bg-bg-white shadow-editorial-card'
      } ${angleClass} ${className}`}
    >
      <div className={`relative w-full overflow-hidden bg-ink-carbon ${aspectClass}`}>
        {showImage ? (
          <>
            <img
              src={src}
              alt={alt}
              loading={priority ? undefined : 'lazy'}
              fetchPriority={priority ? 'high' : undefined}
              decoding="async"
              onError={() => setHasError(true)}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="studio-vignette pointer-events-none absolute inset-0" aria-hidden="true" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink-carbon p-6">
            {fallback ?? (
              <span className="text-sm font-medium text-ink-light-muted">{alt}</span>
            )}
          </div>
        )}

        {cornerTag && (
          <span
            className={`absolute left-4 top-4 -rotate-2 rounded-xl px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wide shadow-sm ${
              CORNER_TAG_TONES[cornerTag.tone ?? 'lime']
            }`}
          >
            {cornerTag.label}
          </span>
        )}
      </div>

      {caption && (
        <figcaption
          className={`border-t px-5 py-3.5 text-xs font-medium sm:px-6 ${
            isDark
              ? 'border-white/10 bg-ink-carbon text-ink-light-muted'
              : 'border-ink-carbon/10 bg-bg-white text-ink-slate'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );

  if (tilt) {
    return <TiltStage className="rounded-[24px]">{frame}</TiltStage>;
  }

  return frame;
}
