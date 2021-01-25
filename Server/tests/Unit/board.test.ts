import { Board } from '../../app/Models/Board'

describe('\nClass Board', () => {
  let board: Board

  beforeEach(() => {
    board = new Board()
  })

  it('should be able to generate houses for a chess board', async () => {
    const houses = board.generateBoard()

    expect(houses.A8.color).toBe('light')
    expect(houses.H8.color).toBe('black')
    expect(houses.A7.color).toBe('black')

    expect(houses.A8.house).toBe(1)
    expect(houses.H1.house).toBe(64)
  })

  it('should be able to start a new game in the board resetting all houses', async () => {
    const houses = board.newGame()

    expect(houses.A8.piece.color).toBe('black')
    expect(houses.H8.piece.color).toBe('black')
    expect(houses.A7.piece.color).toBe('black')

    expect(houses.A3.piece).toBe(undefined)
    expect(houses.A4.piece).toBe(undefined)
    expect(houses.A5.piece).toBe(undefined)
    expect(houses.A6.piece).toBe(undefined)
  })

  it('should return true when the house exists', async () => {
    board.generateBoard()

    expect(board.verifyHouse('A8')).toBe(true)
  })

  it('should return true when the house has a piece', async () => {
    board.newGame()

    expect(board.verifyPiece('A8')).toBe(true)
  })
})
