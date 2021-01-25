import { Piece } from './Piece'
import { Board } from './Board'
import { KnightInitialHouse } from '../Contracts/InitialHouseContract'

export class Knight extends Piece {
  private readonly initialHouse: KnightInitialHouse

  constructor(house: KnightInitialHouse, color: string) {
    super(Knight.name, color)
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
