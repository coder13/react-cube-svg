import React from 'react'
import PropTypes from 'prop-types'
import CubeState from './lib/cube'

/* Colors: */
const Black = '#000000'
const White = '#FFFFFF'
const Yellow = '#FEFE00'
const Red = '#EE0000'
const Orange = '#FFA100'
const Blue = '#0000F2'
const Green = '#00D800'

const Sticker = ({ x, y, style }) => {
  return <rect x={x} y={y} width={1} height={1} style={style} />
}

Sticker.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
}

const Face = ({ x, y, lineColor, lineWidth, state }) => {
  return (
    <React.Fragment>
      {state.map((row, _x) =>
        state.map((col, _y) => (
          <Sticker
            key={_x * 3 + _y}
            x={x + _x}
            y={y + _y}
            style={{
              fill: state[_y][_x],
              stroke: lineColor,
              strokeWidth: lineWidth / 64,
            }}
          />
        ))
      )}
    </React.Fragment>
  )
}

Face.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  state: PropTypes.arrayOf(PropTypes.array).isRequired,
  lineColor: PropTypes.string.isRequired,
  lineWidth: PropTypes.number.isRequired,
}

const Cube = ({ scramble, size, colorScheme, lineColor, lineWidth }) => {
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
    <svg width={size * 10} height={size * 10} viewBox={`0 0 ${24} ${24}`}>
      {faces.map(({ face, x, y }) => (
        <Face
          key={face}
          x={x}
          y={y}
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
  editable: PropTypes.bool,
  rotate: PropTypes.string,
  colorScheme: PropTypes.shape({
    up: PropTypes.string,
    down: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }),
  lineColor: PropTypes.string,
}

Cube.defaultProps = {
  scramble: '',
  puzzle: 3,
  size: 100,
  lineWidth: 1,
  editable: false,
  rotate: '',
  colorScheme: {
    up: White,
    down: Yellow,
    front: Green,
    back: Blue,
    left: Orange,
    right: Red,
  },
  lineColor: Black,
}

export default Cube
