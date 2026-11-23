import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EASE_ARCHITECTURAL } from '../../lib/motion';

export interface KineticDeckItem {
  id: string;
  title: string;
  description: string;
}

interface KineticDeckProps {
  items: KineticDeckItem[];
  ariaLabel: string;
}

export function KineticDeck({ items, ariaLabel }: KineticDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  if (items.length === 0) return null;

  const currentItem = items[activeIndex];
  const total = items.length;

  const goTo = (nextIdx: number, dir: 1 | -1) => {
    setDirection(dir);
    setActiveIndex(nextIdx);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? total - 1 : activeIndex - 1;
    goTo(nextIdx, -1);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === total - 1 ? 0 : activeIndex + 1;
    goTo(nextIdx, 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      className="space-y-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.48, ease: EASE_ARCHITECTURAL }}
        whileHover={{
          y: -4,
          scale: 1.01,
          transition: { type: 'spring', stiffness: 320, damping: 24 },
        }}
        className="overflow-hidden rounded-[28px] border border-ink-carbon/10 bg-bg-canvas p-6 shadow-editorial-card transition-[border-color,box-shadow] duration-300 hover:border-brand-purple/30 hover:shadow-[0_28px_60px_-24px_rgba(109,40,217,0.22)] sm:p-8"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentItem.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -28 }}
            transition={{ duration: 0.28, ease: EASE_ARCHITECTURAL }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="tabular-nums-ui inline-flex h-10 items-center rounded-full bg-brand-lavender/70 px-4 font-display text-sm font-extrabold text-ink-carbon">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-purple">
                Pilar pedagógico
              </span>
            </div>

            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon sm:text-3xl">
              {currentItem.title}
            </h3>

            <p className="max-w-[54ch] text-base leading-relaxed text-ink-slate">
              {currentItem.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Pilar anterior"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-carbon/20 bg-white text-ink-carbon transition-colors hover:border-brand-purple hover:bg-brand-lavender/35 active:scale-[0.96]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo pilar"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-carbon/20 bg-white text-ink-carbon transition-colors hover:border-brand-purple hover:bg-brand-lavender/35 active:scale-[0.96]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Selecionar pilar">
          {items.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`${idx + 1}: ${item.title}`}
                onClick={() => goTo(idx, idx >= activeIndex ? 1 : -1)}
                className={`tabular-nums-ui inline-flex h-11 min-w-[44px] items-center justify-center rounded-full px-3 text-xs font-bold transition-colors ${
                  isCurrent
                    ? 'bg-ink-carbon text-ink-light'
                    : 'bg-ink-carbon/[0.06] text-ink-slate hover:bg-brand-lavender/45 hover:text-ink-carbon'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
