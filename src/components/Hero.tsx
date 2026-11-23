import { lazy, Suspense, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { ArrowDown, Box, Image as ImageIcon, Layers3 } from 'lucide-react';
import { generalEventInfo } from '../data/general';
import { locationConfig } from '../data/location';
import { EASE_ARCHITECTURAL, SPRING_SCROLL } from '../lib/motion';
import type { KitModuleFilter } from './RobotStage3D';
import { ActionButton } from './ui/ActionButton';
import { MediaFrame } from './ui/MediaFrame';
import { Reveal } from './ui/Reveal';
import { SegmentedControl } from './ui/SegmentedControl';

const RobotStage3D = lazy(() =>
  import('./RobotStage3D').then((module) => ({ default: module.RobotStage3D })),
);

const MODULE_SHORT_LABELS: Record<string, string> = {
  M1: 'Chassi',
  M2: 'Controladora',
  M3: 'Sensores',
  M4: 'Motores',
};

export function Hero() {
  const { hero, kitShowcase } = generalEventInfo;
  const [stageMode, setStageMode] = useState<'3d' | 'photo'>('3d');
  const [exploded, setExploded] = useState(false);
  const [activeModule, setActiveModule] = useState<KitModuleFilter>('all');

  const heroSectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);

  const stickyOpacity = useTransform(smoothProgress, [0, 0.35, 0.72], [1, 0.72, 0.14]);
  const stickyScale = useTransform(smoothProgress, [0, 0.65], [1, 0.88]);
  const stickyY = useTransform(smoothProgress, [0, 0.65], [0, -24]);
  const blurPx = useTransform(smoothProgress, [0, 0.55], [0, 10]);
  const stickyFilter = useMotionTemplate`blur(${blurPx}px)`;
  const stickerY = useTransform(smoothProgress, [0, 1], [10, -28]);
  const stageScale = useTransform(smoothProgress, [0, 0.35], [0.96, 1]);

  const hasDate = Boolean(locationConfig.date.trim());
  const hasVenue = Boolean(locationConfig.venueName.trim());

  const statusSummary =
    hasDate && hasVenue
      ? `${locationConfig.date}${locationConfig.time.trim() ? ` (${locationConfig.time})` : ''} · ${locationConfig.venueName}, ${locationConfig.cityState}`
      : `${locationConfig.cityState} · Data e local em definição pela coordenação`;

  const [firstSentence, secondSentence] = hero.title.split('E SE CONSTRÓI');

  const moduleOptions: Array<{ id: KitModuleFilter; label: string; badge?: string }> = [
    { id: 'all', label: 'Robô completo' },
    ...kitShowcase.modules.map((mod) => ({
      id: mod.code as KitModuleFilter,
      label: MODULE_SHORT_LABELS[mod.code] ?? mod.title,
      badge: mod.code,
    })),
  ];

  const selectedModuleDetails =
    activeModule === 'all'
      ? null
      : kitShowcase.modules.find((mod) => mod.code === activeModule) ?? null;

  return (
    <section
      ref={heroSectionRef}
      id="inicio"
      className="relative bg-bg-canvas pb-16 pt-20 sm:pb-24 sm:pt-24"
    >
      {/* Wrapper isolado para o brilho difuso sem quebrar o position:sticky */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-brand-lavender/45 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[780px] px-5 sm:px-8">
        {/* Wrapper sticky puro; transform/filter aplicados apenas no filho motion */}
        <div className="sticky top-24 z-10 py-3 sm:top-28 sm:py-5">
          <motion.div
            style={{
              opacity: stickyOpacity,
              scale: stickyScale,
              y: stickyY,
              filter: stickyFilter,
            }}
            className="text-center will-change-transform"
          >
            <Reveal immediate>
              <h1 className="font-display text-[clamp(2rem,5.4vw,3.65rem)] font-extrabold uppercase leading-[1.01] tracking-[-0.04em] text-ink-carbon">
                {firstSentence}
                {secondSentence ? (
                  <span className="mt-1 block text-brand-purple">
                    E SE CONSTRÓI{secondSentence}
                  </span>
                ) : null}
              </h1>
            </Reveal>

            <Reveal immediate delay={0.07} className="mt-5 space-y-5">
              <p className="mx-auto max-w-[50ch] text-base leading-relaxed text-ink-slate sm:text-lg">
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <ActionButton href="#inscricoes" variant="lime" icon="arrow-right">
                  {hero.primaryCta}
                </ActionButton>
                <ActionButton href="#competicoes" variant="outline">
                  {hero.secondaryCta}
                </ActionButton>
              </div>

              <div className="space-y-1 pt-1 text-xs font-medium text-ink-slate">
                <p className="text-sm font-semibold text-ink-carbon">{statusSummary}</p>
                <p>{hero.badge}</p>
              </div>

              <div className="flex justify-center pt-1">
                <motion.a
                  href="#palco-3d"
                  aria-label="Explorar Robô Zero em 3D"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-carbon/12 bg-white/75 text-brand-purple transition-colors hover:bg-poster-lime hover:text-ink-carbon"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Palco 3D Protagonista que sobe sobre o título desfocado no scroll */}
        <motion.div
          id="palco-3d"
          style={{ scale: stageScale }}
          className="relative z-20 mt-8 will-change-transform sm:mt-10"
        >
          <motion.div
            style={{ y: stickerY, rotate: -2 }}
            whileHover={{ y: -4, scale: 1.03, rotate: 0 }}
            className="mb-3 inline-flex rounded-xl border border-ink-carbon/15 bg-poster-lime px-3.5 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-ink-carbon shadow-editorial-card"
          >
            Robô Zero · Modelo 3D
          </motion.div>

          <motion.div
            initial={{ opacity: 0.92, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.48, delay: 0.12, ease: EASE_ARCHITECTURAL }}
            whileHover={{
              y: -4,
              transition: { type: 'spring', stiffness: 320, damping: 24 },
            }}
            className="space-y-4 rounded-[28px] bg-ink-carbon p-4 text-ink-light shadow-poster-stage transition-shadow duration-300 hover:shadow-[0_36px_80px_-22px_rgba(109,40,217,0.38)] sm:rounded-[32px] sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setStageMode('3d')}
                  aria-pressed={stageMode === '3d'}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-xs font-semibold transition-colors ${
                    stageMode === '3d'
                      ? 'border-brand-lavender/70 bg-[#221F33] text-ink-light'
                      : 'border-white/15 bg-transparent text-ink-light-muted hover:text-ink-light'
                  }`}
                >
                  <Box className="h-4 w-4 text-poster-lime" aria-hidden="true" />
                  <span>Modelo 3D Interativo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStageMode('photo')}
                  aria-pressed={stageMode === 'photo'}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-xs font-semibold transition-colors ${
                    stageMode === 'photo'
                      ? 'border-brand-lavender/70 bg-[#221F33] text-ink-light'
                      : 'border-white/15 bg-transparent text-ink-light-muted hover:text-ink-light'
                  }`}
                >
                  <ImageIcon className="h-4 w-4 text-brand-lavender" aria-hidden="true" />
                  <span>Foto de Estúdio</span>
                </button>
              </div>

              {stageMode === '3d' && (
                <button
                  type="button"
                  onClick={() => setExploded((prev) => !prev)}
                  aria-pressed={exploded}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-xs font-semibold transition-colors ${
                    exploded
                      ? 'border-poster-lime bg-poster-lime text-ink-carbon'
                      : 'border-white/20 bg-white/5 text-ink-light hover:border-poster-lime hover:text-poster-lime'
                  }`}
                >
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                  <span>{exploded ? 'Unir módulos' : 'Vista explodida'}</span>
                </button>
              )}
            </div>

            {stageMode === '3d' ? (
              <Suspense
                fallback={
                  <MediaFrame
                    src="/images/hero-stage.jpg"
                    alt="Protótipo de robótica educacional Robô Zero"
                    priority
                    tilt={false}
                    frameTone="dark"
                    caption="Robô Zero · Carregando inspeção 3D interativa"
                  />
                }
              >
                <RobotStage3D activeModule={activeModule} exploded={exploded} />
              </Suspense>
            ) : (
              <MediaFrame
                src="/images/hero-stage.jpg"
                alt="Protótipo de robótica educacional construído com módulos de engenharia sobre superfície escura"
                priority
                tilt
                frameTone="dark"
                caption="Robô Zero · Engenharia, Lógica e Movimento na Rede Municipal"
              />
            )}

            <div className="space-y-3 pt-1">
              <SegmentedControl
                options={moduleOptions}
                value={activeModule}
                onChange={(nextModule) => {
                  setActiveModule(nextModule);
                  if (nextModule !== 'all') {
                    setStageMode('3d');
                  }
                }}
                ariaLabel="Inspecionar módulos do Robô Zero"
                layoutId="hero-kit-module-tab"
                idPrefix="kit"
                tone="dark"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  id={`kit-panel-${activeModule}`}
                  role="tabpanel"
                  aria-labelledby={`kit-tab-${activeModule}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.24, ease: EASE_ARCHITECTURAL }}
                  className="border-t border-white/12 px-1 pt-4"
                >
                  {selectedModuleDetails ? (
                    <div className="space-y-1.5">
                      <h2 className="font-display text-lg font-bold text-ink-light">
                        {selectedModuleDetails.title}
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-poster-lime">
                        {selectedModuleDetails.code} · Subsistema do Robô Zero
                      </p>
                      <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted">
                        {selectedModuleDetails.description}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <h2 className="font-display text-base font-bold text-ink-light">
                        {kitShowcase.title}
                      </h2>
                      <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted">
                        {kitShowcase.subtitle} Selecione acima um subsistema (M1 a M4) ou ative a
                        vista explodida para inspecionar o Robô Zero em 3D.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
