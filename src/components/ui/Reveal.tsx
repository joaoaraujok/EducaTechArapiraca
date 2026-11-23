import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_ARCHITECTURAL } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  immediate = false,
}: RevealProps) {
  const initialState = {
    opacity: 0,
    y: 22,
    scale: 0.98,
  };

  const targetState = {
    opacity: 1,
    y: 0,
    scale: 1,
  };

  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={targetState}
        transition={{ duration: 0.48, delay, ease: EASE_ARCHITECTURAL }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initialState}
      whileInView={targetState}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.48, delay, ease: EASE_ARCHITECTURAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
