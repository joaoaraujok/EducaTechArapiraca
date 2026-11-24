import { festivalArenas } from '../data/arenas';
import { ArenaId } from '../types/event';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge, InlineBadgeTone } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';

interface ArenasSectionProps {
  onOpenArena: (arenaId: ArenaId) => void;
}

const ARENA_BADGE_TONES: Record<ArenaId, InlineBadgeTone> = {
  'robotics-challenge': 'lavender',
  'e-jear': 'lime',
  ideathon: 'purple',
  expotech: 'peach',
  'i9-stage': 'sky',
};

export function ArenasSection({ onOpenArena }: ArenasSectionProps) {
  return (
    <PosterChapter
      id="arenas"
      surface="canvas"
      title={
        <>
          As cinco{' '}
          <InlineBadge tone="purple" rotate="left">
            arenas
          </InlineBadge>{' '}
          da imersão
        </>
      }
      subtitle="Cinco experiências integradas conectando robótica, jogos digitais, inteligência artificial, mostra científica e diálogos sobre inovação."
    >
      <div className="space-y-5">
        {festivalArenas.map((arena, index) => (
          <InteractiveCard
            as="article"
            key={arena.id}
            delay={index * 0.05}
            className="space-y-5 rounded-[28px] border border-ink-carbon/10 bg-bg-white p-6 shadow-editorial-card hover:border-brand-purple/35 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="tabular-nums-ui text-xs font-bold uppercase tracking-[0.14em] text-brand-purple">
                Arena {String(index + 1).padStart(2, '0')}
              </span>
              <InlineBadge tone={ARENA_BADGE_TONES[arena.id]} rotate="none">
                {arena.highlightMeta}
              </InlineBadge>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                {arena.tagline}
              </p>

              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon sm:text-3xl">
                {arena.name}
              </h3>

              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                {arena.shortDescription}
              </p>
            </div>

            {arena.reservedGamesSlot && (
              <p className="border-t border-ink-carbon/10 pt-4 text-xs font-semibold text-brand-purple">
                Jogos oficiais desta edição em definição · Espaço reservado na página da arena
              </p>
            )}

            <div>
              <ActionButton
                variant="carbon"
                icon="arrow-right"
                onClick={() => onOpenArena(arena.id)}
              >
                Abrir página da arena {arena.name}
              </ActionButton>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </PosterChapter>
  );
}
