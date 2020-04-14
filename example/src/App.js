import React from 'react'

import { Cube } from 'react-cube-svg'
import 'react-cube-svg/dist/index.css'

const scramble = "D' F B L' B2 D F2 L U L2 D2 B2 L' B2 R' B2 L' D2 L F2 L"

const App = () => {
  return (
    <div>
      <p>Should represent {scramble}</p>
      <Cube scramble={scramble}/>
    </div>
  )
}

export default App
