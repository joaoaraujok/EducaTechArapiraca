import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { SPRING_TACTILE } from '../../lib/motion';

interface TiltStageProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  disabled?: boolean;
}

export function TiltStage({
  children,
  className = '',
  maxTilt = 4.5,
  disabled = false,
}: TiltStageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [interactive, setInteractive] = useState(false);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const glareXRaw = useMotionValue(50);
  const glareYRaw = useMotionValue(30);
  const glareOpacityRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, SPRING_TACTILE);
  const rotateY = useSpring(rotateYRaw, SPRING_TACTILE);
  const glareOpacity = useSpring(glareOpacityRaw, SPRING_TACTILE);

  const glareGradient = useMotionTemplate`radial-gradient(460px circle at ${glareXRaw}% ${glareYRaw}%, rgba(196, 181, 253, 0.2), transparent 65%)`;

  useEffect(() => {
    if (disabled || typeof window === 'undefined') {
      setInteractive(false);
      return;
    }

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    setInteractive(!coarsePointer);
  }, [disabled]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateYRaw.set((px - 0.5) * maxTilt * 2);
    rotateXRaw.set((0.5 - py) * maxTilt * 2);
    glareXRaw.set(px * 100);
    glareYRaw.set(py * 100);
    glareOpacityRaw.set(1);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    glareOpacityRaw.set(0);
  };

  return (
    <div className="perspective-stage">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          interactive
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
            : undefined
        }
        className={`relative will-change-transform ${className}`}
      >
        {children}
        {interactive && (
          <motion.div
            aria-hidden="true"
            style={{
              background: glareGradient,
              opacity: glareOpacity,
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
