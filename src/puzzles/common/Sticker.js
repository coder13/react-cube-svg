import React from 'react'
import PropTypes from 'prop-types'

const Sticker = ({ x, y, size, style }) => {
  return <rect x={x} y={y} width={size} height={size} style={style} />
}

Sticker.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
}

export default Sticker;
