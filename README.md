# EducaTech Arapiraca

Portal institucional oficial do **EducaTech Arapiraca**, encontro municipal de educação, inovação, tecnologia e competições de robótica educacional.

Realização do **NITED** (Núcleo de Inovação em Tecnologia Educacional) e da **CT&ED** (Coordenação Tecnológica e Educacional), com apoio institucional da **Secretaria Municipal de Educação de Arapiraca (SEMED)**.

## Tecnologias

- **React 18** + **TypeScript**
- **Vite 6**
- **Tailwind CSS**
- **Motion** (`motion/react`)
- **Three.js** (`RobotStage3D`)
- **Lucide React**

## Requisitos e comandos

Requer **Node.js 18+** e **npm**.

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Verificar lint (ESLint)
npm run lint

# Gerar build de produção (TypeScript + Vite)
npm run build

# Visualizar build gerado localmente
npm run preview
```

## Configuração de dados do evento

Os conteúdos editáveis ficam centralizados em `src/data/`:

- `src/data/general.ts`: textos institucionais, pilares pedagógicos, módulos do Robô Zero, checklist de inscrição, FAQ e canais de contato.
- `src/data/competitions.ts`: níveis escolares (Nível 1 ao Nível 4 / EJA) e suas respectivas modalidades oficiais.
- `src/data/forms.ts`: links oficiais dos formulários Google Forms (cadastro da escola e inscrição das equipes por nível).
- `src/data/location.ts`: data, horário, nome do local, endereço e URLs do Google Maps.
- `src/data/partners.ts`: instituições realizadoras, apoiadora e caminhos dos logotipos oficiais em `public/`.
- `src/data/navigation.ts`: mapa de seções utilizado pelo rastreamento de navegação no cabeçalho.

## Estrutura do projeto

```text
├── public/
│   ├── images/          # Fotografias editoriais do evento e das modalidades
│   └── favicon.svg      # Ícone vetorial do EducaTech Arapiraca
├── src/
│   ├── components/      # Seções da página, estágio 3D e componentes de UI
│   ├── data/            # Dados configuráveis do evento
│   ├── hooks/           # Hooks customizados (rastreamento de seção ativa)
│   ├── lib/             # Utilitários e constantes de movimento
│   └── types/           # Tipagens TypeScript do domínio do evento
├── DESIGN.md            # Diretrizes visuais do projeto
├── PRODUCT.md           # Escopo institucional e regras do evento
└── index.html           # Documento base e metadados
```
