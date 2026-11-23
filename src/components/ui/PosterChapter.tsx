import { ReactNode } from 'react';

export type ChapterSurface = 'canvas' | 'white' | 'lavender' | 'peach' | 'sky' | 'carbon';

interface PosterChapterProps {
  id: string;
  title: ReactNode;
  subtitle?: string;
  surface?: ChapterSurface;
  framed?: boolean;
  align?: 'center' | 'left';
  children: ReactNode;
}

const SURFACE_CLASSES: Record<
  ChapterSurface,
  { bg: string; title: string; subtitle: string; divider: string }
> = {
  canvas: {
    bg: 'bg-bg-canvas text-ink-carbon',
    title: 'text-ink-carbon',
    subtitle: 'text-ink-slate',
    divider: 'border-ink-carbon/10',
  },
  white: {
    bg: 'bg-bg-white text-ink-carbon',
    title: 'text-ink-carbon',
    subtitle: 'text-ink-slate',
    divider: 'border-ink-carbon/10',
  },
  lavender: {
    bg: 'bg-brand-lavender text-ink-carbon',
    title: 'text-ink-carbon',
    subtitle: 'text-ink-carbon/85',
    divider: 'border-ink-carbon/15',
  },
  peach: {
    bg: 'bg-poster-peach text-ink-carbon',
    title: 'text-ink-carbon',
    subtitle: 'text-ink-carbon/85',
    divider: 'border-ink-carbon/15',
  },
  sky: {
    bg: 'bg-poster-sky text-ink-carbon',
    title: 'text-ink-carbon',
    subtitle: 'text-ink-carbon/85',
    divider: 'border-ink-carbon/15',
  },
  carbon: {
    bg: 'bg-ink-carbon text-ink-light',
    title: 'text-ink-light',
    subtitle: 'text-ink-light-muted',
    divider: 'border-white/12',
  },
};

export function PosterChapter({
  id,
  title,
  subtitle,
  surface = 'canvas',
  framed = false,
  align = 'center',
  children,
}: PosterChapterProps) {
  const palette = SURFACE_CLASSES[surface];

  const innerContent = (
    <div className="mx-auto w-full max-w-[780px] px-5 sm:px-8">
      <header
        className={`space-y-4 border-b pb-8 ${palette.divider} ${
          align === 'center' ? 'text-center' : 'text-left'
        }`}
      >
        <h2
          className={`font-display text-3xl font-extrabold uppercase leading-[1.04] tracking-[-0.03em] sm:text-4xl lg:text-[2.85rem] ${palette.title}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`max-w-[54ch] text-base leading-relaxed sm:text-lg ${palette.subtitle} ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </header>

      <div className="mt-10">{children}</div>
    </div>
  );

  if (framed) {
    return (
      <section id={id} className="bg-bg-white px-3 py-4 sm:px-6 sm:py-6">
        <div className={`py-16 sm:py-24 ${palette.bg}`}>
          {innerContent}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-20 sm:py-28 ${palette.bg}`}>
      {innerContent}
    </section>
  );
}
