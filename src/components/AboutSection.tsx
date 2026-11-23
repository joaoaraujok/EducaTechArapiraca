import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { generalEventInfo } from '../data/general';
import { EASE_ARCHITECTURAL } from '../lib/motion';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { KineticDeck } from './ui/KineticDeck';
import { MediaFrame } from './ui/MediaFrame';
import { ParallaxSticker, StickerTone } from './ui/ParallaxSticker';
import { PosterChapter } from './ui/PosterChapter';
import { Reveal } from './ui/Reveal';
import { SegmentedControl } from './ui/SegmentedControl';
import { SpecList } from './ui/SpecList';

type StudioPhotoId = 'oficina' | 'sensores';

const STUDIO_PHOTOS: Record<
  StudioPhotoId,
  { src: string; alt: string; caption: string; tag: string }
> = {
  oficina: {
    src: '/images/about-workshop.jpg',
    alt: 'Estudantes montando chassi e componentes eletrônicos em oficina de robótica educacional',
    caption: 'Robótica educacional aplicada à prática em sala de aula',
    tag: 'Oficina de Robótica',
  },
  sensores: {
    src: '/images/about-sensors.jpg',
    alt: 'Macro de placa controladora, sensores de distância e cabeamento técnico',
    caption: 'Eletrônica, sensores e programação lógica',
    tag: 'Eletrônica & Lógica',
  },
};

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
  const { about, hero, kitShowcase } = generalEventInfo;
  const [activePhoto, setActivePhoto] = useState<StudioPhotoId>('oficina');

  const currentPhoto = STUDIO_PHOTOS[activePhoto];

  const roleItems = kitShowcase.teamRoles.map((item) => ({
    id: item.role,
    title: item.role,
    description: item.focus,
    accent: true,
  }));

  return (
    <>
      {/* Batida 1: Capítulo lavanda emoldurado com galeria e stickers parallax */}
      <PosterChapter
        id="sobre"
        surface="lavender"
        framed
        title={
          <>
            Inovação e protagonismo em{' '}
            <InlineBadge tone="lime" rotate="left">
              Arapiraca
            </InlineBadge>
          </>
        }
        subtitle={about.lead}
      >
        <div className="space-y-10">
          <Reveal className="text-center">
            <p className="mx-auto max-w-[54ch] text-base leading-relaxed text-ink-carbon/90">
              {about.description}
            </p>
          </Reveal>

          <Reveal className="space-y-4">
            <div className="flex justify-center">
              <SegmentedControl
                options={[
                  { id: 'oficina', label: 'Oficina de Robótica' },
                  { id: 'sensores', label: 'Sensores & Eletrônica' },
                ]}
                value={activePhoto}
                onChange={setActivePhoto}
                ariaLabel="Alternar fotografia do evento"
                layoutId="about-photo-tab"
                idPrefix="studio"
                tone="light"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto}
                id={`studio-panel-${activePhoto}`}
                role="tabpanel"
                aria-labelledby={`studio-tab-${activePhoto}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EASE_ARCHITECTURAL }}
              >
                <MediaFrame
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  caption={currentPhoto.caption}
                  aspectClass="aspect-[16/10]"
                  angleClass="sm:-rotate-1 hover:rotate-0"
                  cornerTag={{ label: currentPhoto.tag, tone: 'lime' }}
                  tilt
                />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {/* Etiquetas rotacionadas em parallax com dados reais do evento */}
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

      {/* Batida 2: Respiro branco com carrossel interativo dos 5 pilares e papéis da equipe */}
      <PosterChapter
        id="pilares"
        surface="white"
        title={
          <>
            Pilares pedagógicos do{' '}
            <InlineBadge tone="lavender" rotate="right">
              encontro
            </InlineBadge>
          </>
        }
      >
        <div className="space-y-12">
          <Reveal>
            <KineticDeck
              items={about.pillars}
              ariaLabel="Pilares pedagógicos do EducaTech Arapiraca"
            />
          </Reveal>

          <InteractiveCard className="space-y-5 rounded-[28px] border border-ink-carbon/10 bg-bg-canvas p-6 shadow-editorial-card sm:p-8">
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon">
                {kitShowcase.teamRolesTitle}
              </h3>
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                {kitShowcase.teamRolesDescription}
              </p>
            </div>

            <SpecList items={roleItems} tone="light" />
          </InteractiveCard>
        </div>
      </PosterChapter>
    </>
  );
}
