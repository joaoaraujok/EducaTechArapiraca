# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Público decisor e operador primário**: Diretores, coordenadores pedagógicos e professores responsáveis das unidades escolares da rede municipal de ensino de Arapiraca — AL, encarregados de realizar o credenciamento institucional da escola, organizar as equipes por nível e submeter as inscrições oficiais.
- **Público consultivo secundário**: Estudantes matriculados do 4º ano do Ensino Fundamental à Educação de Jovens e Adultos (EJA), que consultam a página para conhecer as modalidades, os objetivos dos desafios e as regras de formação de equipe.

## Product Purpose

Landing page e portal institucional oficial do **EducaTech Arapiraca**, evento municipal de educação, inovação, tecnologia e competições de robótica educacional.

Seu propósito é apresentar com clareza institucional os objetivos pedagógicos do encontro, detalhar as regras de participação e as modalidades exclusivas de cada nível escolar, divulgar informações oficiais de data e localização e conduzir os responsáveis escolares ao fluxo de inscrição em duas etapas via Google Forms (cadastro da unidade escolar e inscrição das equipes por nível).

## Positioning

Iniciativa pública oficial de robótica educacional da rede municipal de Arapiraca, realizada conjuntamente pelo **NITED** (Núcleo de Inovação em Tecnologia Educacional) e pela **CT&ED** (Coordenação Tecnológica e Educacional), com apoio institucional da **Secretaria Municipal de Educação de Arapiraca (SEMED)**.

Diferencia-se por articular quatro níveis da educação básica pública (do 4º ano à EJA) sob uma plataforma de hardware única e padronizada em todas as disputas — o **Kit Maker Megalic** — garantindo equidade técnica entre todas as unidades escolares participantes.

## Operating Context

- As escolas participantes organizam internamente suas equipes respeitando o limite de **1 (uma) equipe de até 3 (três) estudantes por nível escolar**, escolhendo uma das duas modalidades disponíveis naquele nível:
  - **Nível 1 (4º e 5º anos)**: *Montagem do Robô Zero* ou *Percurso com o Robô*.
  - **Nível 2 (6º e 7º anos)**: *Estourar o Balão* ou *Futebol de Robôs / Sumô*.
  - **Nível 3 (8º e 9º anos)**: *Line-Follow (Seguidor de Linha)* ou *Desvio de Obstáculos / Sensor*.
  - **Nível 4 (EJA — Educação de Jovens e Adultos)**: *Estourar o Balão* ou *Montagem do Robô Zero*.
- Todas as modalidades utilizam o **Kit Maker Megalic** (e o protótipo base *Robô Zero* nas provas de montagem, percurso e arena tática).
- O fluxo de credenciamento ocorre em 5 etapas sequenciais:
  1. Cadastro institucional da escola.
  2. Organização das equipes na unidade escolar.
  3. Formação de cada equipe com até 3 estudantes do respectivo nível.
  4. Escolha de uma das duas modalidades disponíveis no nível.
  5. Inscrição oficial realizada pelo responsável no formulário correspondente.

## Capabilities and Constraints

- **Escopo confirmado**: Aplicação web de página única com navegação por âncoras (`#inicio`, `#sobre`, `#competicoes`, `#como-participar`, `#inscricoes`, `#localizacao`, `#parceiros`, `#faq`), filtro interativo de modalidades por nível escolar, seção de inscrições em dois blocos (escola e equipes por nível), mapa incorporado do Google Maps e FAQ em acordeão.
- **Sem backend próprio**: As inscrições são processadas externamente via Google Forms, com links centralizados em `src/data/forms.ts`.
- **Separação de dados configuráveis**: Dados editáveis do evento residem em `src/data/general.ts`, `src/data/competitions.ts`, `src/data/forms.ts`, `src/data/location.ts` e `src/data/partners.ts`.
- **Restrição estrita contra fabricação de dados**: Datas, horários, nome do local, endereço completo, URLs de formulários Google Forms, logotipos institucionais e canais de contato nunca devem ser inventados; enquanto permanecem em aberto (strings vazias `""` nos arquivos de configuração), a interface sinaliza de forma transparente que a informação oficial será divulgada/configurada.
- **Fatos do evento ainda em aberto (aguardando definição oficial da organização)**:
  - URLs oficiais dos 5 formulários Google Forms: 1 de cadastro escolar e 4 de equipes por nível (`src/data/forms.ts`).
  - Arquivos oficiais de logotipo do NITED, da CT&ED e da Secretaria Municipal de Educação de Arapiraca (`src/data/partners.ts`).
  - Canais diretos de contato (e-mail, telefone, Instagram e portal institucional em `src/data/general.ts`).
  - *(Confirmados em `src/data/location.ts`: data `16/12/2026`, horário `8:00 às 17:00`, local `Centro de Convenções de Arapiraca` no Complexo do Lago da Perucaba, Arapiraca - AL, além do mapa e link oficial do Google Maps.)*

