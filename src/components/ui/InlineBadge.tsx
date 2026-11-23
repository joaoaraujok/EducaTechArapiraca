import { ReactNode } from 'react';

export type InlineBadgeTone = 'lime' | 'lavender' | 'sky' | 'peach' | 'white' | 'purple';

interface InlineBadgeProps {
  children: ReactNode;
  tone?: InlineBadgeTone;
  rotate?: 'left' | 'right' | 'none';
  className?: string;
}

const TONE_CLASSES: Record<InlineBadgeTone, string> = {
  lime: 'bg-poster-lime text-ink-carbon',
  lavender: 'bg-brand-lavender text-ink-carbon',
  sky: 'bg-poster-sky text-ink-carbon',
  peach: 'bg-poster-peach text-ink-carbon',
  white: 'bg-bg-white text-ink-carbon shadow-sm',
  purple: 'bg-brand-purple text-white',
};

const ROTATE_CLASSES: Record<'left' | 'right' | 'none', string> = {
  left: '-rotate-2',
  right: 'rotate-2',
  none: '',
};

export function InlineBadge({
  children,
  tone = 'lime',
  rotate = 'left',
  className = '',
}: InlineBadgeProps) {
  return (
    <span
      className={`mx-1 inline-block rounded-xl px-3 py-0.5 align-baseline font-display font-extrabold tracking-[-0.02em] ${TONE_CLASSES[tone]} ${ROTATE_CLASSES[rotate]} ${className}`}
    >
      {children}
    </span>
  );
}
