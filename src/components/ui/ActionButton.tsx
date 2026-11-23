import { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ClipboardList } from 'lucide-react';

export type ButtonVariant = 'lime' | 'carbon' | 'purple' | 'outline' | 'outline-dark';
type IconType = 'arrow-right' | 'external' | 'checklist' | 'none';

interface ActionButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: IconType;
  href?: string;
  onClick?: (triggerEl: HTMLButtonElement) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  lime: 'bg-poster-lime text-ink-carbon hover:bg-brand-lavender',
  carbon: 'bg-ink-carbon text-ink-light hover:bg-brand-purple',
  purple: 'bg-brand-purple text-white hover:bg-brand-plum',
  outline:
    'border border-ink-carbon/20 bg-white/80 text-ink-carbon hover:border-brand-purple hover:text-brand-purple',
  'outline-dark':
    'border border-white/25 bg-white/5 text-ink-light hover:border-poster-lime hover:text-poster-lime',
};

function renderIcon(icon: IconType) {
  switch (icon) {
    case 'arrow-right':
      return (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      );
    case 'external':
      return (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      );
    case 'checklist':
      return <ClipboardList className="h-4 w-4 shrink-0 opacity-85" aria-hidden="true" />;
    default:
      return null;
  }
}

export function ActionButton({
  children,
  variant = 'carbon',
  icon = 'none',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}: ActionButtonProps) {
  const baseClass =
    'group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.98]';
  const combinedClass = `${baseClass} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={combinedClass}
      >
        <span>{children}</span>
        {renderIcon(icon)}
      </a>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={(event) => onClick?.(event.currentTarget)}
      className={combinedClass}
    >
      {icon === 'checklist' && renderIcon(icon)}
      <span>{children}</span>
      {icon !== 'checklist' && renderIcon(icon)}
    </button>
  );
}
