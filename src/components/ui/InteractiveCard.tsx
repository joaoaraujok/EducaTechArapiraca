import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_ARCHITECTURAL } from '../../lib/motion';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverLift?: number;
  hoverScale?: number;
  as?: 'div' | 'article';
  id?: string;
}

export function InteractiveCard({
  children,
  className = '',
  delay = 0,
  hoverLift = -5,
  hoverScale = 1.012,
  as = 'div',
  id,
}: InteractiveCardProps) {
  const Component = as === 'article' ? motion.article : motion.div;

  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 26, scale: 0.975 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.48, delay, ease: EASE_ARCHITECTURAL }}
      whileHover={{
        y: hoverLift,
        scale: hoverScale,
        transition: { type: 'spring', stiffness: 320, damping: 24 },
      }}
      className={`transition-[border-color,box-shadow] duration-300 hover:shadow-[0_28px_60px_-24px_rgba(109,40,217,0.22)] ${className}`}
    >
      {children}
    </Component>
  );
}
