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
    svgHeight: 'h-8 sm:h-9',
    city: 'text-xs',
  },
  md: {
    svgHeight: 'h-10',
    city: 'text-xs',
  },
  lg: {
    svgHeight: 'h-12 sm:h-14',
    city: 'text-xs sm:text-sm',
  },
} as const;

/**
 * Lockup vetorial unificado em SVG para garantir proporções idênticas entre desktop e mobile,
 * com trilha de circuito tecnológico e nós animados em roxo.
 */
export function EducaTechLogo({
  tone = 'light',
  size = 'sm',
  showCity = false,
  className = '',
}: EducaTechLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cfg = SIZE_STYLES[size];
  const primaryFill = tone === 'dark' ? '#F6F5FB' : '#111018';
  const accentFill = tone === 'dark' ? '#C4B5FD' : '#6D28D9';
  const traceColor = tone === 'dark' ? '#C4B5FD' : '#6D28D9';
  const pulseColor = tone === 'dark' ? '#DDF542' : '#9333EA';
  const nodeFill = tone === 'dark' ? '#DDF542' : '#7C3AED';
  const ringStroke = tone === 'dark' ? '#DDF542' : '#6D28D9';
  const dividerColor = tone === 'dark' ? 'bg-white/15' : 'bg-ink-carbon/15';
  const cityColor = tone === 'dark' ? 'text-brand-lavender' : 'text-ink-slate';

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
      className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap select-none sm:gap-3 ${className}`}
    >
      <span className="sr-only">EducaTech</span>

      <motion.svg
        viewBox="0 0 118 46"
        fill="none"
        overflow="visible"
        aria-hidden="true"
        className={`${cfg.svgHeight} w-auto shrink-0 overflow-visible`}
      >
        <text
          x="2"
          y="19"
          fill={primaryFill}
          fontFamily="'Sora', sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-1.2"
        >
          educa
        </text>

        {/* Trilha base do circuito tecnológico */}
        <path
          d="M8 36H18L24 27H36"
          stroke={traceColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pulso de energia percorrendo a trilha (ativo no hover e em batimento ambiente sutil) */}
        <motion.path
          d="M8 36H18L24 27H36"
          stroke={pulseColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="36"
          initial={{ strokeDashoffset: 36, opacity: 0 }}
          animate={
            isHovered
              ? { strokeDashoffset: 0, opacity: 1 }
              : { strokeDashoffset: [36, 0, -36], opacity: [0, 0.9, 0] }
          }
          transition={
            isHovered
              ? { duration: 0.4, ease: EASE_ARCHITECTURAL }
              : {
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 2.6,
                  ease: 'easeInOut',
                }
          }
        />

        {/* Nó inicial à esquerda */}
        <motion.circle
          cx="8"
          cy="36"
          fill={traceColor}
          initial={{ r: 2.5 }}
          animate={{ r: isHovered ? 3.4 : 2.5 }}
          transition={{ duration: 0.24, ease: EASE_ARCHITECTURAL }}
        />

        {/* Anel expansivo centrado exatamente no nó terminal (cx=36, cy=27) */}
        <motion.circle
          cx="36"
          cy="27"
          fill="none"
          stroke={ringStroke}
          strokeWidth="1.6"
          initial={{ r: 3, opacity: 0 }}
          animate={
            isHovered
              ? { r: [3, 8.5], opacity: [0.85, 0] }
              : { r: [3, 7], opacity: [0, 0.55, 0] }
          }
          transition={
            isHovered
              ? { duration: 1.05, repeat: Infinity, ease: 'easeOut' }
              : { duration: 1.4, repeat: Infinity, repeatDelay: 2.8, ease: 'easeOut' }
          }
        />

        {/* Nó terminal */}
        <motion.circle
          cx="36"
          cy="27"
          fill={nodeFill}
          initial={{ r: 2.8 }}
          animate={{ r: isHovered ? 3.8 : 2.8 }}
          transition={{ type: 'spring', stiffness: 360, damping: 16 }}
        />

        <motion.text
          x="44"
          y="38"
          fill={accentFill}
          fontFamily="'Sora', sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-1.2"
          animate={{ x: isHovered ? 45.5 : 44 }}
          transition={{ type: 'spring', stiffness: 340, damping: 20 }}
        >
          tech
        </motion.text>
      </motion.svg>

      {showCity && (
        <span className="hidden items-center gap-2.5 sm:inline-flex">
          <span className={`h-5 w-px ${dividerColor}`} aria-hidden="true" />
          <span className={`${cfg.city} font-semibold tracking-wide ${cityColor}`}>
            Arapiraca
          </span>
        </span>
      )}
    </motion.span>
  );
}
