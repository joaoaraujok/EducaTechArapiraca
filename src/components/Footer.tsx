import { generalEventInfo } from '../data/general';
import { partnersConfig } from '../data/partners';
import { EducaTechLogo } from './ui/EducaTechLogo';

interface FooterProps {
  onNavigateHome?: (targetHref?: string) => void;
}

export function Footer({ onNavigateHome }: FooterProps) {
  const { eventName, institutionalSubtitle, navItems, contacts } =
    generalEventInfo;

  const organizers = partnersConfig.filter((p) => p.role === 'realizacao');
  const supporters = partnersConfig.filter((p) => p.role === 'apoio');

  const hasContacts = Boolean(
    contacts.email.trim() ||
      contacts.phone.trim() ||
      contacts.instagramUrl.trim() ||
      contacts.websiteUrl.trim(),
  );

  return (
    <footer className="bg-bg-white px-3 pb-4 pt-2 sm:px-6 sm:pb-6">
      <div className="bg-ink-carbon py-14 text-ink-light-muted sm:py-16">
        <div className="mx-auto w-full max-w-[780px] space-y-10 px-5 sm:px-8">
          <div className="space-y-4 border-b border-white/12 pb-8">
            <a
              href="#inicio"
              onClick={(event) => {
                if (onNavigateHome) {
                  event.preventDefault();
                  onNavigateHome('#inicio');
                }
              }}
              className="group inline-flex items-center focus-visible:rounded"
              aria-label="EducaTech Arapiraca — Voltar ao início"
            >
              <EducaTechLogo tone="dark" size="lg" showCity />
            </a>

            <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted">
              {institutionalSubtitle}.
            </p>

            <div className="space-y-1.5 text-xs leading-relaxed">
              <p>
                <strong className="font-semibold text-ink-light">Realização:</strong>{' '}
                {organizers.map((org) => `${org.acronym} (${org.name})`).join(' e ')}.
              </p>
              <p>
                <strong className="font-semibold text-ink-light">Apoio:</strong>{' '}
                {supporters.map((sup) => sup.name).join(', ')}.
              </p>
            </div>
          </div>

          <nav aria-label="Links do rodapé" className="space-y-3 border-b border-white/12 pb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-poster-lime">
              Navegação
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-light">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      if (onNavigateHome) {
                        event.preventDefault();
                        onNavigateHome(item.href);
                      }
                    }}
                    className="transition-colors hover:text-poster-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#inscricoes"
                  onClick={(event) => {
                    if (onNavigateHome) {
                      event.preventDefault();
                      onNavigateHome('#inscricoes');
                    }
                  }}
                  className="transition-colors hover:text-poster-lime"
                >
                  Inscrições
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(event) => {
                    if (onNavigateHome) {
                      event.preventDefault();
                      onNavigateHome('#faq');
                    }
                  }}
                  className="transition-colors hover:text-poster-lime"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-3 border-b border-white/12 pb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-poster-lime">
              Canais Institucionais
            </h3>

            {hasContacts ? (
              <ul className="space-y-2 text-sm text-ink-light">
                {contacts.email.trim() && (
                  <li>
                    <a
                      href={`mailto:${contacts.email}`}
                      className="transition-colors hover:text-poster-lime"
                    >
                      {contacts.email}
                    </a>
                  </li>
                )}
                {contacts.phone.trim() && (
                  <li>
                    <a
                      href={`tel:${contacts.phone.replace(/\D/g, '')}`}
                      className="transition-colors hover:text-poster-lime"
                    >
                      {contacts.phone}
                    </a>
                  </li>
                )}
                {contacts.instagramUrl.trim() && (
                  <li>
                    <a
                      href={contacts.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-poster-lime"
                    >
                      Instagram oficial
                    </a>
                  </li>
                )}
                {contacts.websiteUrl.trim() && (
                  <li>
                    <a
                      href={contacts.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-poster-lime"
                    >
                      Portal institucional
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <p className="max-w-[54ch] text-sm leading-relaxed text-ink-light-muted">
                Para dúvidas sobre participação escolar, regulamento e envio das inscrições, procure
                a coordenação do NITED ou da CT&amp;ED na Secretaria Municipal de Educação de
                Arapiraca.
              </p>
            )}
          </div>

          <div className="space-y-1 text-xs text-ink-light-muted">
            <p>
              © {new Date().getFullYear()} {eventName}. Todos os direitos reservados.
            </p>
            <p className="font-semibold tracking-wide text-brand-lavender">
              NITED · CT&amp;ED · SEMED Arapiraca
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
