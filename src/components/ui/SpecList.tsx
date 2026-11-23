export interface SpecListItem {
  id: string;
  code?: string;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  accent?: boolean;
}

interface SpecListProps {
  items: SpecListItem[];
  tone?: 'light' | 'dark' | 'colored';
  className?: string;
}

export function SpecList({ items, tone = 'light', className = '' }: SpecListProps) {
  const isDark = tone === 'dark';
  const isColored = tone === 'colored';

  return (
    <dl
      className={`divide-y border-y ${
        isDark
          ? 'divide-white/12 border-white/12'
          : isColored
            ? 'divide-ink-carbon/15 border-ink-carbon/20'
            : 'divide-ink-carbon/10 border-ink-carbon/10'
      } ${className}`}
    >
      {items.map((item) => (
        <div key={item.id} className="space-y-1.5 py-4 sm:py-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <dt className="flex flex-wrap items-baseline gap-2.5">
              {item.code && (
                <span
                  className={`tabular-nums-ui text-xs font-bold uppercase tracking-[0.12em] ${
                    isDark
                      ? 'text-poster-lime'
                      : isColored
                        ? 'text-brand-plum'
                        : 'text-brand-purple'
                  }`}
                >
                  {item.code}
                </span>
              )}
              <span
                className={`font-display text-base font-bold tracking-tight sm:text-lg ${
                  item.accent
                    ? isDark
                      ? 'text-brand-lavender'
                      : isColored
                        ? 'text-brand-plum'
                        : 'text-brand-purple'
                    : isDark
                      ? 'text-ink-light'
                      : 'text-ink-carbon'
                }`}
              >
                {item.title}
              </span>
            </dt>

            {item.meta && (
              <span
                className={`text-xs font-bold ${
                  isDark
                    ? 'text-brand-lavender'
                    : isColored
                      ? 'text-brand-plum'
                      : 'text-brand-purple'
                }`}
              >
                {item.meta}
              </span>
            )}
          </div>

          {item.subtitle && (
            <dd
              className={`text-sm font-semibold ${
                isDark ? 'text-ink-light' : 'text-ink-carbon'
              }`}
            >
              {item.subtitle}
            </dd>
          )}

          {item.description && (
            <dd
              className={`max-w-[54ch] text-sm leading-relaxed ${
                isDark
                  ? 'text-ink-light-muted'
                  : isColored
                    ? 'text-ink-carbon/85'
                    : 'text-ink-slate'
              }`}
            >
              {item.description}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
