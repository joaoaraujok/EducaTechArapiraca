# EducaTech Arapiraca

Portal institucional oficial do **EducaTech Arapiraca** — **Festival de Tecnologia, Inovação, Cultura Digital e Inteligência Artificial da Rede Pública Municipal de Educação de Arapiraca** (*"Currículo em Ação"*).

Realização do **NITED** (Núcleo de Inovação em Tecnologia Educacional) e da **CT&ED** (Coordenação Tecnológica e Educacional), com apoio institucional da **Secretaria Municipal de Educação de Arapiraca (SEMED)**.

## Tecnologias

- **React 18** + **TypeScript**
- **Vite 6**
- **Tailwind CSS**
- **Motion** (`motion/react`)
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

## Estrutura de dados editáveis

Os conteúdos e áreas preparadas para atualização ficam centralizados em `src/data/`:

- `src/data/general.ts`: informações institucionais, públicos do festival, orientações de participação e FAQ.
- `src/data/arenas.ts`: as 5 arenas oficiais (**Robotics Challenge**, **E-JEAR**, **Ideathon**, **ExpoTech** e **i9 Stage**), regras, critérios e cronograma.
- `src/data/curriculum.ts`: os 5 movimentos pedagógicos (*Explorar, Criar, Testar, Competir, Transformar*) e os 4 eixos curriculares (incluindo **Letramento em IA — LeIA**).
- `src/data/competitions.ts`: níveis e modalidades da arena **Robotics Challenge**.
- `src/data/schedule.ts`: programação oficial de **16 de dezembro de 2026**.
- `src/data/location.ts`: data, horário, nome do local, endereço e links do Google Maps.
- `src/data/news.ts`: comunicados, novidades e registros do festival.
- `src/data/forms.ts`: links dos formulários Google Forms.
- `src/data/partners.ts`: instituições realizadoras e apoiadoras.
- `src/data/navigation.ts`: mapa de navegação principal do portal.
