import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { generalEventInfo } from '../data/general';
import { EASE_ARCHITECTURAL } from '../lib/motion';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(generalEventInfo.faq[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <PosterChapter
      id="faq"
      surface="canvas"
      title={
        <>
          Perguntas{' '}
          <InlineBadge tone="lime" rotate="left">
            frequentes
          </InlineBadge>
        </>
      }
      subtitle="Regras de formação de equipes, níveis escolares, modalidades disponíveis e estrutura das provas."
    >
      <div className="space-y-3">
        {generalEventInfo.faq.map((item, idx) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;

          return (
            <InteractiveCard
              key={item.id}
              delay={idx * 0.03}
              hoverLift={-2}
              hoverScale={1.006}
              className="rounded-2xl border border-ink-carbon/10 bg-bg-white px-5 hover:border-brand-purple/35 sm:px-6"
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                  className="group flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="flex items-baseline gap-3.5">
                    <span className="tabular-nums-ui text-xs font-bold text-brand-purple">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-base font-bold tracking-tight text-ink-carbon transition-colors group-hover:text-brand-purple sm:text-lg">
                      {item.question}
                    </span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: EASE_ARCHITECTURAL }}
                    className="shrink-0 text-brand-purple"
                    aria-hidden="true"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE_ARCHITECTURAL }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-8 pr-2">
                      <p className="max-w-[52ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </InteractiveCard>
          );
        })}
      </div>
    </PosterChapter>
  );
}
