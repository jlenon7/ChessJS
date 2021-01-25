import { Piece } from './Piece'
import { Board } from './Board'
import { RookInitialHouse } from '../Contracts/InitialHouseContract'

export class Rook extends Piece {
  private readonly initialHouse: RookInitialHouse

  constructor(house: RookInitialHouse, color: string) {
    super(Rook.name, color)
    this.initialHouse = house
  }

  public move(origin: string, destiny: string, board: Board): boolean {
    console.log('Origin: ', origin)
    console.log('Destiny: ', destiny)
    console.log('Board Instance: ', board)
    console.log('Initial House: ', this.initialHouse)

    return true
  }
}
