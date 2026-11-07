# Tic Tac Toe

A local two-player tic-tac-toe game. Players take turns as X and O on a 3x3 board. When someone wins, a short confetti burst plays. After a win or a draw, the board locks until you press **Reset**.

## Technologies

- **React 18** — UI and game state
- **TypeScript** — typed board, players, and win checks
- **Vite 5** — dev server and production build
- **canvas-confetti** — confetti animation on a win

Win detection lives in `src/game.ts`. The board, turn handling, and confetti effect live in `src/App.tsx`.

## Prerequisites

- Node.js 18 or later
- npm

## Setup

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

This type-checks with TypeScript, then writes a production bundle to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## How to play

1. X starts. Click an empty cell to place a mark.
2. Players alternate until someone gets three in a row (row, column, or diagonal) or the board is full.
3. A win shows confetti and the winner. A full board with no winner shows **Draw**.
4. Click **Reset** to start a new game.
