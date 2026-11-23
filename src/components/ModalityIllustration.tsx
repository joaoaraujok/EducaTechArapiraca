import { ModalityId } from '../types/event';
import { InlineBadgeTone } from './ui/InlineBadge';
import { MediaFrame } from './ui/MediaFrame';

interface ModalityIllustrationProps {
  modalityId: ModalityId;
  imageUrl?: string;
  imageAlt: string;
  title: string;
  levelLabel?: string;
  tagTone?: InlineBadgeTone;
}

function TechnicalFallbackSvg({ modalityId }: { modalityId: ModalityId }) {
  switch (modalityId) {
    case 'robo-zero':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <circle cx="320" cy="200" r="96" stroke="#C4B5FD" strokeOpacity="0.45" strokeDasharray="4 6" />
          <rect x="245" y="135" width="150" height="130" rx="8" stroke="#F7F5FC" strokeOpacity="0.7" />
          <path d="M210 200H244M396 200H430M320 90V135M320 265V310" stroke="#DDF542" strokeOpacity="0.65" />
        </svg>
      );

    case 'percurso-robo':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <path
            d="M80 300C165 300 185 130 300 130C415 130 410 255 560 255"
            stroke="#DDF542"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
          <circle cx="300" cy="130" r="14" stroke="#F7F5FC" strokeOpacity="0.75" />
        </svg>
      );

    case 'estourar-balao':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <ellipse cx="320" cy="210" rx="220" ry="110" stroke="#C4B5FD" strokeOpacity="0.5" strokeDasharray="5 6" />
          <line x1="160" y1="210" x2="480" y2="210" stroke="#F7F5FC" strokeOpacity="0.35" />
          <circle cx="320" cy="210" r="12" stroke="#DDF542" strokeOpacity="0.85" />
        </svg>
      );

    case 'futebol-sumo':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <circle cx="320" cy="200" r="132" stroke="#DDF542" strokeOpacity="0.6" strokeWidth="2" />
          <line x1="320" y1="68" x2="320" y2="332" stroke="#F7F5FC" strokeOpacity="0.35" strokeDasharray="4 4" />
        </svg>
      );

    case 'line-follow':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <path
            d="M84 310C150 180 240 110 330 210C410 295 495 140 565 110"
            stroke="#F7F5FC"
            strokeOpacity="0.7"
            strokeWidth="3"
          />
          <circle cx="330" cy="210" r="24" stroke="#C4B5FD" strokeOpacity="0.65" strokeDasharray="3 4" />
        </svg>
      );

    case 'desvio-obstaculos':
      return (
        <svg viewBox="0 0 640 400" className="h-full w-full" fill="none" aria-hidden="true">
          <path d="M235 155C268 185 268 255 235 285" stroke="#DDF542" strokeOpacity="0.7" strokeWidth="2" />
          <path
            d="M120 220C220 220 235 100 340 100C445 100 465 220 545 220"
            stroke="#F7F5FC"
            strokeOpacity="0.6"
            strokeDasharray="6 6"
          />
        </svg>
      );
  }
}

export function ModalityIllustration({
  modalityId,
  imageUrl,
  imageAlt,
  title,
  levelLabel,
  tagTone = 'lime',
}: ModalityIllustrationProps) {
  return (
    <MediaFrame
      src={imageUrl}
      alt={imageAlt || title}
      aspectClass="aspect-[16/10]"
      tilt
      cornerTag={levelLabel ? { label: levelLabel, tone: tagTone } : undefined}
      fallback={<TechnicalFallbackSvg modalityId={modalityId} />}
    />
  );
}
