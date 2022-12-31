import { MoveDef, Puzzle } from '../types';

type PermutationFunc = (
  how: number[]
) => (p: number, i: number, what: number[]) => number;
type OrientFunc = (
  how: number[],
  n: number
) => (p: number, i: number) => number;

export const nextPerm: PermutationFunc = (how) => (p, i, what) => what[how[i]];

export const prevPerm: PermutationFunc = (how) => (p, i, what) =>
  how.indexOf(what[i]);

export const nextOrient: OrientFunc = (how, n) => (p, i) => (p + how[i]) % n;

export const prevOrient: OrientFunc = (how, n) => (p, i) => (p + how[i]) % n;

export const solved = (): Puzzle => ({
  corners: {
    perm: [0, 1, 2, 3, 4, 5, 6, 7],
    orient: [0, 0, 0, 0, 0, 0, 0, 0],
  },
  edges: {
    perm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    orient: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  centers: [0, 1, 2, 3, 4, 5],
});

export const cycle = (_pieces: MoveDef, _cube: MoveDef, dir?: number) => {
  const cube: Puzzle = { ...solved(), ..._cube };
  const pieces: Puzzle = { ...solved(), ..._pieces }; // fill in the gaps

  const inv = dir && dir < 0;

  const perm = inv ? prevPerm : nextPerm;
  const orient = inv ? prevOrient : nextOrient;

  const cp = perm(pieces.corners.perm);
  const co = orient(pieces.corners.orient, 3);
  const ep = perm(pieces.edges.perm);
  const eo = orient(pieces.edges.orient, 2);

  return {
    corners: {
      perm: cube.corners.perm.map(cp),
      orient: !inv
        ? cube.corners.orient.map(co).map(cp)
        : cube.corners.orient.map(cp).map(co),
    },
    edges: {
      perm: cube.edges.perm.map(ep),
      orient: cube.edges.orient.map(eo).map(ep),
    },
    centers: cube.centers.map(perm(pieces.centers)),
  };
};

export const combine = (moves) => {
  moves.reverse().push(solved()); // append to beginning;
  return moves.reverse().reduce(cycle);
};
