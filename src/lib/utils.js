export const nextPerm = (how) => (p, i, what) => what[how[i]]
export const prevPerm = (how) => (p, i, what) => how.indexOf(what[i])
export const nextOrient = (how, n) => (p, i, what) => (p + how[i]) % (n || 3)
export const prevOrient = (how, n) => (p, i, what) => (p + how[i]) % (n || 3)

export const solved = () => ({
  corners: {
    perm: [0, 1, 2, 3, 4, 5, 6, 7],
    orient: [0, 0, 0, 0, 0, 0, 0, 0],
  },
  edges: {
    perm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    orient: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  centers: [0, 1, 2, 3, 4, 5],
})

export const cycle = (pieces, cube, dir) => {
  cube = { ...solved(), ...cube }
  pieces = { ...solved(), ...pieces } // fill in the gaps

  const inv = dir && dir < 0

  const perm = inv ? prevPerm : nextPerm
  const orient = inv ? prevOrient : nextOrient

  const cp = perm(pieces.corners.perm)
  const co = orient(pieces.corners.orient)
  const ep = perm(pieces.edges.perm)
  const eo = orient(pieces.edges.orient, 2)

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
  }
}

export const combine = (moves) => {
  moves.reverse().push(solved()) // apend to beggining;
  return moves.reverse().reduce(cycle)
}
