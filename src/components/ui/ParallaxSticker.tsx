import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EASE_ARCHITECTURAL } from '../../lib/motion';

export type StickerTone = 'lime' | 'white' | 'lavender' | 'sky' | 'peach' | 'purple';

interface ParallaxStickerProps {
  value: string;
  label: string;
  detail?: string;
  tone?: StickerTone;
  tilt?: number;
  offsetY?: [number, number];
  align?: 'left' | 'right' | 'center';
}

const TONE_CLASSES: Record<StickerTone, { card: string; value: string; label: string; detail: string }> = {
  lime: {
    card: 'bg-poster-lime border-ink-carbon/15',
    value: 'text-ink-carbon',
    label: 'text-ink-carbon',
    detail: 'text-ink-carbon/80',
  },
  white: {
    card: 'bg-bg-white border-ink-carbon/12',
    value: 'text-brand-purple',
    label: 'text-ink-carbon',
    detail: 'text-ink-slate',
  },
  lavender: {
    card: 'bg-brand-lavender border-ink-carbon/15',
    value: 'text-ink-carbon',
    label: 'text-ink-carbon',
    detail: 'text-ink-carbon/85',
  },
  sky: {
    card: 'bg-poster-sky border-ink-carbon/15',
    value: 'text-ink-carbon',
    label: 'text-ink-carbon',
    detail: 'text-ink-carbon/85',
  },
  peach: {
    card: 'bg-poster-peach border-ink-carbon/15',
    value: 'text-ink-carbon',
    label: 'text-ink-carbon',
    detail: 'text-ink-carbon/85',
  },
  purple: {
    card: 'bg-brand-purple border-brand-plum/30',
    value: 'text-poster-lime',
    label: 'text-ink-light',
    detail: 'text-ink-light-muted',
  },
};

export function ParallaxSticker({
  value,
  label,
  detail,
  tone = 'lime',
  tilt = -2,
  offsetY = [22, -22],
  align = 'center',
}: ParallaxStickerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], offsetY);

  const palette = TONE_CLASSES[tone];
  const alignClass =
    align === 'left'
      ? 'mr-auto'
      : align === 'right'
        ? 'ml-auto'
        : 'mx-auto';

  return (
    <div ref={containerRef} className="relative">
      <motion.div style={{ y }} className="will-change-transform">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: tilt }}
          whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
          viewport={{ once: true, amount: 'some' }}
          whileHover={{
            y: -6,
            scale: 1.03,
            rotate: 0,
            transition: { type: 'spring', stiffness: 320, damping: 22 },
          }}
          transition={{ duration: 0.48, ease: EASE_ARCHITECTURAL }}
          className={`w-full max-w-[340px] rounded-xl px-6 py-5 shadow-editorial-card transition-shadow duration-300 hover:shadow-[0_28px_60px_-24px_rgba(17,16,24,0.28)] ${palette.card} ${alignClass}`}
        >
          <p className={`tabular-nums-ui font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl ${palette.value}`}>
            {value}
          </p>
          <p className={`mt-1.5 font-display text-base font-bold ${palette.label}`}>
            {label}
          </p>
          {detail && (
            <p className={`mt-1 text-sm leading-relaxed ${palette.detail}`}>
              {detail}
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
