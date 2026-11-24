import { PartnerInstitution } from '../types/event';

/**
 * Configuração das instituições realizadoras e apoiadoras do EducaTech Arapiraca.
 * Quando os arquivos oficiais de logomarca estiverem disponíveis em /public,
 * informe o caminho em `logoUrl` (ex.: "/logos/nited.png").
 */
export const partnersConfig: PartnerInstitution[] = [
  {
    id: 'nited',
    acronym: 'NITED',
    name: 'Núcleo de Inovação em Tecnologia Educacional',
    role: 'realizacao',
    roleLabel: 'Realização',
    description:
      'Responsável pela articulação pedagógica, curadoria das experiências formativas e fomento à inovação, cultura digital e IA nas escolas.',
    logoUrl: '',
  },
  {
    id: 'cted',
    acronym: 'CT&ED',
    name: 'Coordenação Tecnológica e Educacional',
    role: 'realizacao',
    roleLabel: 'Realização',
    description:
      'Coordenação técnica e educacional dedicada à integração de recursos digitais, infraestrutura tecnológica e projetos pedagógicos na rede pública.',
    logoUrl: '',
  },
  {
    id: 'semed-arapiraca',
    acronym: 'SEMED',
    name: 'Secretaria Municipal de Educação de Arapiraca',
    role: 'apoio',
    roleLabel: 'Apoio Institucional',
    description:
      'Apoio institucional ao fortalecimento da educação pública municipal, articulando o currículo em ação, a ciência e o protagonismo estudantil.',
    logoUrl: '',
  },
];
