---
name: EducaTech Arapiraca
description: Pôster cinético em coluna única inspirado em Squadeasy com base off-white lilás editorial, blocos cromáticos harmônicos em roxo/lavanda/lima/pêssego/azul-céu e palco 3D WebGL interativo do Kit Maker Megalic.
colors:
  bg-canvas: "#F4F2FA"
  bg-white: "#FFFFFF"
  ink-carbon: "#111018"
  ink-slate: "#464354"
  ink-light: "#F7F5FC"
  ink-light-muted: "#C4C0D4"
  brand-purple: "#6D28D9"
  brand-lavender: "#C4B5FD"
  brand-plum: "#3B1578"
  poster-lime: "#DDF542"
  poster-peach: "#F6D0B1"
  poster-sky: "#93C5FD"
typography:
  display:
    fontFamily: "\"Sora\", system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.4vw, 3.65rem)"
    fontWeight: 800
    lineHeight: 1.01
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "\"Sora\", system-ui, sans-serif"
    fontSize: "2.85rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "\"Sora\", system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "\"Figtree\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "\"Figtree\", system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
rounded:
  xl: "0.75rem"
  2xl: "1rem"
  poster: "2rem"
  full: "9999px"
spacing:
  container-max: "780px"
  gutter-sm: "1.25rem"
  gutter-md: "2rem"
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-lime:
    backgroundColor: "{colors.poster-lime}"
    textColor: "{colors.ink-carbon}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
    height: "44px"
  button-lime-hover:
    backgroundColor: "{colors.brand-lavender}"
    textColor: "{colors.ink-carbon}"
  button-carbon:
    backgroundColor: "{colors.ink-carbon}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
    height: "44px"
  button-carbon-hover:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.bg-white}"
  button-outline:
    backgroundColor: "rgba(255, 255, 255, 0.8)"
    textColor: "{colors.ink-carbon}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
    height: "44px"
  chip-tab-active:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.ink-carbon}"
    rounded: "{rounded.xl}"
    padding: "8px 16px"
    height: "44px"
---

# Design System: EducaTech Arapiraca

## Overview

**Creative North Star: "Pôster Cinético em Coluna Única"**

O portal oficial do **EducaTech Arapiraca** combina uma leitura linear em coluna única (`780px`) com a linguagem editorial animada de pôsteres coloridos em movimento: título `sticky` que desfoca suavemente durante a rolagem enquanto o **Robô Zero 3D** sobe em cena, capítulos em molduras brancas com blocos cromáticos harmônicos, etiquetas rotacionadas em parallax com os números reais do evento, carrossel interativo de pilares e seleção de níveis escolares com troca dinâmica de acentos.

**Key Characteristics:**
- Coluna única arquitetônica (`780px`) sem grades multi-colunas em nenhuma seção ou breakpoint.
- Exatamente duas famílias tipográficas (`Sora` até peso `800` e `Figtree` com `tabular-nums`).
- Paleta clara editorial (`#F4F2FA` + `#FFFFFF`) com assinatura estratégica em roxo (`#6D28D9` / `#C4B5FD` / `#3B1578`) e capítulos em lima (`#DDF542`), pêssego (`#F6D0B1`), azul-céu (`#93C5FD`) e carbono (`#111018`).
- Coreografia dirigida pelo scroll (`useScroll` + `useTransform`), palco WebGL 3D (`RobotStage3D`), inclinação tátil 3D (`TiltStage`) e respeito estrito a `prefers-reduced-motion`.

## Colors

### Primary
- **Electric Royal Purple (`#6D28D9`)**: Assinatura institucional principal em títulos de destaque, indicadores de barra, bordas ativas e acentos sobre fundos claros.
- **Soft Lavender (`#C4B5FD`)**: Cor do capítulo emoldurado `#sobre`, selos inline e realce ativo da Etapa B.
- **Deep Plum (`#3B1578`)**: Fundo do banner contextual quando uma modalidade é pré-selecionada e hover de botões roxos.

### Secondary & Poster Accents
- **Poster Lime (`#DDF542`)**: CTA principal do Hero, cartão da Etapa A (`#inscricoes`), etiquetas rotacionadas de destaque e selos inline.
- **Warm Peach (`#F6D0B1`)**: Capítulo emoldurado `#como-participar` das 5 etapas escolares.
- **Clear Sky (`#93C5FD`)**: Capítulo emoldurado `#localizacao` em Arapiraca, AL.

### Neutral
- **Lilac Mist Canvas (`#F4F2FA`)**: Fundo base editorial da abertura, Competições, Inscrições e FAQ.
- **Crisp White (`#FFFFFF`)**: Molduras externas dos capítulos pôster e superfície limpa de cartões de modalidade, etapas e pilares.
- **Deep Carbon (`#111018`)**: Tinta de texto principal, cápsula escura do palco 3D WebGL, botões escuros e bloco final do rodapé.
- **Muted Slate (`#464354`)**: Texto secundário em superfícies claras.
- **Alabaster Light (`#F7F5FC`)** e **Lilac Mist (`#C4C0D4`)**: Textos principal e secundário sobre superfícies escuras de carbono (`#111018`).

