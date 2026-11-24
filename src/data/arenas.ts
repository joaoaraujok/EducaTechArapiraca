import { ArenaInfo } from '../types/event';

export const festivalArenas: ArenaInfo[] = [
  {
    id: 'robotics-challenge',
    name: 'Robotics Challenge',
    tagline: 'Robótica, programação e automação',
    shortDescription:
      'Desafios práticos de montagem, pilotagem urbana, disputas em arena e robótica autônoma com equipes organizadas por nível escolar.',
    highlightMeta: '4 níveis · 6 modalidades',
    accentTone: 'purple',
    presentation:
      'O Robotics Challenge reúne equipes das unidades escolares da rede municipal em desafios progressivos de engenharia, lógica e controle, articulando teoria curricular e experimentação prática.',
    objectives: [
      'Estimular raciocínio lógico, resolução de problemas e trabalho colaborativo em equipes de até 3 estudantes.',
      'Garantir equidade técnica com uso exclusivo da plataforma padronizada do evento (Kit Maker Megalic).',
      'Promover o protagonismo estudantil do 4º ano do Ensino Fundamental à EJA em pistas e arenas oficiais.',
    ],
    howItWorks:
      'Cada unidade escolar organiza até 1 equipe de até 3 estudantes por nível escolar, escolhendo uma das duas modalidades exclusivas daquele nível. Todas as provas acontecem em bancadas, pistas e arenas oficiais do festival.',
    audienceAndCategories: [
      'Nível 1: 4º e 5º anos do Ensino Fundamental (Montagem do Robô Zero ou Percurso com o Robô).',
      'Nível 2: 6º e 7º anos do Ensino Fundamental (Estourar o Balão ou Futebol de Robôs / Sumô).',
      'Nível 3: 8º e 9º anos do Ensino Fundamental (Line-Follow ou Desvio de Obstáculos / Sensor).',
      'Nível 4: Educação de Jovens e Adultos — EJA (Estourar o Balão ou Montagem do Robô Zero).',
    ],
    rulesAndRegulation: [
      'Máximo de 1 equipe de até 3 estudantes regularmente matriculados por nível escolar em cada escola.',
      'Cadastro prévio obrigatório da escola (Etapa A) antes da inscrição das equipes por nível (Etapa B).',
      'Utilização padronizada dos módulos oficiais previstos no edital da competição.',
    ],
    regulationUrl: '',
    evaluationCriteria: [
      'Correção técnica da montagem e integridade elétrica/estrutural do protótipo.',
      'Precisão, cumprimento do traçado/regras de arena e autonomia dos sensores quando aplicável.',
      'Tempo de execução e postura colaborativa da equipe durante a bateria.',
    ],
    scheduleNotes:
      'As baterias classificatórias e rodadas finais acontecerão no dia 16 de dezembro de 2026, com grade horária a ser publicada pela coordenação.',
    usesRoboticsBrowser: true,
  },
  {
    id: 'e-jear',
    name: 'E-JEAR',
    tagline: 'Jogos digitais, estratégia e cultura gamer educativa',
    shortDescription:
      'Versão eletrônica e digital dos Jogos Escolares de Arapiraca, reunindo competições em jogos online, raciocínio estratégico e convivência digital.',
    highlightMeta: 'Jogos Escolares Digitais · Arapiraca',
    accentTone: 'lime',
    presentation:
      'O E-JEAR integra os Jogos Escolares de Arapiraca ao universo dos jogos digitais educativos e competitivos, valorizando planejamento tático, trabalho em equipe, comunicação saudável e cidadania digital.',
    objectives: [
      'Conectar a cultura digital dos estudantes a práticas saudáveis de estratégia, colaboração e ética online.',
      'Ampliar a participação estudantil por meio de disputas digitais organizadas entre unidades da rede municipal.',
      'Promover o espírito esportivo, o respeito às regras e a convivência responsável em ambientes competitivos.',
    ],
    howItWorks:
      'As equipes ou representantes inscritos pelas escolas disputam chaves eliminatórias conforme as regras específicas de cada título selecionado para esta edição.',
    audienceAndCategories: [
      'Estudantes regularmente matriculados na rede pública municipal de Arapiraca, conforme faixas definidas em regulamento.',
      'Categorias organizadas por modalidade/jogo oficial da edição.',
    ],
    rulesAndRegulation: [
      'Respeito integral ao código de conduta esportiva e ética digital durante toda a competição.',
      'Inscrição vinculada à unidade escolar participante dentro dos prazos definidos pela coordenação.',
      'Regras técnicas específicas por título serão publicadas no regulamento oficial do E-JEAR.',
    ],
    regulationUrl: '',
    evaluationCriteria: [
      'Desempenho nas partidas e pontuação segundo o formato oficial de cada modalidade.',
      'Cumprimento rigoroso das regras de fair play, pontualidade e conduta em equipe.',
    ],
    scheduleNotes:
      'O calendário das chaves e finais presenciais do dia 16 de dezembro de 2026 será publicado nesta área.',
    reservedGamesSlot: true,
  },
  {
    id: 'ideathon',
    name: 'Ideathon',
    tagline: 'Hackathon de IA e ODS para soluções reais',
    shortDescription:
      'Maratona criativa onde estudantes aplicam Inteligência Artificial responsável e os Objetivos de Desenvolvimento Sustentável para resolver problemas do território.',
    highlightMeta: 'IA responsável · ODS · Território',
    accentTone: 'lavender',
    presentation:
      'O Ideathon desafia grupos de estudantes a investigar demandas reais da escola, da comunidade e de Arapiraca, construindo propostas inovadoras apoiadas pelo Letramento em IA (LeIA) e alinhadas aos ODS.',
    objectives: [
      'Aplicar o eixo de Letramento em IA (LeIA) de maneira crítica, ética e voltada ao bem comum.',
      'Desenvolver pesquisa territorial, empatia, modelagem de soluções e comunicação em formato de pitch.',
      'Conectar desafios escolares locais às metas dos Objetivos de Desenvolvimento Sustentável (ODS).',
    ],
    howItWorks:
      'As equipes passam por etapas de imersão no problema, ideação, prototipação conceitual com apoio de mentores e apresentação final (pitch) diante de banca avaliadora.',
    audienceAndCategories: [
      'Equipes de estudantes da rede pública municipal acompanhadas por professor orientador.',
      'Frentes temáticas inspiradas nos Objetivos de Desenvolvimento Sustentável e nos desafios escolares.',
    ],
    rulesAndRegulation: [
      'As propostas devem preservar a autoria estudantil e indicar de forma transparente eventuais usos de IA.',
      'Conformidade com princípios de segurança digital, privacidade e ética educacional.',
      'Limites de equipe, tempo de pitch e entregas serão detalhados no regulamento oficial.',
    ],
    regulationUrl: '',
    evaluationCriteria: [
      'Relevância do problema local identificado e alinhamento aos Objetivos de Desenvolvimento Sustentável.',
      'Criatividade, viabilidade de aplicação na escola/comunidade e uso crítico da Inteligência Artificial.',
      'Clareza na apresentação, argumentação e trabalho colaborativo da equipe.',
    ],
    scheduleNotes:
      'As janelas de desafio, mentorias e apresentações finais no dia 16 de dezembro de 2026 serão divulgadas em breve.',
  },
  {
    id: 'expotech',
    name: 'ExpoTech',
    tagline: 'Projetos estudantis, ciência e empresas de tecnologia',
    shortDescription:
      'Espaço expositivo para socialização de projetos das escolas municipais, experimentos científicos, instituições de pesquisa e parceiros de inovação.',
    highlightMeta: 'Mostra escolar · Ciência · Tecnologia',
    accentTone: 'peach',
    presentation:
      'A ExpoTech materializa o encontro entre o currículo escolar, a comunidade e o ecossistema de inovação, exibindo iniciativas desenvolvidas nas escolas ao lado de experiências científicas e parceiros tecnológicos.',
    objectives: [
      'Valorizar o protagonismo das escolas municipais por meio da exposição pública de seus projetos.',
      'Aproximar estudantes, famílias, instituições de ensino e empresas em um ambiente de troca de saberes.',
      'Dar visibilidade às aprendizagens construídas ao longo do ano nos quatro eixos do currículo digital.',
    ],
    howItWorks:
      'A arena organiza estandes e ilhas demonstrativas abertas à visitação do público, permitindo interação direta com protótipos, experimentos, produções digitais e demonstrações científicas.',
    audienceAndCategories: [
      'Projetos desenvolvidos por estudantes e professores das unidades escolares de Arapiraca.',
      'Instituições de ensino e pesquisa, parceiros institucionais e empresas de tecnologia convidadas.',
      'Aberta à visitação de famílias, comunidade escolar e visitantes interessados em inovação.',
    ],
    rulesAndRegulation: [
      'Submissão e confirmação dos projetos conforme orientações e critérios de segurança do espaço expositivo.',
      'Presença dos estudantes expositores e professor responsável durante o turno de visitação designado.',
      'Orientações completas de montagem de estande e credenciamento constarão no regulamento específico.',
    ],
    regulationUrl: '',
    evaluationCriteria: [
      'Qualidade pedagógica, alinhamento ao currículo municipal e clareza na apresentação ao público.',
      'Criatividade, aplicabilidade e organização da demonstração prática no estande.',
    ],
    scheduleNotes:
      'Os horários de montagem, visitação escolar e mostra aberta no dia 16 de dezembro de 2026 serão detalhados na programação.',
  },
  {
    id: 'i9-stage',
    name: 'i9 Stage',
    tagline: 'Palestras, talks, demonstrações e pitches',
    shortDescription:
      'Palco central de diálogos inspiradores sobre educação, ciência, inteligência artificial, cultura digital e inovação pública.',
    highlightMeta: 'Talks · Demonstrações · Pitches',
    accentTone: 'sky',
    presentation:
      'O i9 Stage concentra a programação de palco do festival, reunindo educadores, pesquisadores, especialistas, parceiros e estudantes em conversas curtas, demonstrações ao vivo e apresentações de destaque.',
    objectives: [
      'Promover formação continuada e troca de referências contemporâneas para educadores e gestores.',
      'Inspirar estudantes e famílias com temas de ciência, carreira tecnológica e cidadania digital.',
      'Abrir espaço para visibilidade de boas práticas escolares e apresentações de pitches do festival.',
    ],
    howItWorks:
      'Blocos temáticos sequenciais ao longo do evento com palestras rápidas, painéis dialogados, demonstrações práticas de tecnologia educacional e apresentações estudantis.',
    audienceAndCategories: [
      'Professores, equipes gestoras, estudantes, famílias, pesquisadores e visitantes em geral.',
      'Acesso aberto aos inscritos e visitantes conforme a capacidade do auditório.',
    ],
    rulesAndRegulation: [
      'Programação de palco conduzida em horários definidos pela curadoria do NITED e da CT&ED.',
      'Orientações para submissão de comunicações ou pitches serão disponibilizadas junto à programação oficial.',
    ],
    regulationUrl: '',
    evaluationCriteria: [
      'Curadoria alinhada aos eixos de tecnologia, inovação pedagógica, cultura digital e Letramento em IA (LeIA).',
    ],
    scheduleNotes:
      'A grade completa de palestrantes, painéis e horários do palco será publicada nesta página.',
  },
];
