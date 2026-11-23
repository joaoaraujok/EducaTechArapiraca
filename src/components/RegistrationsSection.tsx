import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RegistrationSelection } from '../App';
import { competitionLevels, modalitiesById } from '../data/competitions';
import { formLinksConfig } from '../data/forms';
import { generalEventInfo } from '../data/general';
import { ActionButton, ButtonVariant } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { InteractiveCard } from './ui/InteractiveCard';
import { ModalDialog } from './ui/ModalDialog';
import { PosterChapter } from './ui/PosterChapter';
import { TiltStage } from './ui/TiltStage';

interface RegistrationsSectionProps {
  selectedContext: RegistrationSelection | null;
  onClearContext: () => void;
}

interface PrepModalState {
  title: string;
  stage: 'school' | 'team';
  modalityName?: string;
  triggerEl: HTMLButtonElement | null;
}

interface FormActionControlProps {
  url: string;
  activeLabel: string;
  prepLabel: string;
  variant?: ButtonVariant;
  onOpenPrepModal: (triggerEl: HTMLButtonElement) => void;
}

function FormActionControl({
  url,
  activeLabel,
  prepLabel,
  variant = 'outline',
  onOpenPrepModal,
}: FormActionControlProps) {
  const trimmedUrl = url.trim();

  if (trimmedUrl) {
    return (
      <ActionButton href={trimmedUrl} variant={variant} icon="external">
        {activeLabel}
      </ActionButton>
    );
  }

  return (
    <div className="space-y-2">
      <ActionButton
        variant={variant}
        icon="checklist"
        onClick={(triggerEl) => onOpenPrepModal(triggerEl)}
      >
        {prepLabel}
      </ActionButton>
      <p className="text-xs font-semibold text-ink-slate">
        Abertura em breve · Veja o checklist escolar
      </p>
    </div>
  );
}

