import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ArenaDetailView } from './components/ArenaDetailView';
import { ArenasSection } from './components/ArenasSection';
import { CurriculumSection } from './components/CurriculumSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToParticipateSection } from './components/HowToParticipateSection';
import { NewsSection } from './components/NewsSection';
import { PartnersSection } from './components/PartnersSection';
import { RegistrationsSection } from './components/RegistrationsSection';
import { RegulationsSection } from './components/RegulationsSection';
import { ScheduleLocationSection } from './components/ScheduleLocationSection';
import { festivalArenas } from './data/arenas';
import { ArenaId, CompetitionLevelId } from './types/event';

export interface RegistrationSelection {
  levelId: CompetitionLevelId;
  modalityName: string;
}

function getArenaIdFromHash(hashValue: string): ArenaId | null {
  const match = /^#arena\/([a-z0-9-]+)$/i.exec(hashValue);
  if (!match) return null;
  const found = festivalArenas.find((arena) => arena.id === match[1]);
  return found ? found.id : null;
}

export function App() {
  const [selectedContext, setSelectedContext] = useState<RegistrationSelection | null>(null);
  const [activeArenaId, setActiveArenaId] = useState<ArenaId | null>(() =>
    typeof window !== 'undefined' ? getArenaIdFromHash(window.location.hash) : null,
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveArenaId(getArenaIdFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenArena = useCallback((arenaId: ArenaId) => {
    window.history.pushState(null, '', `#arena/${arenaId}`);
    setActiveArenaId(arenaId);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleNavigateHome = useCallback((targetHref = '#inicio') => {
    const normalizedHash = targetHref.startsWith('#') ? targetHref : `#${targetHref}`;
    window.history.pushState(null, '', normalizedHash);
    setActiveArenaId(null);

    requestAnimationFrame(() => {
      if (normalizedHash === '#inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.getElementById(normalizedHash.slice(1));
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  const handleSelectRegistration = useCallback(
    (levelId: CompetitionLevelId, modalityName: string) => {
      setSelectedContext({ levelId, modalityName });
      window.history.pushState(null, '', '#inscricoes');
      setActiveArenaId(null);

      requestAnimationFrame(() => {
        const target = document.getElementById('inscricoes');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    [],
  );

  const handleClearContext = useCallback(() => {
    setSelectedContext(null);
  }, []);

  const activeArena = activeArenaId
    ? festivalArenas.find((arena) => arena.id === activeArenaId) ?? null
    : null;

  return (
    <MotionConfig reducedMotion="never">
      <div className="relative min-h-screen bg-bg-canvas text-ink-carbon">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-carbon focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-light"
        >
          Ir para o conteúdo principal
        </a>

        <Header
          activeArenaName={activeArena ? activeArena.name : null}
          onNavigateHome={activeArena ? handleNavigateHome : undefined}
        />

        <main id="conteudo-principal" className="relative">
          {activeArena ? (
            <ArenaDetailView
              arena={activeArena}
              onBackToPortal={handleNavigateHome}
              onOpenArena={handleOpenArena}
              onSelectRoboticsRegistration={handleSelectRegistration}
            />
          ) : (
            <>
              <Hero />
              <AboutSection />
              <ArenasSection onOpenArena={handleOpenArena} />
              <CurriculumSection />
              <ScheduleLocationSection />
              <HowToParticipateSection />
              <RegistrationsSection
                selectedContext={selectedContext}
                onClearContext={handleClearContext}
              />
              <RegulationsSection />
              <NewsSection />
              <PartnersSection />
              <FaqSection />
            </>
          )}
        </main>

        <Footer onNavigateHome={activeArena ? handleNavigateHome : undefined} />
      </div>
    </MotionConfig>
  );
}

export default App;
