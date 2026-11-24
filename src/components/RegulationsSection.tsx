import { FileText } from 'lucide-react';
import { festivalArenas } from '../data/arenas';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';

export function RegulationsSection() {
  return (
    <PosterChapter
      id="regulamentos"
      surface="white"
      title={
        <>
          Regras e{' '}
          <InlineBadge tone="lavender" rotate="left">
            regulamentos
          </InlineBadge>
        </>
      }
      subtitle="Resumo das regras gerais, orientações de participação e critérios simplificados de cada arena diretamente nesta página."
    >
      <div className="space-y-4">
        {festivalArenas.map((arena, index) => {
          const hasPdf = Boolean(arena.regulationUrl.trim());

          return (
            <InteractiveCard
              as="article"
              key={arena.id}
              delay={index * 0.04}
              className="space-y-4 rounded-[24px] border border-ink-carbon/10 bg-bg-canvas p-6 hover:border-brand-purple/35 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 text-brand-purple">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em]">
                    {arena.tagline}
                  </span>
                </div>
                <span className="rounded-full bg-bg-white px-3.5 py-1 text-xs font-bold text-ink-carbon">
                  {hasPdf ? 'Edital disponível' : 'Edital completo em publicação'}
                </span>
              </div>

              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon">
                {arena.name}
              </h3>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                  Regras e orientações principais
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed text-ink-carbon sm:text-base">
                  {arena.rulesAndRegulation.map((rule) => (
                    <li key={rule}>• {rule}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 border-t border-ink-carbon/10 pt-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                  Critérios simplificados de avaliação
                </p>
                <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                  {arena.evaluationCriteria.join(' ')}
                </p>
              </div>

              {hasPdf && (
                <div className="pt-1">
                  <ActionButton href={arena.regulationUrl} variant="lime" icon="external">
                    Abrir edital oficial ({arena.name})
                  </ActionButton>
                </div>
              )}
            </InteractiveCard>
          );
        })}
      </div>
    </PosterChapter>
  );
}
