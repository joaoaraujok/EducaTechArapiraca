import { KeyboardEvent, useRef } from 'react';
import { motion } from 'motion/react';
import { SPRING_SNAPPY } from '../../lib/motion';

export interface SegmentedOption<T extends string> {
  id: T;
  label: string;
  badge?: string;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  layoutId: string;
  idPrefix: string;
  tone?: 'light' | 'dark';
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  layoutId,
  idPrefix,
  tone = 'light',
  className = '',
}: SegmentedControlProps<T>) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isDark = tone === 'dark';

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = options.length - 1;
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = lastIndex;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      onChange(options[nextIndex].id);
      buttonRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`flex flex-wrap gap-1.5 rounded-2xl border p-1.5 ${
        isDark
          ? 'border-white/12 bg-black/40'
          : 'border-ink-carbon/12 bg-white/65'
      } ${className}`}
    >
      {options.map((option, index) => {
        const isSelected = option.id === value;
        return (
          <button
            key={option.id}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${option.id}`}
            tabIndex={isSelected ? 0 : -1}
            aria-selected={isSelected}
            aria-controls={`${idPrefix}-panel-${option.id}`}
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`relative inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-left text-xs font-semibold tracking-tight transition-colors duration-200 sm:text-sm ${
              isSelected
                ? isDark
                  ? 'text-ink-light'
                  : 'text-ink-carbon'
                : isDark
                  ? 'text-ink-light-muted hover:text-ink-light'
                  : 'text-ink-slate hover:text-ink-carbon'
            }`}
          >
            {isSelected && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: 'spring', ...SPRING_SNAPPY }}
                className={`absolute inset-0 rounded-xl shadow-sm ${
                  isDark
                    ? 'border border-brand-lavender/50 bg-[#221F33]'
                    : 'border border-ink-carbon/12 bg-bg-white'
                }`}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {option.badge && (
                <span
                  className={`tabular-nums-ui text-xs font-bold ${
                    isDark ? 'text-poster-lime' : 'text-brand-purple'
                  }`}
                >
                  {option.badge}
                </span>
              )}
              <span>{option.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
