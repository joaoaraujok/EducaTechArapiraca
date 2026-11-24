import { CalendarDays } from 'lucide-react';
import { locationConfig } from '../data/location';
import { scheduleDays } from '../data/schedule';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { PosterChapter } from './ui/PosterChapter';
import { SpecList } from './ui/SpecList';

export function ScheduleLocationSection() {
  const mainDay = scheduleDays[0];

  const locationSpecs = [
    {
      id: 'data',
      title: 'Data do encontro presencial',
      subtitle: locationConfig.date,
    },
    {
      id: 'horario',
      title: 'Horário',
      subtitle: locationConfig.time,
    },
    {
      id: 'local',
      title: 'Nome do local',
      subtitle: locationConfig.venueName,
    },
    {
      id: 'endereco',
      title: 'Endereço completo',
      subtitle: locationConfig.fullAddress,
    },
  ];

  return (
    <PosterChapter
      id="programacao"
      surface="sky"
      framed
      title={
        <>
          Programação e local em{' '}
          <InlineBadge tone="white" rotate="left">
            {locationConfig.cityState}
          </InlineBadge>
        </>
      }
      subtitle="O cronograma do EducaTech Arapiraca acontece no dia 16 de dezembro de 2026, das 8:00 às 17:00, no Centro de Convenções de Arapiraca."
    >
      <div className="space-y-10">
        {/* Parte A: Programação preparada para 16 de dezembro de 2026 */}
        {mainDay && (
          <InteractiveCard className="space-y-5 rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-carbon/10 pb-4">
              <div className="inline-flex items-center gap-2 text-brand-purple">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.12em]">
                  {mainDay.dateLabel}
                </span>
              </div>
              <span className="rounded-full bg-poster-lime px-3.5 py-1 text-xs font-bold text-ink-carbon">
                {mainDay.statusLabel}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon">
                {mainDay.title}
              </h3>
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                {mainDay.summary}
              </p>
            </div>

            {mainDay.items.length > 0 ? (
              <SpecList
                items={mainDay.items.map((item, idx) => ({
                  id: `${mainDay.id}-${idx}`,
                  title: `${item.time} · ${item.title}`,
                  subtitle: item.arena,
                  description: item.description,
                }))}
                tone="light"
              />
            ) : (
              <p className="border-t border-ink-carbon/10 pt-4 text-xs font-semibold text-brand-purple">
                Espaço preparado · A grade horária detalhada das atividades de 16/12 será publicada nesta seção.
              </p>
            )}
          </InteractiveCard>
        )}

        {/* Parte B: Informações de data, horário, local e Google Maps */}
        <div id="localizacao" className="space-y-6 border-t border-ink-carbon/15 pt-10">
          <div className="space-y-1 text-center">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon sm:text-3xl">
              Localização oficial do evento
            </h3>
            <p className="text-sm text-ink-carbon/85 sm:text-base">
              Informações confirmadas para o dia 16 de dezembro de 2026
            </p>
          </div>

          <InteractiveCard className="rounded-[28px] border border-ink-carbon/12 bg-bg-white p-6 shadow-editorial-card sm:p-8">
            <SpecList items={locationSpecs} tone="light" />
          </InteractiveCard>

          {locationConfig.googleMapsEmbedUrl.trim() && (
            <div className="space-y-5">
              <InteractiveCard
                delay={0.06}
                className="overflow-hidden rounded-[28px] border border-ink-carbon/15 bg-bg-white shadow-editorial-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-carbon/10 px-5 py-3.5 text-xs font-semibold text-ink-slate">
                  <span className="text-ink-carbon">{locationConfig.venueName}</span>
                  <span>Localização oficial confirmada</span>
                </div>
                <iframe
                  title={`Mapa de localização: ${locationConfig.venueName}`}
                  src={locationConfig.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[360px] w-full border-0 sm:h-[420px]"
                  allowFullScreen
                />
              </InteractiveCard>

              {locationConfig.googleMapsExternalUrl.trim() && (
                <ActionButton
                  href={locationConfig.googleMapsExternalUrl}
                  variant="carbon"
                  icon="external"
                >
                  Abrir localização no Google Maps
                </ActionButton>
              )}
            </div>
          )}
        </div>
      </div>
    </PosterChapter>
  );
}
