import React from 'react'
import PropTypes from 'prop-types'
import Cube from './puzzles/Cube'

const Puzzle = ({ puzzle, ...props }) => {
  return (
    <Cube {...props} />
  )
}

Puzzle.propTypes = {
  puzzle: PropTypes.oneOf('333'),
  scramble: PropTypes.string,
  puzzle: PropTypes.number,
  size: PropTypes.number,
  lineWidth: PropTypes.number,
  colorScheme: PropTypes.shape({
    up: PropTypes.string,
    down: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }),
  lineColor: PropTypes.string,
  spacing: PropTypes.number,
}

Puzzle.defaultProps = {
  puzzle: '333',
}

export { Cube, Puzzle }
