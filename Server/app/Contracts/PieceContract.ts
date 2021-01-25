import { Rook } from '../Models/Rook'
import { King } from '../Models/King'
import { Pawn } from '../Models/Pawn'
import { Queen } from '../Models/Queen'
import { Knight } from '../Models/Knight'
import { Bishop } from '../Models/Bishop'

export type PieceContract =
  | typeof Rook
  | typeof Knight
  | typeof Bishop
  | typeof Queen
  | typeof King
  | typeof Pawn
