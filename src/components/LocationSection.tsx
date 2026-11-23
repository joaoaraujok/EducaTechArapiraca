import { MapPin } from 'lucide-react';
import { locationConfig } from '../data/location';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';
import { SpecList } from './ui/SpecList';
import { TiltStage } from './ui/TiltStage';

export function LocationSection() {
  const hasDate = Boolean(locationConfig.date.trim());
  const hasTime = Boolean(locationConfig.time.trim());
  const hasVenue = Boolean(locationConfig.venueName.trim());
  const hasAddress = Boolean(locationConfig.fullAddress.trim());
  const hasEmbed = Boolean(locationConfig.googleMapsEmbedUrl.trim());
  const hasExternalUrl = Boolean(locationConfig.googleMapsExternalUrl.trim());

  const locationSpecs = [
    {
      id: 'data',
      title: 'Data do evento',
      subtitle: hasDate ? locationConfig.date : 'A ser divulgada pela organização',
      meta: !hasDate ? 'Em definição' : undefined,
    },
    {
      id: 'horario',
      title: 'Horário',
      subtitle: hasTime ? locationConfig.time : 'A ser definido pela coordenação',
      meta: !hasTime ? 'Em definição' : undefined,
    },
    {
      id: 'local',
      title: 'Nome do local',
      subtitle: hasVenue ? locationConfig.venueName : 'Espaço sede em definição',
      meta: !hasVenue ? 'Em definição' : undefined,
    },
    {
      id: 'endereco',
      title: 'Endereço completo',
      subtitle: hasAddress
        ? locationConfig.fullAddress
        : `${locationConfig.cityState} · Endereço completo será publicado nesta área`,
      meta: !hasAddress ? 'Em definição' : undefined,
    },
  ];

  return (
    <PosterChapter
      id="localizacao"
      surface="sky"
      framed
      title={
        <>
          Data e local em{' '}
          <InlineBadge tone="white" rotate="left">
            {locationConfig.cityState}
          </InlineBadge>
        </>
      }
    >
      <div className="space-y-8">
        <InteractiveCard className="rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
          <SpecList items={locationSpecs} tone="light" />
        </InteractiveCard>

        {hasEmbed ? (
          <div className="space-y-5">
            <InteractiveCard
              delay={0.06}
              className="overflow-hidden rounded-[28px] border border-ink-carbon/15 bg-bg-white shadow-editorial-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-carbon/10 px-5 py-3.5 text-xs font-semibold text-ink-slate">
                <span className="text-ink-carbon">
                  {hasVenue ? locationConfig.venueName : locationConfig.cityState}
                </span>
                <span>Localização oficial confirmada</span>
              </div>
              <iframe
                title={`Mapa de localização: ${hasVenue ? locationConfig.venueName : locationConfig.cityState}`}
                src={locationConfig.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[420px]"
                allowFullScreen
              />
            </InteractiveCard>

            {hasExternalUrl && (
              <ActionButton
                href={locationConfig.googleMapsExternalUrl}
                variant="carbon"
                icon="external"
              >
                Abrir localização no Google Maps
              </ActionButton>
            )}
          </div>
        ) : (
          <InteractiveCard delay={0.06}>
            <TiltStage className="rounded-[28px]">
              <div className="space-y-6 rounded-[28px] bg-ink-carbon p-6 text-ink-light shadow-poster-stage sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/12 pb-4 text-xs font-semibold text-ink-light-muted">
                  <span>{hasVenue ? 'Local oficial confirmado' : 'Território sede do encontro'}</span>
                  <span className="text-poster-lime">{locationConfig.cityState}</span>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-brand-lavender">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em]">
                      {hasVenue ? 'Espaço sede do encontro' : 'Município anfitrião'}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-extrabold tracking-tight text-ink-light sm:text-4xl">
                    {hasVenue ? locationConfig.venueName : locationConfig.cityState}
                  </p>
                  <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted sm:text-base">
                    O EducaTech Arapiraca reúne estudantes da rede municipal de ensino em um espaço
                    estruturado com bancadas de montagem, pistas de percurso e arenas oficiais.
                  </p>
                </div>

                <p className="border-t border-white/12 pt-4 text-xs leading-relaxed text-ink-light-muted">
                  O endereço completo e o mapa interativo com rota no Google Maps serão ativados
                  nesta seção antes da abertura oficial.
                </p>
              </div>
            </TiltStage>
          </InteractiveCard>
        )}
      </div>
    </PosterChapter>
  );
}
