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
    id: 'arenas',
    label: 'Arenas',
    href: '#arenas',
  },
  {
    id: 'curriculo',
    label: 'Alinhamento Curricular',
    href: '#curriculo',
  },
  {
    id: 'programacao',
    label: 'Programação',
    href: '#programacao',
  },
  {
    id: 'participacao',
    label: 'Participação',
    href: '#participacao',
  },
  {
    id: 'regulamentos',
    label: 'Regulamentos',
    href: '#regulamentos',
  },
  {
    id: 'noticias',
    label: 'Notícias',
    href: '#noticias',
  },
  {
    id: 'parceiros',
    label: 'Parceiros',
    href: '#parceiros',
  },
];
