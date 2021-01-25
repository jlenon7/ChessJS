import { Piece } from './Piece'
import { Board } from './Board'
import { KingInitialHouse } from '../Contracts/InitialHouseContract'

export class King extends Piece {
  private readonly initialHouse: KingInitialHouse | string

  constructor(house: KingInitialHouse | string, color: string) {
    super(King.name, color)
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
