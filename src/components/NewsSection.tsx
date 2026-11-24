import { Newspaper } from 'lucide-react';
import { newsEditorialSlots, newsItems } from '../data/news';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';

export function NewsSection() {
  const hasNews = newsItems.length > 0;

  return (
    <PosterChapter
      id="noticias"
      surface="canvas"
      title={
        <>
          Notícias e{' '}
          <InlineBadge tone="lime" rotate="right">
            comunicados
          </InlineBadge>
        </>
      }
      subtitle="Espaço oficial para comunicados às unidades escolares, novidades das arenas, editais e registros do festival."
    >
      {hasNews ? (
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <InteractiveCard
              as="article"
              key={item.id}
              delay={index * 0.04}
              className="space-y-3 rounded-[24px] border border-ink-carbon/10 bg-bg-white p-6 shadow-editorial-card sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
                <span className="text-brand-purple">{item.category}</span>
                <span className="text-ink-slate">{item.date}</span>
              </div>
              <h3 className="font-display text-xl font-extrabold tracking-tight text-ink-carbon sm:text-2xl">
                {item.title}
              </h3>
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                {item.summary}
              </p>
              {item.url && (
                <div className="pt-1">
                  <ActionButton href={item.url} variant="outline" icon="external">
                    Ler comunicado completo
                  </ActionButton>
                </div>
              )}
            </InteractiveCard>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          <InteractiveCard className="space-y-3 rounded-[28px] border border-brand-purple/25 bg-bg-white p-6 shadow-editorial-card sm:p-8">
            <div className="inline-flex items-center gap-2 text-brand-purple">
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <h3 className="font-display text-xl font-extrabold text-ink-carbon">
                Mural oficial em preparação
              </h3>
            </div>
            <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
              Os primeiros comunicados, atualizações de programação e registros das escolas serão
              publicados diretamente nesta área pela coordenação do NITED e da CT&amp;ED.
            </p>
          </InteractiveCard>

          <div className="space-y-3">
            {newsEditorialSlots.map((slot, idx) => (
              <InteractiveCard
                key={slot.id}
                delay={idx * 0.04}
                hoverLift={-2}
                hoverScale={1.006}
                className="space-y-1.5 rounded-[24px] border border-ink-carbon/10 bg-bg-white/85 p-5 sm:p-6"
              >
                <h4 className="font-display text-lg font-bold text-ink-carbon">{slot.title}</h4>
                <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                  {slot.description}
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      )}
    </PosterChapter>
  );
}
