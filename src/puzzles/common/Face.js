import React from 'react'
import PropTypes from 'prop-types'
import Sticker from './Sticker';

const Face = ({ x, y, puzzle, lineColor, lineWidth, state, size }) => {
  return (
    <React.Fragment>
      {state.map((row, _x) =>
        state.map((col, _y) => (
          <Sticker
            key={_x * puzzle + _y}
            x={size + x + _x * size + (1 - 2 * size)}
            y={size + y + _y * size + (1 - 2 * size)}
            size={size}
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
  puzzle: PropTypes.number.isRequired,
  size: PropTypes.number,
}

export default Face