### Named Rules
**The Two-Font & Harmonies Rule.** A página alterna superfícies neutras (branco-lavanda e branco) com capítulos de cor harmônica emoldurados em branco e acento roxo recorrente, mantendo legibilidade AA/AAA com tinta carbono `#111018`.

## Typography

**Display Font:** `Sora` (pesos `400;500;600;700;800`, fallback `system-ui, sans-serif`)
**Body Font:** `Figtree` (pesos `400;500;600;700`, fallback `system-ui, sans-serif`)

### Hierarchy
- **Display** (`800`, `clamp(2rem, 5.4vw, 3.65rem)`, `1.01`, `-0.04em`): Título principal `h1` em caixa alta centralizado com contraste sólido entre carbono e roxo.
- **Headline** (`800`, `2rem`–`2.85rem`, `1.04`, `-0.03em`): Títulos de capítulo `h2` em caixa alta com `<InlineBadge>` rotacionado embutido (nunca kickers acima).
- **Title** (`700`–`800`, `1.25rem`–`1.875rem`, `1.2`, `-0.02em`): Subtítulos de modalidades, pilares no deck e cartões de etapa.
- **Body** (`400`, `1rem`, `1.65`, `0em`): Parágrafos limitados a `50ch`–`54ch` em coluna única para conforto de leitura.
- **Label** (`700`, `0.75rem`, `1.3`, `0.12em`): Rótulos institucionais e códigos tabulares (`tabular-nums`), nunca menores que `12px`.

## Layout

Todo o site mantém **coluna única centralizada** (`max-width: 780px`, `padding: 20px` no mobile e `32px` a partir de `640px`). Capítulos emoldurados (`PosterChapter framed={true}`) usam moldura branca externa (`px-3 py-4 sm:px-6 sm:py-6`) envolvendo painéis de pôster com margens nítidas. Nenhuma seção divide conteúdo em colunas paralelas.

## Elevation & Depth

- **Floating Nav Shadow (`0 14px 36px -14px rgba(17, 16, 24, 0.16)`):** Elevação sutil da cápsula translúcida do cabeçalho.
- **Editorial Card (`0 22px 50px -24px rgba(17, 16, 24, 0.18)`):** Profundidade limpa nos cartões de modalidade, deck e etiquetas rotacionadas.
- **Poster Stage (`0 32px 72px -24px rgba(17, 16, 24, 0.48)`):** Profundidade dramática para a cápsula 3D escura do Hero, bloco de território e modais.
- **Profundidade Cinética:** Bloco `sticky` do Hero com `blur(0 → 8px)` e escala no scroll, etiquetas parallax (`ParallaxSticker`) e `TiltStage` 3D ao ponteiro.

## Shapes

- **Cápsula do Header e Botões:** `9999px` (`rounded-full`).
- **Molduras de Capítulos Pôster e Rodapé:** `28px` no mobile, `36px` a partir de `640px`.
- **Cartões de Conteúdo e Molduras de Foto:** `24px` (`rounded-[24px]`) a `28px` (`rounded-[28px]`).
- **Selos Inline (`InlineBadge`) e Abas Internas:** `12px` (`rounded-xl`).

## Components

- **`Header`**: Cápsula flutuante com vidro fosco, indicador do capítulo ativo e trilha de progresso interna.
- **`RobotStage3D`**: Cena Three.js procedural do Robô Zero (`M1`–`M4`), arraste 360°, vista explodida e fallback para `/images/hero-stage.jpg`.
- **`PosterChapter` & `InlineBadge`**: Capítulos full-bleed ou emoldurados com títulos que incorporam badges rotacionados.
- **`ParallaxSticker`**: Cartões rotacionados em parallax vertical exibindo dados oficiais sem fabricar estatísticas.
- **`KineticDeck`**: Carrossel interativo em coluna única com botões circulares `(<)` `(>)` e transição direcional.
- **`ActionButton`**, **`SegmentedControl`**, **`SpecList`**, **`MediaFrame`**, **`TiltStage`** e **`ModalDialog`**: Primitivos compartilhados acessíveis com foco visível, navegação por setas e alvos `>= 44px`.

## Do's and Don'ts

### Do:
- **Do** manter toda a estrutura do site em coluna única (`max-width: 780px`) com alternância harmônica de capítulos coloridos e respiro claro.
- **Do** usar exclusivamente `Sora` e `Figtree`, mantendo o roxo como assinatura central em equilíbrio com off-white lilás, branco, lavanda, pêssego, azul-céu, lima e carbono.
- **Do** respeitar `prefers-reduced-motion`, desativando blur no sticky, parallax e auto-rotação contínua quando solicitado pelo sistema.

### Don't:
- **Don't** adicionar grades multi-colunas (`grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-12`) nem quebrar `position: sticky` com `overflow-hidden` em ancestrais diretos.
- **Don't** colocar kickers acima de títulos (`h1`–`h4`), gradientes de texto, fontes monoespaçadas ou textos menores que `12px`.
- **Don't** inventar métricas, prêmios, datas, endereços, links ou logotipos além do configurado em `src/data/*.ts`.
