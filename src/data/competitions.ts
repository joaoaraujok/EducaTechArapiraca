import { CompetitionLevel, Modality, ModalityId } from '../types/event';

export const modalitiesById: Record<ModalityId, Modality> = {
  'robo-zero': {
    id: 'robo-zero',
    name: 'Montagem do Robô Zero',
    shortTag: 'Montagem & Precisão',
    description:
      'Um participante deverá montar corretamente um robô inicial utilizando o kit oficial do evento. A avaliação considera o tempo de montagem e a correção do resultado.',
    objective:
      'Concluir a montagem estrutural e elétrica do Robô Zero com agilidade, seguindo corretamente o padrão técnico do evento.',
    teamRoleNote:
      'A equipe de até 3 estudantes treina em conjunto os passos de montagem; na rodada oficial, o representante designado executa a montagem cronometrada na bancada.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-robo-zero.jpg',
    imageAlt:
      'Fotografia de estúdio dos componentes modulares do kit oficial organizados para montagem do Robô Zero',
  },
  'percurso-robo': {
    id: 'percurso-robo',
    name: 'Percurso com o Robô',
    shortTag: 'Pilotagem Urbana',
    description:
      'Um participante deverá pilotar o Robô Zero por um circuito que simula uma cidade, com semáforos, placas, faixas de pedestres e outros elementos. O objetivo é completar o percurso com precisão.',
    objective:
      'Conduzir o Robô Zero pelo circuito urbano simulado respeitando toda a sinalização e completando o trajeto sem penalidades.',
    teamRoleNote:
      'O trio analisa o traçado, revisa o alinhamento mecânico do robô e define o piloto titular responsável por conduzir a travessia na pista.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-percurso.jpg',
    imageAlt:
      'Fotografia do Robô Zero percorrendo circuito urbano simulado com faixas de pedestres e semáforo',
  },
  'estourar-balao': {
    id: 'estourar-balao',
    name: 'Estourar o Balão',
    shortTag: 'Arena Tática',
    description:
      'Um participante pilota um Robô Zero equipado com uma lança, tentando estourar o balão dos adversários enquanto protege o próprio balão.',
    objective:
      'Utilizar precisão na pilotagem e manobras defensivas na arena para estourar o balão adversário preservando o próprio.',
    teamRoleNote:
      'Os até 3 estudantes calibram a fixação da lança e planejam a estratégia defensiva enquanto o piloto conduz o robô na arena.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-balao.jpg',
    imageAlt: 'Fotografia de estúdio de robô educacional equipado com lança frontal em arena escura',
  },
  'futebol-sumo': {
    id: 'futebol-sumo',
    name: 'Futebol de Robôs / Sumô',
    shortTag: 'Disputa em Arena',
    description:
      'No futebol, os robôs disputam partidas com o objetivo de conduzir uma bola até o gol adversário. No sumô, os robôs tentam empurrar o oponente para fora de uma arena delimitada.',
    objective:
      'Demonstrar controle, tração e estratégia para marcar gols no Futebol de Robôs ou deslocar o oponente para fora do ringue no Sumô.',
    teamRoleNote:
      'Modalidade com duas frentes de arena: a equipe prepara o robô para as partidas de Futebol e para os embates de Sumô conforme o regulamento do nível.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-sumo.jpg',
    imageAlt: 'Fotografia de dois robôs educacionais posicionados em arena circular de disputa',
  },
  'line-follow': {
    id: 'line-follow',
    name: 'Line-Follow (Seguidor de Linha)',
    shortTag: 'Robótica Autônoma',
    description:
      'A equipe desenvolve um robô autônomo capaz de percorrer um circuito seguindo uma linha demarcada no solo, utilizando sensores para identificar o trajeto.',
    objective:
      'Programar e calibrar sensores ópticos no robô para percorrer todo o trajeto demarcado de forma autônoma e contínua.',
    teamRoleNote:
      'Os até 3 integrantes colaboram diretamente na montagem dos sensores, escrita do código e calibração na pista antes da largada autônoma.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-line.jpg',
    imageAlt: 'Fotografia macro de robô autônomo seguindo linha branca demarcada em pista escura',
  },
  'desvio-obstaculos': {
    id: 'desvio-obstaculos',
    name: 'Desvio de Obstáculos / Sensor',
    shortTag: 'Sensores & Autonomia',
    description:
      'A equipe desenvolve um robô capaz de detectar obstáculos por meio de sensores de presença e realizar desvios automaticamente.',
    objective:
      'Implementar leitura contínua de sensores de presença e algoritmos de tomada de decisão para contornar obstáculos sem colisões.',
    teamRoleNote:
      'O trio divide o posicionamento dos sensores de presença, o ajuste dos limiares de distância e os testes iterativos de desvio automático.',
    kitLabel: 'Kit oficial do evento',
    imageUrl: '/images/mod-obstaculos.jpg',
    imageAlt:
      'Fotografia de robô autônomo com sensores ultrassônicos contornando blocos geométricos em pista escura',
  },
};

export const competitionLevels: CompetitionLevel[] = [
  {
    id: 'nivel-1',
    code: 'Nível 1',
    title: 'Nível 1 (4º e 5º anos)',
    gradeRange: '4º e 5º anos do Ensino Fundamental',
    summary: 'Introdução à montagem estrutural e à pilotagem com consciência espacial.',
    maxStudentsPerTeam: 3,
    modalities: ['robo-zero', 'percurso-robo'],
  },
  {
    id: 'nivel-2',
    code: 'Nível 2',
    title: 'Nível 2 (6º e 7º anos)',
    gradeRange: '6º e 7º anos do Ensino Fundamental',
    summary: 'Desafios de agilidade, coordenação tática e estratégia em arena.',
    maxStudentsPerTeam: 3,
    modalities: ['estourar-balao', 'futebol-sumo'],
  },
  {
    id: 'nivel-3',
    code: 'Nível 3',
    title: 'Nível 3 (8º e 9º anos)',
    gradeRange: '8º e 9º anos do Ensino Fundamental',
    summary: 'Robótica autônoma baseada em sensores, lógica e calibração.',
    maxStudentsPerTeam: 3,
    modalities: ['line-follow', 'desvio-obstaculos'],
  },
  {
    id: 'nivel-4',
    code: 'Nível 4',
    title: 'Nível 4 (EJA)',
    gradeRange: 'Educação de Jovens e Adultos (EJA)',
    summary: 'Protagonismo técnico em montagem rápida e pilotagem estratégica em arena.',
    maxStudentsPerTeam: 3,
    modalities: ['estourar-balao', 'robo-zero'],
  },
];
