import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { getWinner, isDraw, type Player, type Square } from './game'
import './App.css'

const emptyBoard = (): Square[] => Array(9).fill(null)

function App() {
  const [squares, setSquares] = useState<Square[]>(emptyBoard)
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')

  const winner = getWinner(squares)
  const draw = isDraw(squares, winner)
  const gameOver = winner !== null || draw

  useEffect(() => {
    if (!winner) return

    void confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.2 },
    })
  }, [winner])

  function handleClick(index: number) {
    if (gameOver || squares[index]) return

    const next = squares.slice()
    next[index] = currentPlayer
    setSquares(next)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  function reset() {
    setSquares(emptyBoard())
    setCurrentPlayer('X')
  }

  let status = `Turn: ${currentPlayer}`
  if (winner) status = `${winner} wins`
  else if (draw) status = 'Draw'

  return (
    <main className="app">
      <h1>Tic Tac Toe</h1>
      <p className="status" aria-live="polite">
        {status}
      </p>
      <div className="board" role="grid" aria-label="Tic tac toe board">
        {squares.map((value, index) => (
          <button
            key={index}
            type="button"
            className="cell"
            role="gridcell"
            disabled={gameOver || value !== null}
            onClick={() => handleClick(index)}
            aria-label={value ? `${value} at cell ${index + 1}` : `Empty cell ${index + 1}`}
          >
            {value}
          </button>
        ))}
      </div>
      <button type="button" className="reset" onClick={reset}>
        Reset
      </button>
    </main>
  )
}

export default App
