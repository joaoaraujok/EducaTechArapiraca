import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { generalEventInfo } from '../data/general';
import { locationConfig } from '../data/location';
import { EASE_ARCHITECTURAL, SPRING_SCROLL } from '../lib/motion';
import { ActionButton } from './ui/ActionButton';
import { Reveal } from './ui/Reveal';

const FESTIVAL_DIMENSIONS = [
  {
    code: '01',
    title: 'Tecnologia',
    detail: 'Robótica, automação e dispositivos em experiências práticas.',
  },
  {
    code: '02',
    title: 'Inovação',
    detail: 'Ideias autênticas nascidas nos desafios reais da escola e da cidade.',
  },
  {
    code: '03',
    title: 'Cultura Digital',
    detail: 'Cidadania, protagonismo estudantil, colaboração e ética em rede.',
  },
  {
    code: '04',
    title: 'Inteligência Artificial',
    detail: 'Letramento crítico e criação responsável com IA (LeIA).',
  },
];

export function Hero() {
  const { hero } = generalEventInfo;
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

  const statusSummary = `${locationConfig.date} (${locationConfig.time}) · ${locationConfig.venueName}, ${locationConfig.cityState}`;
  const [firstSentence, secondSentence] = hero.title.split('E SE CONSTRÓI');

  return (
    <section
      ref={heroSectionRef}
      id="inicio"
      className="relative bg-bg-canvas pb-16 pt-20 sm:pb-24 sm:pt-24"
    >
      {/* Wrapper isolado para o brilho difuso sem afetar position:sticky */}
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

              <div className="flex flex-wrap items-center justify-center">
                <ActionButton href="#participacao" variant="lime" icon="arrow-right">
                  {hero.primaryCta}
                </ActionButton>
              </div>

              <div className="space-y-1 pt-1 text-xs font-medium text-ink-slate">
                <p className="text-sm font-semibold text-ink-carbon">{statusSummary}</p>
                <p>{hero.badge}</p>
              </div>

              <div className="flex justify-center pt-1">
                <motion.a
                  href="#conceito-imersao"
                  aria-label="Conhecer o conceito da imersão"
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

        {/* Cartão protagonista em carbono que sobe sobre o título no scroll (sem fotos) */}
        <motion.div
          id="conceito-imersao"
          style={{ scale: stageScale }}
          className="relative z-20 mt-8 will-change-transform sm:mt-10"
        >
          <motion.div
            style={{ y: stickerY, rotate: -2 }}
            whileHover={{ y: -4, scale: 1.03, rotate: 0 }}
            className="mb-3 inline-flex rounded-xl border border-ink-carbon/15 bg-poster-lime px-3.5 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-ink-carbon shadow-editorial-card"
          >
            Currículo em Ação · 16 de Dezembro
          </motion.div>

          <motion.div
            initial={{ opacity: 0.92, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.48, delay: 0.12, ease: EASE_ARCHITECTURAL }}
            whileHover={{
              y: -4,
              transition: { type: 'spring', stiffness: 320, damping: 24 },
            }}
            className="space-y-6 rounded-[28px] bg-ink-carbon p-6 text-ink-light shadow-poster-stage transition-shadow duration-300 hover:shadow-[0_36px_80px_-22px_rgba(109,40,217,0.38)] sm:rounded-[32px] sm:p-8"
          >
            <div className="space-y-2 border-b border-white/12 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-poster-lime">
                Rede Pública Municipal de Educação de Arapiraca
              </p>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-light sm:text-3xl">
                Estudantes no centro da construção de soluções
              </h2>
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted sm:text-base">
                Uma imersão construída a partir da escola, da comunidade e do território para
                compartilhar aprendizagens ao longo de todo o dia 16 de dezembro de 2026.
              </p>
            </div>

            <dl className="divide-y divide-white/12">
              {FESTIVAL_DIMENSIONS.map((item) => (
                <div
                  key={item.code}
                  className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                    <dt className="flex items-baseline gap-3 font-display text-base font-bold text-ink-light sm:w-60 sm:shrink-0 sm:text-lg">
                      <span className="tabular-nums-ui text-xs font-extrabold text-poster-lime">
                        {item.code}
                      </span>
                      <span>{item.title}</span>
                    </dt>
                      <dd className="max-w-[44ch] text-sm leading-relaxed text-ink-light-muted sm:flex-1">
                        {item.detail}
                      </dd>
                    </div>
              ))}
                  </dl>
                </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
