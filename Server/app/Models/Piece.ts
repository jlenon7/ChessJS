import { Board } from './Board'

export class Piece {
  public type: string
  public color: string
  public moved: boolean
  public isAttacked: boolean

  constructor(type: string, color: string) {
    this.type = type
    this.color = color
    this.moved = false
    this.isAttacked = false
  }

  protected move(origin: string, destiny: string, board: Board): boolean {
    if (this.verifyMovement(origin, destiny)) {
      return board.verifyPiece(destiny)
    }

    return false
  }

  protected verifyMovement(origin: string, destiny: string): boolean {
    return origin !== destiny
  }
}
