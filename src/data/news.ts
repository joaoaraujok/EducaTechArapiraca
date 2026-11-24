import { NewsItem } from '../types/event';

/**
 * Comunicados, novidades e registros oficiais do EducaTech Arapiraca.
 * Adicione objetos ao array `newsItems` conforme forem publicados pela coordenação.
 */
export const newsItems: NewsItem[] = [];

export const newsEditorialSlots = [
  {
    id: 'comunicados',
    title: 'Comunicados oficiais',
    description:
      'Notas informativas sobre prazos de inscrição, credenciamento das unidades escolares e orientações às delegações.',
  },
  {
    id: 'novidades-arenas',
    title: 'Novidades das arenas',
    description:
      'Atualizações sobre os títulos do E-JEAR, temas do Ideathon, palestrantes do i9 Stage, expositores da ExpoTech e baterias do Robotics Challenge.',
  },
  {
    id: 'registros',
    title: 'Registros e cobertura',
    description:
      'Galerias fotográficas, destaques das escolas participantes e memórias das ações preparatórias e do encontro em 16 de dezembro.',
  },
];
