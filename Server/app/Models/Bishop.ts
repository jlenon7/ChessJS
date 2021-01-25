import { Piece } from './Piece'
import { Board } from './Board'
import { BishopInitialHouse } from '../Contracts/InitialHouseContract'

export class Bishop extends Piece {
  private readonly initialHouse: BishopInitialHouse

  constructor(house: BishopInitialHouse, color: string) {
    super(Bishop.name, color)
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
