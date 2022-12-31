export interface PieceSetWithOrientation {
  perm: number[];
  orient: number[];
}

export interface Puzzle {
  corners: PieceSetWithOrientation;
  edges: PieceSetWithOrientation;
  centers: number[];
}

export interface MoveDef {
  corners?: PieceSetWithOrientation;
  edges?: PieceSetWithOrientation;
  centers?: number[];
}
