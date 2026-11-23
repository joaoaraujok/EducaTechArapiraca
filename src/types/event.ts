export type CompetitionLevelId = 'nivel-1' | 'nivel-2' | 'nivel-3' | 'nivel-4';

export type ModalityId =
  | 'robo-zero'
  | 'percurso-robo'
  | 'estourar-balao'
  | 'futebol-sumo'
  | 'line-follow'
  | 'desvio-obstaculos';

export interface NavItem {
  label: string;
  href: string;
}

export interface EventHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface AboutPillar {
  id: string;
  title: string;
  description: string;
  iconName: 'wrench' | 'lightbulb' | 'users' | 'puzzle' | 'sparkles';
}

export interface KitModule {
  code: string;
  title: string;
  description: string;
}

export interface TeamRoleDefinition {
  role: string;
  focus: string;
}

export interface PreRegistrationChecklist {
  schoolItems: string[];
  teamItems: string[];
  guidanceNote: string;
}

export interface Modality {
  id: ModalityId;
  name: string;
  shortTag: string;
  description: string;
  objective: string;
  teamRoleNote: string;
  kitLabel: string;
  imageUrl?: string;
  imageAlt: string;
}

export interface CompetitionLevel {
  id: CompetitionLevelId;
  code: string;
  title: string;
  gradeRange: string;
  summary: string;
  maxStudentsPerTeam: number;
  modalities: [ModalityId, ModalityId];
}

export interface ParticipationStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FormLinksConfig {
  schoolRegistrationUrl: string;
  teamRegistrationUrls: Record<CompetitionLevelId, string>;
}

export interface LocationConfig {
  date: string;
  time: string;
  venueName: string;
  fullAddress: string;
  cityState: string;
  googleMapsEmbedUrl: string;
  googleMapsExternalUrl: string;
}

export interface PartnerInstitution {
  id: string;
  acronym: string;
  name: string;
  role: 'realizacao' | 'apoio';
  roleLabel: string;
  description: string;
  logoUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactConfig {
  email: string;
  phone: string;
  instagramUrl: string;
  websiteUrl: string;
}

export interface GeneralEventInfo {
  eventName: string;
  city: string;
  institutionalSubtitle: string;
  officialKit: string;
  navItems: NavItem[];
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: EventHighlight[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    pillars: AboutPillar[];
  };
  kitShowcase: {
    title: string;
    subtitle: string;
    modules: KitModule[];
    teamRolesTitle: string;
    teamRolesDescription: string;
    teamRoles: TeamRoleDefinition[];
  };
  participation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ruleHighlight: string;
    steps: ParticipationStep[];
  };
  preRegistrationChecklist: PreRegistrationChecklist;
  faq: FaqItem[];
  contacts: ContactConfig;
}
