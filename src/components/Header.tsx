import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Layers, X } from 'lucide-react';
import { generalEventInfo } from '../data/general';
import { SCROLL_SECTIONS } from '../data/navigation';
import { useActiveSection } from '../hooks/useActiveSection';
import { EASE_ARCHITECTURAL, SPRING_SNAPPY } from '../lib/motion';
import { ActionButton } from './ui/ActionButton';
import { EducaTechLogo } from './ui/EducaTechLogo';

interface HeaderProps {
  activeArenaName?: string | null;
  onNavigateHome?: (targetHref?: string) => void;
}

export function Header({ activeArenaName, onNavigateHome }: HeaderProps) {
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const { activeHref, activeSection } = useActiveSection();

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, SPRING_SNAPPY);

  const indexLinks = SCROLL_SECTIONS.filter((item) => item.id !== 'inicio');

  useEffect(() => {
    if (!isIndexOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsIndexOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isIndexOpen]);

  const activeLabel = activeArenaName ?? activeSection.label;

  const handleLinkClick = (href: string) => {
    setIsIndexOpen(false);
    if (onNavigateHome) {
      onNavigateHome(href);
    }
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
        <div className="pointer-events-auto mx-auto w-full max-w-[780px] overflow-hidden rounded-full border border-ink-carbon/12 bg-white/68 shadow-floating-nav backdrop-blur-md">
          <div className="flex h-14 items-center justify-between gap-1.5 px-3 sm:gap-2 sm:px-6">
            <a
              href="#inicio"
              onClick={(event) => {
                if (onNavigateHome) {
                  event.preventDefault();
                  handleLinkClick('#inicio');
                } else {
                  setIsIndexOpen(false);
                }
              }}
              className="group inline-flex min-h-[44px] shrink-0 items-center focus-visible:rounded-full"
              aria-label="EducaTech Arapiraca — Voltar ao início"
            >
              <EducaTechLogo tone="light" size="sm" showCity />
            </a>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsIndexOpen((prev) => !prev)}
                aria-expanded={isIndexOpen}
                aria-controls="editorial-index-drawer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink-carbon/12 bg-bg-canvas/85 px-3.5 text-xs font-semibold text-ink-carbon transition-colors hover:border-brand-purple hover:text-brand-purple sm:px-4"
              >
                {isIndexOpen ? (
                  <X className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Layers className="h-4 w-4 text-brand-purple" aria-hidden="true" />
                )}
                <span className="hidden sm:inline">{activeLabel}</span>
                <span className="sm:hidden">Menu</span>
              </button>

              <ActionButton
                href={activeArenaName ? undefined : '#inscricoes'}
                onClick={activeArenaName ? () => handleLinkClick('#inscricoes') : undefined}
                variant="carbon"
                icon="arrow-right"
                className="px-4 py-1.5 text-xs"
              >
                Inscrever
              </ActionButton>
            </div>
          </div>

          <motion.div
            style={{ scaleX: progressScale, transformOrigin: '0% 50%' }}
            className="h-[2.5px] w-full bg-brand-purple"
            aria-hidden="true"
          />
        </div>
      </header>

      <AnimatePresence>
        {isIndexOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink-carbon/35 px-3 pb-10 pt-20 backdrop-blur-md sm:px-5 sm:pt-24"
          >
            <motion.nav
              id="editorial-index-drawer"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: EASE_ARCHITECTURAL }}
              className="mx-auto w-full max-w-[780px] space-y-6 rounded-[28px] border border-ink-carbon/12 bg-bg-canvas p-6 shadow-poster-stage sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-purple">
                Áreas do festival
              </p>

              <ul className="divide-y divide-ink-carbon/10 border-y border-ink-carbon/10">
                {indexLinks.map((item, idx) => {
                  const isCurrent = !activeArenaName && activeHref === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(event) => {
                          if (onNavigateHome) {
                            event.preventDefault();
                            handleLinkClick(item.href);
                          } else {
                            setIsIndexOpen(false);
                          }
                        }}
                        aria-current={isCurrent ? 'location' : undefined}
                        className="flex min-h-[56px] items-center justify-between gap-4 py-3 transition-colors hover:text-brand-purple"
                      >
                        <span
                          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
                            isCurrent ? 'text-brand-purple' : 'text-ink-carbon'
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="tabular-nums-ui rounded-full bg-bg-white px-3 py-1 text-xs font-bold text-ink-slate">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-slate">
                {generalEventInfo.institutionalSubtitle}
              </p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
