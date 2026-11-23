import { useEffect, useState } from 'react';
import { SCROLL_SECTIONS } from '../data/navigation';

/**
 * Rastreia a seção ativa durante a rolagem usando coordenadas reais de layout
 * para evitar travamentos em capítulos longos.
 */
export function useActiveSection() {
  const [activeHref, setActiveHref] = useState<string>(SCROLL_SECTIONS[0].href);

  useEffect(() => {
    let rafId = 0;

    const updateActiveSection = () => {
      rafId = 0;

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;

      if (reachedBottom) {
        const lastSection = SCROLL_SECTIONS[SCROLL_SECTIONS.length - 1];
        setActiveHref(lastSection.href);
        return;
      }

      const thresholdY = window.innerHeight * 0.35;
      let currentHref: string = SCROLL_SECTIONS[0].href;

      for (const section of SCROLL_SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= thresholdY) {
          currentHref = section.href;
        }
      }

      setActiveHref(currentHref);
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  const activeSection =
    SCROLL_SECTIONS.find((item) => item.href === activeHref) ?? SCROLL_SECTIONS[0];

  return { activeHref, activeSection };
}
