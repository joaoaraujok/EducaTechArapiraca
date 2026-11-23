export const EASE_ARCHITECTURAL = [0.22, 1, 0.36, 1] as const;

export const SPRING_SNAPPY = {
  stiffness: 360,
  damping: 30,
} as const;

export const SPRING_TACTILE = {
  stiffness: 240,
  damping: 26,
  mass: 0.75,
} as const;

export const SPRING_SCROLL = {
  stiffness: 140,
  damping: 24,
  mass: 0.35,
} as const;

export const VIEWPORT_ONCE = {
  once: true,
  margin: '-40px',
} as const;
