import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { competitionLevels, modalitiesById } from '../data/competitions';
import { EASE_ARCHITECTURAL } from '../lib/motion';
import { CompetitionLevelId } from '../types/event';
import { ModalityIllustration } from './ModalityIllustration';
import { ActionButton } from './ui/ActionButton';
import { InlineBadgeTone } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';
import { SegmentedControl } from './ui/SegmentedControl';
import { SpecList } from './ui/SpecList';

interface CompetitionsSectionProps {
  onSelectRegistration: (levelId: CompetitionLevelId, modalityName: string) => void;
}

const LEVEL_THEMES: Record<
  CompetitionLevelId,
  { keywordColor: string; badgeTone: InlineBadgeTone }
> = {
  'nivel-1': { keywordColor: 'text-brand-purple', badgeTone: 'lavender' },
  'nivel-2': { keywordColor: 'text-[#3F6212]', badgeTone: 'lime' },
  'nivel-3': { keywordColor: 'text-[#1D4ED8]', badgeTone: 'sky' },
  'nivel-4': { keywordColor: 'text-[#6B21A8]', badgeTone: 'peach' },
};

export function CompetitionsSection({ onSelectRegistration }: CompetitionsSectionProps) {
  const [selectedLevelId, setSelectedLevelId] = useState<CompetitionLevelId>('nivel-1');

  const activeIndex = competitionLevels.findIndex((level) => level.id === selectedLevelId);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeLevel = competitionLevels[safeIndex];
  const activeModalities = activeLevel.modalities.map((id) => modalitiesById[id]);
  const levelTheme = LEVEL_THEMES[activeLevel.id];

  const levelOptions = competitionLevels.map((level) => {
    const shortGrade =
      level.id === 'nivel-4'
        ? 'EJA'
        : level.gradeRange.replace(' do Ensino Fundamental', '');

    return {
      id: level.id,
      badge: level.code,
      label: shortGrade,
    };
  });

  const stepLevel = (delta: -1 | 1) => {
    const nextIdx =
      (safeIndex + delta + competitionLevels.length) % competitionLevels.length;
    setSelectedLevelId(competitionLevels[nextIdx].id);
  };

  return (
    <PosterChapter
      id="competicoes"
      surface="canvas"
      title={
        <>
          Competições por{' '}
          <span className={`transition-colors duration-300 ${levelTheme.keywordColor}`}>
            nível escolar
          </span>
        </>
      }
      subtitle="Selecione o nível escolar para visualizar exclusivamente as suas duas modalidades oficiais. Use as setas do teclado ou os botões para alternar entre os quatro níveis."
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <SegmentedControl
              options={levelOptions}
              value={activeLevel.id}
              onChange={setSelectedLevelId}
              ariaLabel="Selecionar nível escolar"
              layoutId="competition-level-tab"
              idPrefix="level"
              tone="light"
            />

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => stepLevel(-1)}
                aria-label="Nível anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-carbon/20 bg-white text-ink-carbon transition-colors hover:border-brand-purple hover:text-brand-purple active:scale-[0.96]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => stepLevel(1)}
                aria-label="Próximo nível"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-carbon/20 bg-white text-ink-carbon transition-colors hover:border-brand-purple hover:text-brand-purple active:scale-[0.96]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <InteractiveCard
            hoverLift={-2}
            hoverScale={1.006}
            className="space-y-1 rounded-2xl border border-ink-carbon/10 bg-white/80 px-5 py-4 text-sm"
          >
            <p className="text-ink-carbon">
              <strong>{activeLevel.title}:</strong>{' '}
              <span className="text-ink-slate">{activeLevel.summary}</span>
            </p>
            <p className={`text-xs font-bold transition-colors duration-300 ${levelTheme.keywordColor}`}>
              Até {activeLevel.maxStudentsPerTeam} estudantes por equipe · 2 modalidades exclusivas no nível
            </p>
          </InteractiveCard>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.id}
            id={`level-panel-${activeLevel.id}`}
            role="tabpanel"
            aria-labelledby={`level-tab-${activeLevel.id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: EASE_ARCHITECTURAL }}
            className="space-y-8"
          >
            {activeModalities.map((modality, idx) => {
              const modalitySpecs = [
                {
                  id: `${modality.id}-obj`,
                  title: 'Objetivo do desafio',
                  description: modality.objective,
                },
                {
                  id: `${modality.id}-team`,
                  title: 'Atuação da equipe (até 3 estudantes)',
                  description: modality.teamRoleNote,
                },
              ];

              return (
                <InteractiveCard
                  as="article"
                  key={modality.id}
                  delay={idx * 0.06}
                  className="space-y-6 rounded-[28px] border border-ink-carbon/10 bg-bg-white p-5 shadow-editorial-card sm:p-8"
                >
                  <ModalityIllustration
                    modalityId={modality.id}
                    imageUrl={modality.imageUrl}
                    imageAlt={modality.imageAlt}
                    title={modality.name}
                    levelLabel={activeLevel.code}
                    tagTone={levelTheme.badgeTone}
                  />

                  <div className="space-y-2.5">
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon sm:text-3xl">
                      {modality.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                      <span className={levelTheme.keywordColor}>{activeLevel.code}</span>
                      <span aria-hidden="true" className="text-ink-slate">
                        ·
                      </span>
                      <span className="text-ink-slate">{modality.shortTag}</span>
                    </div>

                    <p className="max-w-[54ch] pt-1 text-base leading-relaxed text-ink-slate">
                      {modality.description}
                    </p>
                  </div>

                  <SpecList items={modalitySpecs} tone="light" />

                  <div>
                    <ActionButton
                      variant="carbon"
                      icon="arrow-right"
                      onClick={() => onSelectRegistration(activeLevel.id, modality.name)}
                    >
                      Preparar inscrição neste nível
                    </ActionButton>
                  </div>
                </InteractiveCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </PosterChapter>
  );
}
