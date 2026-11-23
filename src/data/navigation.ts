export interface ScrollSectionItem {
  id: string;
  label: string;
  href: string;
}

export const SCROLL_SECTIONS: ScrollSectionItem[] = [
  {
    id: 'inicio',
    label: 'Início',
    href: '#inicio',
  },
  {
    id: 'sobre',
    label: 'Sobre',
    href: '#sobre',
  },
  {
    id: 'competicoes',
    label: 'Competições',
    href: '#competicoes',
  },
  {
    id: 'como-participar',
    label: 'Como Participar',
    href: '#como-participar',
  },
  {
    id: 'inscricoes',
    label: 'Inscrições',
    href: '#inscricoes',
  },
  {
    id: 'localizacao',
    label: 'Localização',
    href: '#localizacao',
  },
  {
    id: 'parceiros',
    label: 'Realização e Parceiros',
    href: '#parceiros',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#faq',
  },
];