export function RegistrationsSection({
  selectedContext,
  onClearContext,
}: RegistrationsSectionProps) {
  const [prepModal, setPrepModal] = useState<PrepModalState | null>(null);
  const { preRegistrationChecklist } = generalEventInfo;

  const selectedLevelCode = selectedContext
    ? competitionLevels.find((l) => l.id === selectedContext.levelId)?.code
    : null;

  return (
    <PosterChapter
      id="inscricoes"
      surface="canvas"
      title={
        <>
          Inscrições e{' '}
          <InlineBadge tone="lavender" rotate="right">
            credenciamento
          </InlineBadge>
        </>
      }
      subtitle="O credenciamento segue duas etapas obrigatórias: primeiro o cadastro institucional da escola (Etapa A) e, em seguida, a inscrição de até uma equipe por nível (Etapa B)."
    >
      <div className="space-y-10">
        {selectedContext && (
          <InteractiveCard
            hoverLift={-3}
            hoverScale={1.008}
            className="space-y-3 rounded-[24px] border border-brand-purple/40 bg-brand-plum px-6 py-5 text-ink-light shadow-editorial-card"
          >
            <div role="status" className="space-y-3">
              <p className="max-w-[54ch] text-sm leading-relaxed">
                Você selecionou{' '}
                <strong className="text-poster-lime">{selectedContext.modalityName}</strong>
                {selectedLevelCode ? ` (${selectedLevelCode})` : ''}. Conclua ou confira primeiro o
                cadastro da escola na <strong>Etapa A</strong> abaixo antes de registrar a equipe na{' '}
                <strong>Etapa B</strong>.
              </p>
              <button
                type="button"
                onClick={onClearContext}
                className="min-h-[36px] text-xs font-bold uppercase tracking-wide text-brand-lavender underline hover:text-poster-lime"
              >
                Limpar seleção
              </button>
            </div>
          </InteractiveCard>
        )}

        {/* Etapa A — Cartão destaque em lima */}
        <InteractiveCard>
          <TiltStage className="rounded-[28px]">
            <div className="space-y-6 rounded-[28px] border border-ink-carbon/15 bg-poster-lime p-6 text-ink-carbon shadow-editorial-card sm:p-8">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Etapa A · Inscrição da escola
                </h3>
                <p className="max-w-[54ch] text-sm leading-relaxed text-ink-carbon/85 sm:text-base">
                  Pré-requisito obrigatório: a direção ou coordenação confirma a adesão da unidade
                  escolar no EducaTech Arapiraca antes de inscrever suas equipes nos níveis.
                </p>
              </div>

              <FormActionControl
                url={formLinksConfig.schoolRegistrationUrl}
                activeLabel="Cadastrar minha escola"
                prepLabel="Inscrições em breve · Ver preparo"
                variant="carbon"
                onOpenPrepModal={(triggerEl) =>
                  setPrepModal({
                    title: 'Preparo para o cadastro da escola',
                    stage: 'school',
                    triggerEl,
                  })
                }
              />
            </div>
          </TiltStage>
        </InteractiveCard>

        {/* Conector vertical indicando ordem Etapa A -> Etapa B */}
        <div className="flex items-center gap-3 pl-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">
          <span className="h-6 w-0.5 bg-brand-purple/40" aria-hidden="true" />
          <span>Após concluir a Etapa A, siga para a inscrição por nível</span>
        </div>

        {/* Etapa B — Inscrição das equipes por nível */}
        <div className="space-y-6">
          <div className="space-y-2 border-b border-ink-carbon/10 pb-5">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-carbon sm:text-3xl">
              Etapa B · Inscrição das equipes por nível
            </h3>
            <p className="text-sm leading-relaxed text-ink-slate">
              Disponível após a confirmação da escola na Etapa A · Máximo de 1 equipe de até 3
              estudantes por nível.
            </p>
          </div>

          <div className="space-y-4">
            {competitionLevels.map((level, index) => {
              const levelModalities = level.modalities.map((id) => modalitiesById[id]);
              const levelUrl = formLinksConfig.teamRegistrationUrls[level.id];
              const isHighlighted = selectedContext?.levelId === level.id;

              return (
                <InteractiveCard
                  as="article"
                  key={level.id}
                  id={`inscricao-${level.id}`}
                  delay={index * 0.04}
                  className={`space-y-5 rounded-[24px] border p-6 ${
                    isHighlighted
                      ? 'border-brand-purple/50 bg-brand-lavender/35 shadow-editorial-card'
                      : 'border-ink-carbon/10 bg-bg-white hover:border-brand-purple/35'
                  }`}
                >
                  <div className="space-y-1.5">
                    <h4 className="font-display text-xl font-bold tracking-tight text-ink-carbon">
                      <span className="mr-2 text-brand-purple">{level.code}</span>·{' '}
                      {level.gradeRange}
                    </h4>
                    <p className="text-xs font-semibold text-ink-slate">
                      Requer Etapa A concluída · Até {level.maxStudentsPerTeam} estudantes
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                      Modalidades disponíveis
                    </p>
                    <ul className="space-y-1.5 text-sm text-ink-carbon">
                      {levelModalities.map((mod) => {
                        const isPickedModality =
                          isHighlighted && selectedContext?.modalityName === mod.name;
                        return (
                          <li key={mod.id} className="flex items-center gap-2.5">
                            <span
                              className={`h-2 w-2 shrink-0 rounded-full ${
                                isPickedModality ? 'bg-brand-purple' : 'bg-brand-lavender'
                              }`}
                              aria-hidden="true"
                            />
                            <span
                              className={
                                isPickedModality ? 'font-bold text-brand-purple' : 'font-medium'
                              }
                            >
                              {mod.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <FormActionControl
                    url={levelUrl}
                    activeLabel={`Inscrever equipe — ${level.code}`}
                    prepLabel={`Ver preparo · ${level.code}`}
                    variant="outline"
                    onOpenPrepModal={(triggerEl) =>
                      setPrepModal({
                        title: `Preparo de equipe · ${level.title}`,
                        stage: 'team',
                        modalityName: isHighlighted ? selectedContext?.modalityName : undefined,
                        triggerEl,
                      })
                    }
                  />
                </InteractiveCard>
              );
            })}
          </div>
        </div>
      </div>

      <ModalDialog
        open={Boolean(prepModal)}
        onClose={() => setPrepModal(null)}
        title={prepModal?.title ?? ''}
        subtitle="Inscrições em preparação"
        returnFocusTo={prepModal?.triggerEl}
      >
        {prepModal && (
          <div className="mt-5 space-y-5">
            {prepModal.modalityName && (
              <p className="rounded-xl border border-brand-purple/25 bg-brand-lavender/25 px-4 py-3 text-sm text-ink-carbon">
                Modalidade em foco: <strong>{prepModal.modalityName}</strong>.
              </p>
            )}

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-slate">
                {prepModal.stage === 'school'
                  ? 'O que a escola já pode organizar para a Etapa A'
                  : 'Requisitos para inscrever a equipe (Etapa B)'}
              </p>
              <ul className="space-y-2.5">
                {(prepModal.stage === 'school'
                  ? preRegistrationChecklist.schoolItems
                  : preRegistrationChecklist.teamItems
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-slate"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="border-t border-ink-carbon/10 pt-4 text-sm leading-relaxed text-ink-slate">
              {preRegistrationChecklist.guidanceNote}
            </p>

            <div className="flex justify-end pt-2">
              <ActionButton variant="carbon" onClick={() => setPrepModal(null)}>
                Entendido
              </ActionButton>
            </div>
          </div>
        )}
      </ModalDialog>
    </PosterChapter>
  );
}
