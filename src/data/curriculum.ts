import { CurriculumAxis, FestivalMovement } from '../types/event';

export const festivalMovements: FestivalMovement[] = [
  {
    id: 'explorar',
    number: '01',
    title: 'Explorar',
    summary: 'Investigar desafios reais da escola, da comunidade e do território com olhar científico e digital.',
    pedagogicalMeaning:
      'No movimento Explorar, o estudante deixa de ser apenas receptor de conteúdo para atuar como pesquisador do próprio cotidiano escolar e territorial.',
    inPractice:
      'As turmas levantam problemas concretos de Arapiraca, analisam referências digitais, observam dados e formulam perguntas investigativas alinhadas ao currículo.',
    studentRole: 'Observar contextos locais, pesquisar informações com criticidade e levantar hipóteses.',
    educatorRole: 'Mediar a escuta ativa, conectar o tema às habilidades curriculares e orientar a curadoria de fontes.',
    relatedArenas: ['ExpoTech', 'Ideathon', 'i9 Stage'],
  },
  {
    id: 'criar',
    number: '02',
    title: 'Criar',
    summary: 'Projetar soluções autênticas combinando algoritmos, design digital, IA responsável e engenharia.',
    pedagogicalMeaning:
      'Criar materializa o conceito de "currículo em ação": conhecimentos de sala de aula ganham forma em protótipos, narrativas digitais e códigos.',
    inPractice:
      'Em equipe, os estudantes desenham fluxos lógicos, desenvolvem ideias assistidas por IA crítica, montam robôs e estruturam apresentações.',
    studentRole: 'Colaborar em equipe, dividir papéis e materializar ideias usando tecnologia e criatividade.',
    educatorRole: 'Apoiar o planejamento iterativo, incentivar autoria e promover uso ético e seguro de ferramentas digitais.',
    relatedArenas: ['Ideathon', 'Robotics Challenge', 'ExpoTech'],
  },
  {
    id: 'testar',
    number: '03',
    title: 'Testar',
    summary: 'Validar protótipos, calibrar sensores, revisar estratégias e aprimorar ideias a partir de evidências.',
    pedagogicalMeaning:
      'Testar ressignifica o erro como parte natural da aprendizagem: cada ajuste técnico fortalece o raciocínio lógico e a autonomia.',
    inPractice:
      'Antes das apresentações e disputas oficiais, os participantes simulam percursos, avaliam o desempenho de jogos/estratégias e refinam seus projetos.',
    studentRole: 'Diagnosticar falhas, interpretar resultados de testes e propor melhorias objetivas.',
    educatorRole: 'Estimular reflexão sobre causa e efeito, registrar avanços e conduzir devolutivas formativas.',
    relatedArenas: ['Robotics Challenge', 'E-JEAR', 'Ideathon'],
  },
  {
    id: 'competir',
    number: '04',
    title: 'Competir',
    summary: 'Viver desafios saudáveis, trabalho em equipe, respeito às regras e fair play nas arenas da imersão.',
    pedagogicalMeaning:
      'Na perspectiva educacional, competir é compartilhar conquistas coletivas, lidar com pressão com equilíbrio e celebrar a superação de todas as escolas.',
    inPractice:
      'Estudantes representam suas unidades escolares nos circuitos de robótica, partidas estratégicas do E-JEAR e bancas de pitch.',
    studentRole: 'Cumprir combinados, atuar com espírito esportivo e apoiar colegas durante as rodadas.',
    educatorRole: 'Valorizar o processo formativo acima do placar e fortalecer a integração entre as unidades escolares.',
    relatedArenas: ['Robotics Challenge', 'E-JEAR', 'Ideathon'],
  },
  {
    id: 'transformar',
    number: '05',
    title: 'Transformar',
    summary: 'Compartilhar soluções com a rede municipal e gerar impacto positivo duradouro nas escolas e na cidade.',
    pedagogicalMeaning:
      'Transformar fecha o ciclo da imersão levando as aprendizagens de volta ao cotidiano escolar para inspirar novas práticas durante todo o ano letivo.',
    inPractice:
      'Projetos expostos na ExpoTech, ideias do Ideathon e diálogos do i9 Stage multiplicam boas práticas para famílias, gestores e comunidade.',
    studentRole: 'Comunicar resultados com clareza e atuar como agente de inovação na própria escola.',
    educatorRole: 'Sistematizar registros, incorporar experiências ao plano pedagógico e fomentar a continuidade.',
    relatedArenas: ['ExpoTech', 'i9 Stage', 'Ideathon'],
  },
];

export const curriculumAxes: CurriculumAxis[] = [
  {
    id: 'pensamento-computacional',
    code: 'Eixo 01',
    title: 'Pensamento Computacional',
    summary: 'Algoritmos, padrões, abstração e programação.',
    topics: ['Algoritmos e lógica', 'Reconhecimento de padrões', 'Abstração e decomposição', 'Programação aplicada'],
  },
  {
    id: 'mundo-digital',
    code: 'Eixo 02',
    title: 'Mundo Digital',
    summary: 'Dados, dispositivos, sistemas, redes e automação.',
    topics: ['Dados e representação', 'Dispositivos e arquitetura', 'Sistemas e redes', 'Automação e sensores'],
  },
  {
    id: 'cultura-digital',
    code: 'Eixo 03',
    title: 'Cultura Digital',
    summary: 'Cidadania, ética, segurança e educação midiática.',
    topics: ['Cidadania digital', 'Ética e convivência', 'Segurança de dados', 'Educação midiática'],
  },
  {
    id: 'letramento-ia',
    code: 'Eixo 04',
    title: 'Letramento em IA (LeIA)',
    summary: 'Compreensão, uso crítico e criação responsável com Inteligência Artificial.',
    topics: [
      'Como sistemas de IA funcionam',
      'Leitura crítica e verificação',
      'Ética e autoria estudantil',
      'Criação responsável com IA',
    ],
    isMunicipalInnovation: true,
  },
];
