import { useState } from 'react';
import { motion } from 'motion/react';
import { EASE_ARCHITECTURAL } from '../../lib/motion';

interface EducaTechLogoProps {
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showCity?: boolean;
  className?: string;
}

const SIZE_STYLES = {
  sm: {
    word: 'text-base sm:text-lg',
    circuitW: 26,
    circuitH: 13,
    gap: 'gap-1',
    city: 'text-xs',
  },
  md: {
    word: 'text-xl',
    circuitW: 32,
    circuitH: 16,
    gap: 'gap-1.5',
    city: 'text-xs',
  },
  lg: {
    word: 'text-2xl sm:text-3xl',
    circuitW: 40,
    circuitH: 20,
    gap: 'gap-2',
    city: 'text-xs sm:text-sm',
  },
} as const;

/**
 * Lockup tipográfico escalonado em duas linhas minúsculas com proporções largas
 * inspiradas em squadeasy, integrado a trilha de circuito tecnológico animada em roxo.
 */
export function EducaTechLogo({
  tone = 'light',
  size = 'sm',
  showCity = false,
  className = '',
}: EducaTechLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cfg = SIZE_STYLES[size];
  const primaryText = tone === 'dark' ? 'text-ink-light' : 'text-ink-carbon';
  const accentText = tone === 'dark' ? 'text-brand-lavender' : 'text-brand-purple';
  const traceColor = tone === 'dark' ? '#C4B5FD' : '#6D28D9';
  const pulseColor = tone === 'dark' ? '#DDF542' : '#9333EA';
  const nodeFill = tone === 'dark' ? '#DDF542' : '#7C3AED';
  const ringStroke = tone === 'dark' ? '#DDF542' : '#6D28D9';
  const dividerColor = tone === 'dark' ? 'bg-white/15' : 'bg-ink-carbon/15';
  const cityColor = tone === 'dark' ? 'text-brand-lavender' : 'text-ink-slate';

  return (
    <span
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      <span className="inline-flex flex-col leading-none">
        <span
          className={`font-display ${cfg.word} font-extrabold lowercase leading-[0.82] tracking-[-0.06em] ${primaryText}`}
        >
          educa
        </span>

        <span className={`-mt-[0.28em] inline-flex items-center ${cfg.gap}`}>
          {/* Trilha de circuito tecnológico com overflow-visible e viewBox amplo para evitar cortes */}
          <motion.svg
            width={cfg.circuitW}
            height={cfg.circuitH}
            viewBox="0 0 36 18"
            fill="none"
            overflow="visible"
            aria-hidden="true"
            className="shrink-0 overflow-visible"
            animate={
              isHovered
                ? { scale: 1.2, rotate: -4 }
                : { scale: 1, rotate: 0 }
            }
            transition={{ type: 'spring', stiffness: 340, damping: 18 }}
          >
            {/* Trilha base */}
            <path
              d="M6.5 13H15.5L21 5H29.5"
              stroke={traceColor}
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Onda de energia percorrendo o circuito no hover */}
            <motion.path
              d="M6.5 13H15.5L21 5H29.5"
              stroke={pulseColor}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="32"
              initial={{ strokeDashoffset: 32, opacity: 0 }}
              animate={{
                strokeDashoffset: isHovered ? 0 : 32,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.42, ease: EASE_ARCHITECTURAL }}
            />

            {/* Nó inicial */}
            <motion.circle
              cx="6"
              cy="13"
              r="2.4"
              fill={traceColor}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              animate={isHovered ? { scale: 1.35 } : { scale: 1 }}
              transition={{ duration: 0.24, ease: EASE_ARCHITECTURAL }}
            />

            {/* Anel expansivo irradiando do nó terminal */}
            <motion.circle
              cx="30"
              cy="5"
              r="3"
              fill="none"
              stroke={ringStroke}
              strokeWidth="1.6"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={false}
              animate={
                isHovered
                  ? { scale: [0.9, 2.2], opacity: [0.85, 0] }
                  : { scale: 0.9, opacity: 0 }
              }
              transition={
                isHovered
                  ? { duration: 1.05, repeat: Infinity, ease: 'easeOut' }
                  : { duration: 0.2 }
              }
            />

            {/* Nó terminal */}
            <motion.circle
              cx="30"
              cy="5"
              r="2.6"
              fill={nodeFill}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              animate={isHovered ? { scale: 1.35 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 360, damping: 16 }}
            />
          </motion.svg>

          <motion.span
            animate={isHovered ? { x: 2 } : { x: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 20 }}
            className={`font-display ${cfg.word} font-extrabold lowercase leading-[0.82] tracking-[-0.06em] ${accentText}`}
          >
            tech
          </motion.span>
        </span>
      </span>

      {showCity && (
        <span className="hidden items-center gap-2.5 sm:inline-flex">
          <span className={`h-5 w-px ${dividerColor}`} aria-hidden="true" />
          <span className={`${cfg.city} font-semibold tracking-wide ${cityColor}`}>
            Arapiraca
          </span>
        </span>
      )}
    </span>
  );
}
