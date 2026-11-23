import { GeneralEventInfo } from '../types/event';

export const generalEventInfo: GeneralEventInfo = {
  eventName: 'EducaTech Arapiraca',
  city: 'Arapiraca, AL',
  institutionalSubtitle:
    'Encontro Municipal de Educação, Inovação, Tecnologia e Robótica Educacional',
  officialKit: 'Kit Maker Megalic',

  navItems: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Competições', href: '#competicoes' },
    { label: 'Como Participar', href: '#como-participar' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    badge: 'EducaTech Arapiraca • NITED & CT&ED • SEMED Arapiraca',
    title: 'O FUTURO COMEÇA COM UMA IDEIA. E SE CONSTRÓI COM TECNOLOGIA.',
    subtitle:
      'Um encontro de criatividade, conhecimento e robótica educacional. Estudantes transformando ideias em movimento.',
    primaryCta: 'Inscreva sua escola',
    secondaryCta: 'Conheça as competições',
    highlights: [
      {
        value: '4 níveis',
        label: 'Do 4º ano à EJA',
        detail: 'Etapas organizadas por faixa escolar',
      },
      {
        value: '6 modalidades',
        label: 'Desafios práticos',
        detail: 'Montagem, pilotagem e robôs autônomos',
      },
      {
        value: '3 estudantes',
        label: 'Por equipe',
        detail: 'Uma equipe por escola em cada nível',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre o evento',
    title: 'Inovação e protagonismo estudantil nas escolas de Arapiraca',
    lead: 'O EducaTech Arapiraca reúne estudantes da rede de ensino em torno de desafios reais de ciência, tecnologia e robótica educacional.',
    description:
      'Realizado pelo Núcleo de Inovação em Tecnologia Educacional (NITED) e pela Coordenação Tecnológica e Educacional (CT&ED), com apoio da Secretaria Municipal de Educação de Arapiraca, o evento estimula a robótica educacional em sala de aula utilizando o Kit Maker Megalic como plataforma comum em todas as competições.',
    pillars: [
      {
        id: 'aprendizagem-pratica',
        title: 'Aprendizagem prática',
        description:
          'Aplicação direta de conceitos de mecânica, eletrônica e programação em protótipos construídos pelos próprios estudantes.',
        iconName: 'wrench',
      },
      {
        id: 'criatividade-logica',
        title: 'Criatividade e pensamento lógico',
        description:
          'Desenvolvimento de raciocínio estruturado, algoritmos de controle e estratégias inteligentes para cada desafio.',
        iconName: 'lightbulb',
      },
      {
        id: 'trabalho-equipe',
        title: 'Trabalho em equipe',
        description:
          'Colaboração entre até três estudantes por equipe, integrando planejamento, montagem, calibração e pilotagem.',
        iconName: 'users',
      },
      {
        id: 'resolucao-problemas',
        title: 'Resolução de problemas',
        description:
          'Testes iterativos em pista e arena que capacitam os participantes a diagnosticar falhas e otimizar soluções.',
        iconName: 'puzzle',
      },
      {
        id: 'inovacao-educacao',
        title: 'Inovação na educação',
        description:
          'Fortalecimento das práticas pedagógicas contemporâneas e democratização do acesso à tecnologia educacional na rede pública.',
        iconName: 'sparkles',
      },
    ],
  },

  kitShowcase: {
    title: 'Robô Zero · Arquitetura Modular',
    subtitle:
      'Todas as unidades escolares competem em igualdade de condições com a mesma plataforma modular de hardware educacional.',
    modules: [
      {
        code: 'M1',
        title: 'Chassi Estrutural & Robô Zero',
        description:
          'Base mecânica modular para montagem rápida, suporte de bateria e acoplamento de implementos de arena.',
      },
      {
        code: 'M2',
        title: 'Placa Controladora Lógica',
        description:
          'Unidade programável que coordena acionamento de motores, leitura de entradas digitais e rotinas autônomas.',
      },
      {
        code: 'M3',
        title: 'Sensores Ópticos e de Presença',
        description:
          'Conjunto de sensores para identificação de linha no solo e detecção de obstáculos em pista.',
      },
      {
        code: 'M4',
        title: 'Motores, Rodas e Tração',
        description:
          'Atuadores de precisão calibrados para manobras urbanas, percursos de velocidade e disputas em arena.',
      },
    ],
    teamRolesTitle: 'Como atuam os 3 estudantes da equipe',
    teamRolesDescription:
      'Mesmo nas provas em que apenas um integrante opera ou monta na bancada, a preparação e a estratégia acontecem em trio.',
    teamRoles: [
      {
        role: 'Engenharia & Montagem',
        focus: 'Estrutura do chassi, fixação mecânica e conferência elétrica do Robô Zero.',
      },
      {
        role: 'Lógica & Calibração',
        focus: 'Programação, leitura de sensores e ajuste de resposta para cada pista.',
      },
      {
        role: 'Operação & Arena',
        focus: 'Pilotagem de precisão, leitura tática do percurso e tomadas de decisão em disputa.',
      },
    ],
  },

  participation: {
    eyebrow: 'Como participar',
    title: 'Passo a passo para a participação da sua escola',
    subtitle:
      'O processo de inscrição foi estruturado em etapas claras para que as unidades escolares organizem suas equipes com segurança.',
    ruleHighlight:
      'Regra de participação: cada escola pode inscrever 1 (uma) equipe de até 3 estudantes por nível escolar, escolhendo uma das duas modalidades disponíveis naquele nível.',
    steps: [
      {
        stepNumber: '01',
        title: 'Cadastro da escola',
        description: 'A escola realiza seu cadastro institucional por meio do formulário oficial.',
      },
      {
        stepNumber: '02',
        title: 'Organização das equipes',
        description:
          'A escola organiza as equipes de acordo com os níveis escolares em que deseja participar.',
      },
      {
        stepNumber: '03',
        title: 'Formação por nível',
        description:
          'Cada equipe é formada por até três estudantes matriculados no respectivo nível escolar.',
      },
      {
        stepNumber: '04',
        title: 'Escolha da modalidade',
        description:
          'A equipe escolhe uma das duas modalidades disponíveis exclusivamente para o seu nível.',
      },
      {
        stepNumber: '05',
        title: 'Inscrição oficial',
        description:
          'O responsável realiza a inscrição da equipe pelo formulário correspondente ao nível.',
      },
    ],
  },

  preRegistrationChecklist: {
    schoolItems: [
      'Identificação completa da unidade escolar da rede participante.',
      'Nome completo e contato do gestor ou professor responsável pelo acompanhamento.',
      'Mapeamento de em quais dos quatro níveis (4º–5º, 6º–7º, 8º–9º ou EJA) a escola terá equipe.',
    ],
    teamItems: [
      'Conclusão prévia do cadastro institucional da escola (Etapa A).',
      'Definição de até 3 estudantes regularmente matriculados no mesmo nível escolar.',
      'Escolha de uma das duas modalidades disponíveis exclusivamente para aquele nível.',
    ],
    guidanceNote:
      'Os links oficiais dos formulários serão publicados diretamente nesta seção pela coordenação do NITED e da CT&ED junto à Secretaria Municipal de Educação de Arapiraca.',
  },

  faq: [
    {
      id: 'quem-pode-participar',
      question: 'Quem pode participar?',
      answer:
        'Podem participar estudantes matriculados nas escolas participantes da rede de ensino, distribuídos nos quatro níveis do evento: Nível 1 (4º e 5º anos), Nível 2 (6º e 7º anos), Nível 3 (8º e 9º anos) e Nível 4 (Educação de Jovens e Adultos, EJA).',
    },
    {
      id: 'quantos-estudantes',
      question: 'Quantos estudantes podem formar uma equipe?',
      answer:
        'Cada equipe pode ser formada por até 3 (três) estudantes regularmente matriculados no nível escolar correspondente à inscrição.',
    },
    {
      id: 'mais-de-um-nivel',
      question: 'Uma escola pode participar de mais de um nível?',
      answer:
        'Sim. Uma mesma escola pode participar dos quatro níveis do EducaTech Arapiraca, desde que respeite o limite de 1 (uma) equipe por nível, escolhendo uma modalidade disponível naquele nível.',
    },
    {
      id: 'quais-modalidades',
      question: 'Quais modalidades estarão disponíveis?',
      answer:
        'São seis modalidades distribuídas por nível: Montagem do Robô Zero e Percurso com o Robô (Nível 1); Estourar o Balão e Futebol de Robôs / Sumô (Nível 2); Line-Follow e Desvio de Obstáculos / Sensor (Nível 3); Estourar o Balão e Montagem do Robô Zero (Nível 4, EJA).',
    },
    {
      id: 'qual-kit',
      question: 'Qual kit será utilizado?',
      answer:
        'Todas as modalidades do EducaTech Arapiraca utilizam exclusivamente o Kit Maker Megalic.',
    },
    {
      id: 'como-realizar-inscricao',
      question: 'Como realizar a inscrição?',
      answer:
        'Primeiro, a unidade escolar realiza seu cadastro geral no bloco Inscrição da escola (Etapa A). Em seguida, o responsável preenche o formulário de inscrição da equipe correspondente ao nível desejado na Etapa B.',
    },
    {
      id: 'como-acompanhar',
      question: 'Como acompanhar as informações do evento?',
      answer:
        'Todas as atualizações oficiais sobre data, horário, local e links de inscrição serão publicadas diretamente nesta página oficial e comunicadas pelas equipes do NITED, da CT&ED e da Secretaria Municipal de Educação de Arapiraca.',
    },
  ],

  contacts: {
    email: '',
    phone: '',
    instagramUrl: '',
    websiteUrl: '',
  },
};
