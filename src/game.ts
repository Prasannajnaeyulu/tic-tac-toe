export type Player = 'X' | 'O'
export type Square = Player | null

export const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const

export function getWinner(squares: Square[]): Player | null {
  for (const [a, b, c] of WIN_LINES) {
    const mark = squares[a]
    if (mark && mark === squares[b] && mark === squares[c]) {
      return mark
    }
  }
  return null
}

export function isDraw(squares: Square[], winner: Player | null): boolean {
  return winner === null && squares.every((square) => square !== null)
}