## Brand Commitments

- **Nome oficial**: EducaTech Arapiraca.
- **Slogan central**: *"O FUTURO COMEÇA COM UMA IDEIA. E SE CONSTRÓI COM TECNOLOGIA."*
- **Subtítulo oficial**: *"Um encontro de criatividade, conhecimento e robótica educacional. Estudantes transformando ideias em movimento."*
- **Diretrizes vinculantes**: Base clara e luminosa (branco-lavanda `#F4F2FA` e branco `#FFFFFF`) com color-blocking harmônico de capítulos (lavanda, pêssego, azul-céu, lima e blocos em carbono), mantendo o roxo como assinatura visual central; estética cinética e editorial inspirada em `squadeasy.com` adaptada ao contexto escolar público em coluna única; proibição de aparência excessivamente gamer, emojis como elementos de UI ou padrões genéricos de templates SaaS/IA; destaque institucional adequado ao NITED e à CT&ED como realizadores e à Secretaria Municipal de Educação de Arapiraca como apoiadora.

## Evidence on Hand

- Textos institucionais, regras de participação, os 5 pilares pedagógicos (*Aprendizagem prática*, *Criatividade e pensamento lógico*, *Trabalho em equipe*, *Resolução de problemas*, *Inovação na educação*), as 5 etapas de participação e as 7 perguntas do FAQ em `src/data/general.ts`.
- Descrições oficiais e objetivos das 6 modalidades e mapeamento estrito dos 4 níveis em `src/data/competitions.ts`.
- Conjunto de 9 fotografias editoriais de robótica educacional e hardware em estúdio escuro em `public/images/` (`hero-stage.jpg`, `about-workshop.jpg`, `about-sensors.jpg`, `mod-robo-zero.jpg`, `mod-percurso.jpg`, `mod-balao.jpg`, `mod-sumo.jpg`, `mod-line.jpg`, `mod-obstaculos.jpg`).
- **Ausências declaradas**: logotipos oficiais das instituições realizadoras/apoiadora, links ativos do Google Forms, canais diretos de contato e depoimentos ou histórico de edições anteriores (não fabricar).

## Product Principles

1. **Veracidade institucional acima de preenchimento visual**: Nenhum dado ausente (data, endereço, link de formulário ou logotipo) é simulado com valores fictícios; estados pendentes são comunicados com transparência e prontos para configuração em arquivo único.
2. **Fidelidade estrita às regras pedagógicas**: A relação entre os 4 níveis escolares, suas 2 modalidades exclusivas, o limite de 1 equipe de até 3 estudantes por nível e o uso universal do Kit Maker Megalic é invariável em toda a interface.
3. **Clareza operacional no credenciamento**: A jornada separa inequivocamente o cadastro institucional da unidade escolar (Etapa A) da inscrição das equipes por nível (Etapa B).
4. **Autoridade editorial e sobriedade tecnológica**: O evento comunica inovação pública, engenharia e educação com acabamento de estúdio, rejeitando clichês visuais gamer ou estruturas genéricas de templates.

## Accessibility & Inclusion

Experiência mobile-first responsiva para gestores, professores e estudantes acessando por celulares, com navegação por teclado (`skip-link`, estados `:focus-visible`, atributos ARIA em abas, acordeão e modal) e contraste legível sobre superfícies escuras e claras.
