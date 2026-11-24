import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { festivalMovements } from '../data/curriculum';
import { generalEventInfo } from '../data/general';
import { EASE_ARCHITECTURAL } from '../lib/motion';
import { FestivalMovement } from '../types/event';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { ModalDialog } from './ui/ModalDialog';
import { ParallaxSticker, StickerTone } from './ui/ParallaxSticker';
import { PosterChapter } from './ui/PosterChapter';
import { Reveal } from './ui/Reveal';
import { SpecList } from './ui/SpecList';

const HIGHLIGHT_STICKERS: Array<{
  tone: StickerTone;
  tilt: number;
  offsetY: [number, number];
  align: 'left' | 'right' | 'center';
}> = [
  { tone: 'lime', tilt: -2.2, offsetY: [24, -24], align: 'left' },
  { tone: 'white', tilt: 1.8, offsetY: [14, -20], align: 'right' },
  { tone: 'sky', tilt: -1.4, offsetY: [20, -18], align: 'center' },
];

export function AboutSection() {
  const { about, hero } = generalEventInfo;
  const [selectedMovement, setSelectedMovement] = useState<{
    movement: FestivalMovement;
    triggerEl: HTMLButtonElement | null;
  } | null>(null);

  const audienceItems = about.audiences.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    accent: true,
  }));

  return (
    <>
      {/* Capítulo 1: Sobre o evento e públicos principais */}
      <PosterChapter
        id="sobre"
        surface="lavender"
        framed
        title={
          <>
            Currículo em ação em{' '}
            <InlineBadge tone="lime" rotate="left">
              Arapiraca
            </InlineBadge>
          </>
        }
        subtitle={about.lead}
      >
        <div className="space-y-10">
          <Reveal className="space-y-4 text-center">
            <p className="mx-auto max-w-[54ch] text-base leading-relaxed text-ink-carbon/90">
              {about.description}
            </p>
            <div className="mx-auto inline-flex rounded-full border border-ink-carbon/15 bg-white/80 px-5 py-2.5 text-xs font-semibold text-ink-carbon sm:text-sm">
              {about.conceptLabel}
            </div>
          </Reveal>

          <InteractiveCard className="space-y-5 rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
            <div className="space-y-1.5 border-b border-ink-carbon/10 pb-4">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon">
                Públicos principais do festival
              </h3>
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                O encontro articula a escola, a família, a pesquisa científica e o ecossistema de
                inovação em torno do protagonismo estudantil.
              </p>
            </div>

            <SpecList items={audienceItems} tone="light" />
          </InteractiveCard>

          <div className="space-y-5 pt-2">
            {hero.highlights.map((item, idx) => {
              const styleCfg = HIGHLIGHT_STICKERS[idx % HIGHLIGHT_STICKERS.length];
              return (
                <ParallaxSticker
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  detail={item.detail}
                  tone={styleCfg.tone}
                  tilt={styleCfg.tilt}
                  offsetY={styleCfg.offsetY}
                  align={styleCfg.align}
                />
              );
            })}
          </div>
        </div>
      </PosterChapter>

      {/* Capítulo 2: Os cinco movimentos pedagógicos interativos */}
      <PosterChapter
        id="movimentos"
        surface="white"
        title={
          <>
            Os cinco movimentos do{' '}
            <InlineBadge tone="lavender" rotate="right">
              evento
            </InlineBadge>
          </>
        }
        subtitle="Clique em qualquer etapa abaixo para abrir a janela pedagógica explicando o significado e a atuação de estudantes e educadores na prática."
      >
        <ol className="relative space-y-4 border-l-2 border-brand-purple/25 pl-6 sm:pl-8">
          {festivalMovements.map((movement, index) => (
            <motion.li
              key={movement.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: EASE_ARCHITECTURAL }}
              className="relative"
            >
              <span
                className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full bg-brand-purple ring-4 ring-bg-white sm:-left-[39px]"
                aria-hidden="true"
              />

              <motion.button
                type="button"
                onClick={(event) =>
                  setSelectedMovement({ movement, triggerEl: event.currentTarget })
                }
                whileHover={{
                  y: -4,
                  x: 4,
                  scale: 1.01,
                  transition: { type: 'spring', stiffness: 320, damping: 24 },
                }}
                whileTap={{ scale: 0.985 }}
                className="group w-full rounded-[24px] border border-ink-carbon/10 bg-bg-canvas p-5 text-left transition-[background-color,border-color,box-shadow] duration-200 hover:border-brand-purple/40 hover:bg-bg-white hover:shadow-[0_24px_48px_-20px_rgba(109,40,217,0.2)] sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="tabular-nums-ui font-display text-2xl font-extrabold tracking-tight text-brand-purple">
                    {movement.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-white px-3.5 py-1 text-xs font-bold text-ink-carbon transition-colors group-hover:bg-poster-lime">
                    <span>Ver na prática</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink-carbon sm:text-2xl">
                  {movement.title}
                </h3>

                <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                  {movement.summary}
                </p>
              </motion.button>
            </motion.li>
          ))}
        </ol>

        <ModalDialog
          open={Boolean(selectedMovement)}
          onClose={() => setSelectedMovement(null)}
          title={
            selectedMovement
              ? `${selectedMovement.movement.number} · ${selectedMovement.movement.title}`
              : ''
          }
          subtitle="Significado pedagógico na prática"
          returnFocusTo={selectedMovement?.triggerEl}
        >
          {selectedMovement && (
            <div className="mt-5 space-y-5">
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-carbon sm:text-base">
                {selectedMovement.movement.pedagogicalMeaning}
              </p>

              <div className="space-y-3 border-t border-ink-carbon/10 pt-4">
                <div className="space-y-1">
                  <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">
                    Como acontece no festival
                  </h5>
                  <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                    {selectedMovement.movement.inPractice}
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-ink-carbon">
                    Papel dos estudantes
                  </h5>
                  <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                    {selectedMovement.movement.studentRole}
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-ink-carbon">
                    Mediação dos educadores
                  </h5>
                  <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                    {selectedMovement.movement.educatorRole}
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-ink-carbon/10 pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                  Arenas em destaque neste movimento
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedMovement.movement.relatedArenas.map((arenaName) => (
                    <span
                      key={arenaName}
                      className="rounded-full bg-brand-lavender/50 px-3.5 py-1 text-xs font-bold text-ink-carbon"
                    >
                      {arenaName}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <ActionButton variant="carbon" onClick={() => setSelectedMovement(null)}>
                  Fechar explicação
                </ActionButton>
              </div>
            </div>
          )}
        </ModalDialog>
      </PosterChapter>
    </>
  );
}
