import { useState } from 'react';
import { motion } from 'motion/react';
import { generalEventInfo } from '../data/general';
import { EASE_ARCHITECTURAL, SPRING_SNAPPY } from '../lib/motion';
import { ActionButton } from './ui/ActionButton';
import { InlineBadge } from './ui/InlineBadge';
import { PosterChapter } from './ui/PosterChapter';
import { Reveal } from './ui/Reveal';

export function HowToParticipateSection() {
  const { participation } = generalEventInfo;
  const [activeStep, setActiveStep] = useState(participation.steps[0]?.stepNumber ?? '01');

  return (
    <PosterChapter
      id="como-participar"
      surface="peach"
      framed
      title={
        <>
          Como participar em{' '}
          <InlineBadge tone="lime" rotate="left">
            5 etapas
          </InlineBadge>
        </>
      }
      subtitle={participation.subtitle}
    >
      <div className="space-y-8">
        <ol className="relative space-y-3 border-l-2 border-ink-carbon/20 pl-6 sm:pl-8">
          {participation.steps.map((step, index) => {
            const isSelected = activeStep === step.stepNumber;
            return (
              <motion.li
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: EASE_ARCHITECTURAL }}
                className="relative"
              >
                {isSelected && (
                  <motion.span
                    layoutId="active-step-marker"
                    transition={{ type: 'spring', ...SPRING_SNAPPY }}
                    className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full bg-brand-purple ring-4 ring-poster-peach sm:-left-[39px]"
                    aria-hidden="true"
                  />
                )}

                <motion.button
                  type="button"
                  onClick={() => setActiveStep(step.stepNumber)}
                  aria-current={isSelected ? 'step' : undefined}
                  whileHover={{
                    y: -4,
                    x: 4,
                    scale: 1.01,
                    transition: { type: 'spring', stiffness: 320, damping: 24 },
                  }}
                  className={`w-full rounded-[24px] border p-5 text-left transition-[background-color,border-color,box-shadow] duration-200 hover:shadow-[0_24px_48px_-20px_rgba(17,16,24,0.2)] sm:p-6 ${
                    isSelected
                      ? 'border-ink-carbon/20 bg-bg-white shadow-editorial-card'
                      : 'border-ink-carbon/10 bg-white/55 hover:border-ink-carbon/25 hover:bg-white/90'
                  }`}
                >
                  <span
                    className={`tabular-nums-ui font-display text-2xl font-extrabold tracking-tight ${
                      isSelected ? 'text-brand-purple' : 'text-ink-carbon/70'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink-carbon">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-ink-slate sm:text-base">
                    {step.description}
                  </p>
                </motion.button>
              </motion.li>
            );
          })}
        </ol>

        <Reveal className="space-y-5 border-t border-ink-carbon/15 pt-7">
          <p className="max-w-[54ch] text-sm font-semibold leading-relaxed text-ink-carbon sm:text-base">
            {participation.ruleHighlight}
          </p>

          <div>
            <ActionButton href="#inscricoes" variant="carbon" icon="arrow-right">
              Iniciar Etapa A: Cadastro da Escola
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </PosterChapter>
  );
}
