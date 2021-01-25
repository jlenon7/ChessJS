import { Piece } from './Piece'
import { Board } from './Board'
import { QueenInitialHouse } from '../Contracts/InitialHouseContract'

export class Queen extends Piece {
  private readonly initialHouse: QueenInitialHouse

  constructor(house: QueenInitialHouse, color: string) {
    super(Queen.name, color)
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
