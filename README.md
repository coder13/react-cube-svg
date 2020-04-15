# react-cube-svg

> Generates SVG visualizations of various twisty puzzles

[![NPM](https://img.shields.io/npm/v/react-cube-svg.svg)](https://www.npmjs.com/package/react-cube-svg) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cube-svg
```

## Usage

```jsx
import React, { Component } from 'react'

import { Cube } from 'react-cube-svg'

class Example extends Component {
  render() {
    return <Cube scramble="F U2 L2 B2 F' U L2 U R2 D2 L' B L2 B' R2 U2" />
  }
}
```

## License

MIT © [coder13](https://github.com/coder13)
