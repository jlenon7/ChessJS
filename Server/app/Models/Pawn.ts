import { Piece } from './Piece'
import { Board } from './Board'
import { PawnInitialHouse } from '../Contracts/InitialHouseContract'

export class Pawn extends Piece {
  private readonly initialHouse: PawnInitialHouse

  constructor(house: PawnInitialHouse, color: string) {
    super(Pawn.name, color)
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
