export type CompetitionLevelId = 'nivel-1' | 'nivel-2' | 'nivel-3' | 'nivel-4';

export type ModalityId =
  | 'robo-zero'
  | 'percurso-robo'
  | 'estourar-balao'
  | 'futebol-sumo'
  | 'line-follow'
  | 'desvio-obstaculos';

export type ArenaId =
  | 'robotics-challenge'
  | 'e-jear'
  | 'ideathon'
  | 'expotech'
  | 'i9-stage';

export interface NavItem {
  label: string;
  href: string;
}

export interface EventHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface PublicAudience {
  id: string;
  title: string;
  description: string;
}

export interface FestivalMovement {
  id: string;
  number: string;
  title: string;
  summary: string;
  pedagogicalMeaning: string;
  inPractice: string;
  studentRole: string;
  educatorRole: string;
  relatedArenas: string[];
}

export interface CurriculumAxis {
  id: string;
  code: string;
  title: string;
  summary: string;
  topics: string[];
  isMunicipalInnovation?: boolean;
  badgeLabel?: string;
}

export interface ArenaInfo {
  id: ArenaId;
  name: string;
  tagline: string;
  shortDescription: string;
  highlightMeta: string;
  accentTone: 'lavender' | 'lime' | 'peach' | 'sky' | 'purple';
  presentation: string;
  objectives: string[];
  howItWorks: string;
  audienceAndCategories: string[];
  rulesAndRegulation: string[];
  regulationUrl: string;
  evaluationCriteria: string[];
  scheduleNotes: string;
  reservedGamesSlot?: boolean;
  usesRoboticsBrowser?: boolean;
}

export interface ScheduleActivity {
  time: string;
  title: string;
  arena: string;
  description: string;
}

export interface ScheduleDay {
  id: string;
  dateLabel: string;
  shortLabel: string;
  title: string;
  statusLabel: string;
  summary: string;
  items: ScheduleActivity[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  url?: string;
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
    highlights: EventHighlight[];
  };
  about: {
    title: string;
    conceptLabel: string;
    lead: string;
    description: string;
    audiences: PublicAudience[];
  };
  participation: {
    title: string;
    subtitle: string;
    ruleHighlight: string;
    steps: ParticipationStep[];
  };
  preRegistrationChecklist: PreRegistrationChecklist;
  faq: FaqItem[];
  contacts: ContactConfig;
}
