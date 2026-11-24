import { GeneralEventInfo } from '../types/event';

export const generalEventInfo: GeneralEventInfo = {
  eventName: 'EducaTech Arapiraca',
  city: 'Arapiraca, AL',
  institutionalSubtitle:
    'Festival de Tecnologia, Inovação, Cultura Digital e Inteligência Artificial da Rede Pública Municipal de Educação de Arapiraca',
  officialKit: 'Kit Maker Megalic',

  navItems: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Arenas', href: '#arenas' },
    { label: 'Alinhamento Curricular', href: '#curriculo' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Participação', href: '#participacao' },
    { label: 'Regulamentos', href: '#regulamentos' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'Parceiros', href: '#parceiros' },
  ],

  hero: {
    badge: 'EducaTech Arapiraca • Currículo em Ação • NITED, CT&ED & SEMED',
    title: 'O FUTURO COMEÇA COM UMA IDEIA. E SE CONSTRÓI COM TECNOLOGIA.',
    subtitle:
      'O Festival de Tecnologia, Inovação, Cultura Digital e Inteligência Artificial da Rede Pública Municipal de Educação de Arapiraca.',
    primaryCta: 'Participar do festival',
    highlights: [
      {
        value: 'Currículo em ação',
        label: 'Estudante no centro',
        detail: 'Soluções reais conectando escola, comunidade e território',
      },
      {
        value: '4 eixos',
        label: 'Alinhamento curricular',
        detail: 'Computação, mundo digital, cultura digital e Letramento em IA (LeIA)',
      },
      {
        value: '16/12/2026',
        label: '8:00 às 17:00',
        detail: 'Centro de Convenções de Arapiraca · Complexo do Lago da Perucaba',
      },
    ],
  },

  about: {
    title: 'Currículo em ação nas escolas de Arapiraca',
    conceptLabel: 'Currículo em ação · Protagonismo estudantil, escola, comunidade e território',
    lead: 'O EducaTech Arapiraca coloca os estudantes no centro da construção de soluções, conectando tecnologia, cultura digital e Inteligência Artificial à realidade da escola e do território.',
    description:
      'Realizado pelo Núcleo de Inovação em Tecnologia Educacional (NITED) e pela Coordenação Tecnológica e Educacional (CT&ED), com apoio da Secretaria Municipal de Educação de Arapiraca (SEMED), o festival materializa o conceito pedagógico de "currículo em ação", integrando ciência, cultura digital e os cinco movimentos do encontro em toda a rede pública municipal.',
    audiences: [
      {
        id: 'estudantes',
        title: 'Estudantes da rede municipal',
        description:
          'Protagonistas do festival, do 4º ano do Ensino Fundamental à EJA, criando projetos, competindo e compartilhando soluções.',
      },
      {
        id: 'educadores',
        title: 'Professores e equipes gestoras',
        description:
          'Orientadores das práticas em sala de aula, mediadores dos eixos curriculares e articuladores das delegações escolares.',
      },
      {
        id: 'familias',
        title: 'Famílias e comunidade escolar',
        description:
          'Público convidado a acompanhar as produções estudantis, valorizar conquistas e dialogar com o cotidiano escolar.',
      },
      {
        id: 'instituicoes',
        title: 'Instituições de ensino e pesquisa',
        description:
          'Parceiras no fomento científico, compartilhamento de conhecimento, palestras e ações formativas.',
      },
      {
        id: 'empresas',
        title: 'Empresas e parceiros de tecnologia',
        description:
          'Integrantes do ecossistema de inovação que apresentam ferramentas, demonstrações e conexões com o mundo digital.',
      },
      {
        id: 'visitantes',
        title: 'Visitantes interessados em inovação',
        description:
          'Comunidade arapiraquense e regional convidada a vivenciar as exposições, palestras e desafios do evento.',
      },
    ],
  },

  participation: {
    title: 'Como participar do festival',
    subtitle:
      'Orientações organizadas para que unidades escolares, professores, equipes e estudantes participem das arenas com clareza.',
    ruleHighlight:
      'Na arena Robotics Challenge, cada escola pode inscrever 1 (uma) equipe de até 3 estudantes por nível escolar, escolhendo uma das duas modalidades exclusivas daquele nível. As orientações específicas das demais arenas constam em suas respectivas páginas e regulamentos.',
    steps: [
      {
        stepNumber: '01',
        title: 'Cadastro da escola',
        description:
          'A direção ou coordenação realiza o cadastro institucional da unidade escolar por meio do formulário oficial.',
      },
      {
        stepNumber: '02',
        title: 'Escolha das arenas e organização',
        description:
          'A escola mobiliza estudantes e professores para as frentes de interesse entre as cinco arenas do festival.',
      },
      {
        stepNumber: '03',
        title: 'Formação das equipes',
        description:
          'Na frente de robótica e nos desafios em grupo, as equipes são formadas respeitando a faixa escolar e os limites de cada regulamento.',
      },
      {
        stepNumber: '04',
        title: 'Seleção das modalidades e projetos',
        description:
          'Definição da modalidade por nível no Robotics Challenge, jogos do E-JEAR, equipes do Ideathon ou projetos da ExpoTech.',
      },
      {
        stepNumber: '05',
        title: 'Inscrição oficial e acompanhamento',
        description:
          'O responsável envia a inscrição nos formulários correspondentes e acompanha comunicados, horários e regulamentos pelo portal.',
      },
    ],
  },

  preRegistrationChecklist: {
    schoolItems: [
      'Identificação completa da unidade escolar da rede pública municipal de Arapiraca.',
      'Nome completo e contato do gestor ou professor responsável pelo acompanhamento das delegações.',
      'Mapeamento das arenas e dos níveis escolares em que a unidade participará.',
    ],
    teamItems: [
      'Conclusão prévia do cadastro institucional da escola (Etapa A).',
      'Definição de até 3 estudantes regularmente matriculados no mesmo nível escolar.',
      'Escolha de uma das duas modalidades disponíveis exclusivamente para aquele nível na arena Robotics Challenge.',
    ],
    guidanceNote:
      'Os links oficiais dos formulários serão publicados diretamente nesta seção pela coordenação do NITED e da CT&ED junto à Secretaria Municipal de Educação de Arapiraca.',
  },

  faq: [
    {
      id: 'o-que-e-educatech',
      question: 'O que é o EducaTech Arapiraca?',
      answer:
        'É o Festival de Tecnologia, Inovação, Cultura Digital e Inteligência Artificial da Rede Pública Municipal de Educação de Arapiraca, estruturado sob o conceito de "currículo em ação" em cinco arenas: Robotics Challenge, E-JEAR, Ideathon, ExpoTech e i9 Stage.',
    },
    {
      id: 'quem-pode-participar',
      question: 'Quem pode participar do festival?',
      answer:
        'Estudantes da rede municipal de Arapiraca (do 4º ano do Ensino Fundamental à EJA), professores, equipes gestoras, além de famílias, comunidade escolar, instituições de ensino e pesquisa, empresas de tecnologia e visitantes na programação aberta.',
    },
    {
      id: 'quais-arenas',
      question: 'Quais são as cinco arenas do evento?',
      answer:
        'São elas: Robotics Challenge (robótica, programação e automação), E-JEAR (Jogos Escolares de Arapiraca em formato eletrônico/digital), Ideathon (hackathon de IA e ODS), ExpoTech (exposição de projetos estudantis, ciência e empresas) e i9 Stage (palestras, talks, demonstrações e pitches).',
    },
    {
      id: 'qual-kit',
      question: 'Qual kit é utilizado nos desafios de robótica?',
      answer:
        'Todas as modalidades da arena Robotics Challenge utilizam exclusivamente o Kit Maker Megalic, garantindo igualdade técnica entre as escolas participantes.',
    },
    {
      id: 'equipes-robotica',
      question: 'Quantos estudantes formam uma equipe no Robotics Challenge?',
      answer:
        'Cada escola pode inscrever 1 (uma) equipe de até 3 estudantes por nível escolar (Nível 1: 4º e 5º anos; Nível 2: 6º e 7º anos; Nível 3: 8º e 9º anos; Nível 4: EJA), escolhendo uma das duas modalidades exclusivas do nível.',
    },
    {
      id: 'data-programacao',
      question: 'Quando acontece o evento?',
      answer:
        'O EducaTech Arapiraca acontece no dia 16 de dezembro de 2026, das 8:00 às 17:00, no Centro de Convenções de Arapiraca (Complexo do Lago da Perucaba).',
    },
    {
      id: 'como-acompanhar',
      question: 'Onde acompanhar regulamentos, jogos do E-JEAR e programação detalhada?',
      answer:
        'Todas as atualizações oficiais sobre horários por data, regulamentos em PDF, títulos do E-JEAR e notícias serão publicadas diretamente neste portal pelas equipes do NITED, da CT&ED e da SEMED Arapiraca.',
    },
  ],

  contacts: {
    email: '',
    phone: '',
    instagramUrl: '',
    websiteUrl: '',
  },
};
