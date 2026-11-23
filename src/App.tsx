import { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToParticipateSection } from './components/HowToParticipateSection';
import { LocationSection } from './components/LocationSection';
import { PartnersSection } from './components/PartnersSection';
import { RegistrationsSection } from './components/RegistrationsSection';
import { CompetitionLevelId } from './types/event';

export interface RegistrationSelection {
  levelId: CompetitionLevelId;
  modalityName: string;
}

export function App() {
  const [selectedContext, setSelectedContext] = useState<RegistrationSelection | null>(null);

  const handleSelectRegistration = useCallback(
    (levelId: CompetitionLevelId, modalityName: string) => {
      setSelectedContext({ levelId, modalityName });
      const target = document.getElementById('inscricoes');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [],
  );

  const handleClearContext = useCallback(() => {
    setSelectedContext(null);
  }, []);

  return (
    <MotionConfig reducedMotion="never">
      <div className="relative min-h-screen bg-bg-canvas text-ink-carbon">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-carbon focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-light"
        >
          Ir para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal" className="relative">
          <Hero />
          <AboutSection />
          <CompetitionsSection onSelectRegistration={handleSelectRegistration} />
          <HowToParticipateSection />
          <RegistrationsSection
            selectedContext={selectedContext}
            onClearContext={handleClearContext}
          />
          <LocationSection />
          <PartnersSection />
          <FaqSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
