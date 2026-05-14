# Portfolio — Arthur Batista

Portfolio em **React + TypeScript + Vite + TailwindCSS**, inspirado em layout mobile-first com paleta creme/preto e tipografia DM Sans + DM Serif Display.

## Setup

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.tsx` — todas as seções (hero, skills, experiência, projetos, formação, certificados, footer). Os dados estão em arrays no topo do arquivo, fáceis de editar.
- `src/index.css` — diretivas do Tailwind.
- `tailwind.config.js` — paleta customizada (`bg`, `ink`, `accent`, etc.) e animação `fadeUp`.

## Personalização

Edite os arrays `skills`, `experiences`, `projects`, `education` e `certs` em `src/App.tsx` para ajustar o conteúdo.
