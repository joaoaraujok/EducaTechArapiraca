import { partnersConfig } from '../data/partners';
import { PartnerInstitution } from '../types/event';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';
import { Reveal } from './ui/Reveal';

const INSTITUTIONAL_PILLS = [
  'Rede Municipal de Arapiraca',
  'Robótica Educacional',
  '4 Níveis Escolares',
  '6 Modalidades Oficiais',
];

function InstitutionalMark({ partner }: { partner: PartnerInstitution }) {
  if (partner.logoUrl.trim()) {
    return (
      <div className="flex h-16 items-center">
        <img
          src={partner.logoUrl}
          alt={`Logotipo oficial ${partner.acronym}: ${partner.name}`}
          loading="lazy"
          decoding="async"
          className="max-h-16 max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-2xl border border-ink-carbon/15 bg-bg-white px-4 py-2.5 shadow-sm">
      <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-carbon sm:text-2xl">
        {partner.acronym}
      </span>
    </div>
  );
}

export function PartnersSection() {
  return (
    <PosterChapter
      id="parceiros"
      surface="white"
      title={
        <>
          Realização e{' '}
          <InlineBadge tone="purple" rotate="right">
            apoio oficial
          </InlineBadge>
        </>
      }
      subtitle="Iniciativa pública dedicada à inovação pedagógica, tecnologia educacional e democratização da robótica nas escolas de Arapiraca."
    >
      <div className="space-y-8">
        <Reveal>
          <ul
            aria-label="Marcos do evento"
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {INSTITUTIONAL_PILLS.map((label) => (
              <li
                key={label}
                className="rounded-full border border-ink-carbon/15 bg-bg-canvas px-4 py-2 text-xs font-bold text-ink-carbon"
              >
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-4">
          {partnersConfig.map((partner, index) => (
            <InteractiveCard
              as="article"
              key={partner.id}
              delay={index * 0.05}
              className={`space-y-4 rounded-[24px] border p-6 sm:p-8 ${
                partner.role === 'apoio'
                  ? 'border-brand-purple/25 bg-brand-lavender/20 hover:border-brand-purple/50'
                  : 'border-ink-carbon/10 bg-bg-canvas hover:border-brand-purple/35'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <InstitutionalMark partner={partner} />
                <span className="rounded-full bg-bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">
                  {partner.roleLabel}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink-carbon sm:text-2xl">
                  {partner.name}
                </h3>
                <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                  {partner.description}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </PosterChapter>
  );
}
