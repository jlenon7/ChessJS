import { Rook } from './Rook'
import { King } from './King'
import { Pawn } from './Pawn'
import { Queen } from './Queen'
import { Knight } from './Knight'
import { Bishop } from './Bishop'
import { HouseContract } from '../Contracts/HouseContract'
import { PieceContract } from '../Contracts/PieceContract'

export class Board {
  private houses: HouseContract = {}
  private colors: string[] = ['light', 'black']
  private numbers: string[] = ['8', '7', '6', '5', '4', '3', '2', '1']
  private letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  private generateWhite(): void {
    for (let i = 0; i < 8; i++) {
      this.generatePiece(`${this.letters[i]}2`, 'light', Pawn)
    }

    this.generatePiece('A1', 'light', Rook)
    this.generatePiece('B1', 'light', Knight)
    this.generatePiece('C1', 'light', Bishop)
    this.generatePiece('D1', 'light', Queen)
    this.generatePiece('E1', 'light', King)
    this.generatePiece('F1', 'light', Bishop)
    this.generatePiece('G1', 'light', Knight)
    this.generatePiece('H1', 'light', Rook)
  }

  private generateBlack(): void {
    for (let i = 0; i < 8; i++) {
      this.generatePiece(`${this.letters[i]}7`, 'black', Pawn)
    }

    this.generatePiece('A8', 'black', Rook)
    this.generatePiece('B8', 'black', Knight)
    this.generatePiece('C8', 'black', Bishop)
    this.generatePiece('D8', 'black', Queen)
    this.generatePiece('E8', 'black', King)
    this.generatePiece('F8', 'black', Bishop)
    this.generatePiece('G8', 'black', Knight)
    this.generatePiece('H8', 'black', Rook)
  }

  newGame(): HouseContract {
    this.generateBoard()
    this.generateWhite()
    this.generateBlack()

    return this.houses
  }

  generateBoard(): HouseContract {
    let XOR = 1
    this.houses = {}

    this.numbers.forEach(n => {
      this.letters.forEach(l => {
        const house = Object.keys(this.houses).length + 1
        const color = this.colors[(XOR ^= 1)]

        this.houses[`${l}${n}`] = { house, color, piece: undefined }
      })
      XOR ^= 1
    })

    return this.houses
  }

  generatePiece(house: string, color: string, Piece: PieceContract): void {
    this.houses[house].piece = new Piece(house, color)
  }

  verifyHouse(house: string): boolean {
    return !!this.houses[house]
  }

  verifyPiece(house: string): boolean {
    return !!this.houses[house].piece
  }
}
