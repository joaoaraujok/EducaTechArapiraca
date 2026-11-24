import { ArrowLeft, CalendarClock, CheckCircle2, Gamepad2 } from 'lucide-react';
import { festivalArenas } from '../data/arenas';
import { ArenaId, ArenaInfo, CompetitionLevelId } from '../types/event';
import { RoboticsModalitiesBrowser } from './RoboticsModalitiesBrowser';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';
import { Reveal } from './ui/Reveal';

interface ArenaDetailViewProps {
  arena: ArenaInfo;
  onBackToPortal: (anchorHref?: string) => void;
  onOpenArena: (arenaId: ArenaId) => void;
  onSelectRoboticsRegistration: (levelId: CompetitionLevelId, modalityName: string) => void;
}

const ARENA_ANCHORS = [
  { id: 'apresentacao', label: 'Apresentação' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'publico', label: 'Público' },
  { id: 'criterios', label: 'Critérios' },
  { id: 'cronograma-arena', label: 'Cronograma' },
];

export function ArenaDetailView({
  arena,
  onBackToPortal,
  onOpenArena,
  onSelectRoboticsRegistration,
}: ArenaDetailViewProps) {
  const currentIndex = festivalArenas.findIndex((item) => item.id === arena.id);
  const nextArena = festivalArenas[(currentIndex + 1) % festivalArenas.length];

  return (
    <article className="bg-bg-canvas">
      {/* Cabeçalho textual da arena (sem foto inicial) */}
      <section className="relative bg-brand-lavender/45 pb-14 pt-24 sm:pb-20 sm:pt-28">
        <div className="mx-auto w-full max-w-[780px] space-y-8 px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onBackToPortal('#arenas')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink-carbon/15 bg-bg-white px-4 text-xs font-bold text-ink-carbon transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Voltar para todas as arenas</span>
            </button>

            <span className="rounded-full bg-poster-lime px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-ink-carbon">
              {arena.highlightMeta}
            </span>
          </div>

          <Reveal immediate className="space-y-4">
            <h1 className="font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-ink-carbon sm:text-5xl">
              {arena.name}
            </h1>
            <p className="text-base font-bold text-brand-purple sm:text-lg">
              {arena.tagline}
            </p>
            <p className="max-w-[54ch] text-base leading-relaxed text-ink-carbon/85 sm:text-lg">
              {arena.shortDescription}
            </p>
          </Reveal>

          <nav aria-label={`Seções da arena ${arena.name}`}>
            <ul className="flex flex-wrap gap-2">
              {ARENA_ANCHORS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-[38px] items-center rounded-full border border-ink-carbon/12 bg-bg-white px-3.5 text-xs font-semibold text-ink-carbon transition-colors hover:border-brand-purple hover:text-brand-purple"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 1. Apresentação e objetivos */}
      <PosterChapter
        id="apresentacao"
        surface="white"
        align="left"
        title={
          <>
            Apresentação e{' '}
            <InlineBadge tone="lavender" rotate="left">
              objetivos
            </InlineBadge>
          </>
        }
      >
        <div className="space-y-6">
          <p className="max-w-[54ch] text-base leading-relaxed text-ink-carbon sm:text-lg">
            {arena.presentation}
          </p>

          <InteractiveCard className="space-y-4 rounded-[28px] border border-ink-carbon/10 bg-bg-canvas p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink-carbon">
              Objetivos pedagógicos da arena
            </h3>
            <ul className="space-y-3">
              {arena.objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-slate sm:text-base"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-brand-purple"
                    aria-hidden="true"
                  />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </InteractiveCard>
        </div>
      </PosterChapter>

      {/* 2. Como funciona (+ espaço reservado de jogos ou navegador de robótica) */}
      <PosterChapter
        id="como-funciona"
        surface="canvas"
        align="left"
        title={
          <>
            Como{' '}
            <InlineBadge tone="lime" rotate="right">
              funciona
            </InlineBadge>
          </>
        }
      >
        <div className="space-y-8">
          <p className="max-w-[54ch] text-base leading-relaxed text-ink-carbon sm:text-lg">
            {arena.howItWorks}
          </p>

          {arena.usesRoboticsBrowser && (
            <div className="space-y-3">
              <h3 className="font-display text-xl font-extrabold text-ink-carbon sm:text-2xl">
                Níveis escolares e modalidades oficiais
              </h3>
              <RoboticsModalitiesBrowser onSelectRegistration={onSelectRoboticsRegistration} />
            </div>
          )}

          {arena.reservedGamesSlot && (
            <InteractiveCard className="space-y-4 rounded-[28px] border border-brand-purple/30 bg-bg-white p-6 shadow-editorial-card sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 text-brand-purple">
                  <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                  <h3 className="font-display text-xl font-extrabold text-ink-carbon">
                    Jogos disponíveis nesta edição
                  </h3>
                </div>
                <span className="rounded-full bg-poster-lime px-3.5 py-1 text-xs font-bold text-ink-carbon">
                  Espaço reservado
                </span>
              </div>

              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                A lista oficial de títulos digitais e modalidades online do E-JEAR está sendo
                finalizada pela coordenação e será publicada diretamente neste espaço antes da
                abertura das inscrições específicas.
              </p>

              <ul className="space-y-2 border-t border-ink-carbon/10 pt-4 text-sm text-ink-slate">
                <li>• Jogos de estratégia e raciocínio lógico — a confirmar no edital</li>
                <li>• Modalidades competitivas online em equipe ou individual — a confirmar no edital</li>
                <li>• Classificação indicativa e requisitos técnicos por faixa escolar</li>
              </ul>
            </InteractiveCard>
          )}
        </div>
      </PosterChapter>

      {/* 3. Público e categorias */}
      <PosterChapter
        id="publico"
        surface="lavender"
        framed
        align="left"
        title="Público e categorias"
      >
        <InteractiveCard className="space-y-4 rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
          <ul className="space-y-3">
            {arena.audienceAndCategories.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink-carbon sm:text-base"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-purple"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </InteractiveCard>
      </PosterChapter>

      {/* 4. Critérios de avaliação */}
      <PosterChapter
        id="criterios"
        surface="white"
        align="left"
        title="Critérios de avaliação"
      >
        <InteractiveCard className="space-y-5 rounded-[28px] border border-ink-carbon/10 bg-bg-canvas p-6 sm:p-8">
          <ul className="space-y-3">
            {arena.evaluationCriteria.map((criterion) => (
              <li
                key={criterion}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink-slate sm:text-base"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-purple"
                  aria-hidden="true"
                />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-ink-carbon/10 pt-4">
            <ActionButton
              variant="outline"
              icon="arrow-right"
              onClick={() => onBackToPortal('#regulamentos')}
            >
              Consultar regras e regulamentos no portal
            </ActionButton>
          </div>
        </InteractiveCard>
      </PosterChapter>

      {/* 5. Cronograma específico (sem galeria de imagens) */}
      <PosterChapter
        id="cronograma-arena"
        surface="sky"
        framed
        align="left"
        title="Cronograma da arena"
      >
        <InteractiveCard className="space-y-4 rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
          <div className="inline-flex items-center gap-2 text-brand-purple">
            <CalendarClock className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold text-ink-carbon">
              16 de dezembro de 2026 · {arena.name}
            </h3>
          </div>
          <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
            {arena.scheduleNotes}
          </p>
          <div className="pt-1">
            <ActionButton
              variant="outline"
              icon="arrow-right"
              onClick={() => onBackToPortal('#programacao')}
            >
              Ver programação e local (16/12)
            </ActionButton>
          </div>
        </InteractiveCard>
      </PosterChapter>

      {/* Rodapé de navegação da arena */}
      <section className="bg-bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[780px] space-y-6 px-5 sm:px-8">
          <InteractiveCard className="space-y-5 rounded-[28px] border border-ink-carbon/12 bg-bg-canvas p-6 shadow-editorial-card sm:p-8">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon">
              Continuar explorando o EducaTech Arapiraca
            </h3>
            <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
              Confira os formulários de participação ou avance para a próxima arena do festival.
            </p>
            <div className="flex flex-wrap gap-3">
              <ActionButton
                variant="lime"
                icon="arrow-right"
                onClick={() => onBackToPortal('#inscricoes')}
              >
                Ir para Participação e Inscrições
              </ActionButton>
              <ActionButton
                variant="carbon"
                icon="arrow-right"
                onClick={() => onOpenArena(nextArena.id)}
              >
                Próxima arena: {nextArena.name}
              </ActionButton>
            </div>
          </InteractiveCard>
        </div>
      </section>
    </article>
  );
}
