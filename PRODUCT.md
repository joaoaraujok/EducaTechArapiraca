# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Público primário institucional**: Estudantes da rede pública municipal de Arapiraca (do 4º ano do Ensino Fundamental à EJA), professores e equipes gestoras encarregados da organização pedagógica e das inscrições escolares.
- **Público ampliado e ecossistema**: Famílias e comunidade escolar, instituições de ensino e pesquisa, empresas e parceiros de tecnologia e visitantes interessados em inovação.

## Product Purpose

Portal institucional oficial do **EducaTech Arapiraca**, definido como a **Imersão de Tecnologia, Inovação, Cultura Digital e Inteligência Artificial da Rede Pública Municipal de Educação de Arapiraca**, sob o conceito pedagógico **"currículo em ação"**.

Seu propósito é apresentar o posicionamento educacional e os cinco movimentos do evento (*Explorar, Criar, Testar, Competir e Transformar*), destacar suas **5 arenas** com detalhes específicos, demonstrar o alinhamento aos **4 eixos curriculares municipais** (incluindo o **Letramento em IA — LeIA**, inovação desenvolvida pelo próprio município), divulgar a programação e o local do dia **16 de dezembro de 2026**, e conduzir escolas e participantes aos regulamentos simplificados, orientações e formulários de inscrição.

## Positioning

Iniciativa pública oficial da rede municipal de Arapiraca, realizada conjuntamente pelo **NITED** (Núcleo de Inovação em Tecnologia Educacional) e pela **CT&ED** (Coordenação Tecnológica e Educacional), com apoio institucional da **Secretaria Municipal de Educação de Arapiraca (SEMED)**.

Coloca os estudantes no centro da construção de soluções e promove o protagonismo da escola, da comunidade e do território.

## Operating Context

- **Cinco Movimentos Pedagógicos**: `01 Explorar`, `02 Criar`, `03 Testar`, `04 Competir` e `05 Transformar`, cada um com explicação prática detalhada para estudantes e educadores.
- **Cinco Arenas Oficiais**:
  1. **Robotics Challenge**: robótica, programação e automação (4 níveis escolares e 6 modalidades utilizando a plataforma padronizada **Kit Maker Megalic**, com 1 equipe de até 3 estudantes por nível por escola).
  2. **E-JEAR**: Jogos Escolares de Arapiraca em modelo eletrônico/digital (competições em jogos online, estratégia e cultura gamer educativa, com espaço reservado para divulgação dos títulos oficiais).
  3. **Ideathon**: hackathon de Inteligência Artificial responsável e Objetivos de Desenvolvimento Sustentável (ODS) para soluções de problemas reais.
  4. **ExpoTech**: exposição de projetos estudantis, experiências científicas e empresas/parceiros de tecnologia.
  5. **i9 Stage**: palestras, talks, demonstrações e pitches sobre educação, ciência e inovação.
- **Alinhamento Curricular Municipal (4 eixos)**:
  1. *Pensamento Computacional*: algoritmos, padrões, abstração e programação.
  2. *Mundo Digital*: dados, dispositivos, sistemas, redes e automação.
  3. *Cultura Digital*: cidadania, ética, segurança e educação midiática.
  4. *Letramento em IA (LeIA)* — inovação municipal de Arapiraca: compreensão, uso crítico e criação responsável com Inteligência Artificial.
- **Programação e Local**: Agenda concentrada no dia **16 de dezembro de 2026 (8:00 às 17:00)** no **Centro de Convenções de Arapiraca** (Complexo do Lago da Perucaba, Arapiraca - AL).

## Capabilities and Constraints

- **Escopo confirmado**: Portal em coluna única (`max-w-[780px]`) com 9 áreas de navegação (`#inicio`, `#sobre`, `#arenas`, `#curriculo`, `#programacao`, `#participacao`, `#regulamentos`, `#noticias`, `#parceiros`), modais explicativos dos 5 movimentos, páginas internas dedicadas para os detalhes de cada uma das 5 arenas (`#arena/<id>`, sem galeria ou página separada de regras), regras simplificadas diretamente na landing page em `#regulamentos`, programação preparada para **16/12**, mapa incorporado do Google Maps, credenciamento escolar e FAQ.
- **Separação de dados configuráveis**: Conteúdos centralizados em `src/data/general.ts`, `src/data/arenas.ts`, `src/data/curriculum.ts`, `src/data/competitions.ts`, `src/data/schedule.ts`, `src/data/news.ts`, `src/data/forms.ts`, `src/data/location.ts`, `src/data/partners.ts` e `src/data/navigation.ts`.
- **Restrição contra fabricação de dados**: Enquanto não divulgados pela coordenação, permanecem explicitamente reservados sem dados fictícios: grade detalhada por horário de **16/12**, lista de jogos oficiais do E-JEAR, editais em PDF dos regulamentos, matérias de notícias, links Google Forms, logotipos das instituições e canais diretos de contato.
- **Limite de repetição de equipamento**: O nome *Kit Maker Megalic* aparece no máximo 2 vezes em toda a interface (na arena *Robotics Challenge* e na pergunta correspondente do FAQ).

## Brand Commitments

- **Nome oficial**: EducaTech Arapiraca.
- **Conceito central**: *"Currículo em ação"*.
- **Diretrizes visuais preservadas**: Base clara (`#F4F2FA` e `#FFFFFF`), color-blocking harmônico por capítulos com assinatura em roxo (`#6D28D9` / `#C4B5FD` / `#3B1578`), coluna única (`max-w-[780px]`), no máximo 2 fontes (`Sora` + `Figtree`) e ausência de clichês de templates SaaS ou emojis como elementos de interface.
