import { curriculumAxes } from '../data/curriculum';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';

export function CurriculumSection() {
  return (
    <PosterChapter
      id="curriculo"
      surface="white"
      title={
        <>
          Alinhamento{' '}
          <InlineBadge tone="lime" rotate="right">
            curricular
          </InlineBadge>
        </>
      }
      subtitle="A imersão conecta cada desafio aos quatro eixos do currículo municipal de tecnologia e cultura digital de Arapiraca, incluindo o Letramento em Inteligência Artificial (LeIA), desenvolvido como inovação pelo município."
    >
      <div className="space-y-5">
        {curriculumAxes.map((axis, index) => {
          const isLeIA = Boolean(axis.isMunicipalInnovation);

          return (
            <InteractiveCard
              as="article"
              key={axis.id}
              delay={index * 0.05}
              className={`space-y-4 rounded-[28px] border p-6 sm:p-8 ${
                isLeIA
                  ? 'border-brand-purple/40 bg-brand-plum text-ink-light shadow-poster-stage'
                  : 'border-ink-carbon/10 bg-bg-canvas text-ink-carbon shadow-editorial-card hover:border-brand-purple/35'
              }`}
            >
              <span
                className={`tabular-nums-ui inline-block text-xs font-bold uppercase tracking-[0.14em] ${
                  isLeIA ? 'text-poster-lime' : 'text-brand-purple'
                }`}
              >
                {axis.code}
              </span>

              <div className="space-y-2">
                <h3
                  className={`font-display text-2xl font-extrabold tracking-tight sm:text-3xl ${
                    isLeIA ? 'text-ink-light' : 'text-ink-carbon'
                  }`}
                >
                  {axis.title}
                </h3>

                <p
                  className={`max-w-[54ch] text-sm leading-relaxed sm:text-base ${
                    isLeIA ? 'text-ink-light/95' : 'text-ink-slate'
                  }`}
                >
                  {axis.summary}
                </p>
              </div>

              <ul
                className={`flex flex-wrap gap-2 border-t pt-4 ${
                  isLeIA ? 'border-white/15' : 'border-ink-carbon/10'
                }`}
              >
                {axis.topics.map((topic) => (
                  <li
                    key={topic}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                      isLeIA
                        ? 'border border-white/20 bg-white/10 text-ink-light'
                        : 'border border-ink-carbon/12 bg-bg-white text-ink-carbon'
                    }`}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          );
        })}
      </div>
    </PosterChapter>
  );
}
