import React from 'react'
import PropTypes from 'prop-types'
import CubeState from '../lib/cube'
import Face from './common/Face';

/* Colors: */
const Black = '#000000'
const White = '#FFFFFF'
const Yellow = '#FEFE00'
const Red = '#EE0000'
const Orange = '#FFA100'
const Blue = '#0000F2'
const Green = '#00D800'

const Cube = ({
  scramble,
  puzzle,
  size,
  colorScheme,
  lineColor,
  lineWidth,
  spacing,
  ...props
}) => {
  const state = new CubeState(scramble)

  const getFace = (f) =>
    state.getFace(f).map((row) => row.map((s) => colorScheme[s]))

  const faces = [
    {
      face: 'up',
      x: 3,
      y: 0,
    },
    {
      face: 'left',
      x: 0,
      y: 3,
    },
    {
      face: 'front',
      x: 3,
      y: 3,
    },
    {
      face: 'down',
      x: 3,
      y: 6,
    },
    {
      face: 'right',
      x: 6,
      y: 3,
    },
    {
      face: 'back',
      x: 9,
      y: 3,
    },
  ]

  return (
    <svg
      width={size}
      height={(size * 3) / 4}
      viewBox={`0 0 ${puzzle * 4} ${puzzle * 3}`}
      {...props}
    >
      {faces.map(({ face, x, y }) => (
        <Face
          key={face}
          x={x}
          y={y}
          puzzle={puzzle}
          size={spacing}
          state={getFace(face)}
          lineColor={lineColor}
          lineWidth={lineWidth}
        />
      ))}
    </svg>
  )
}

Cube.propTypes = {
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

Cube.defaultProps = {
  scramble: '',
  puzzle: 3,
  size: 200,
  lineWidth: 1,
  colorScheme: {
    up: White,
    down: Yellow,
    front: Green,
    back: Blue,
    left: Orange,
    right: Red,
  },
  lineColor: Black,
  spacing: 0.9,
}

export default Cube
