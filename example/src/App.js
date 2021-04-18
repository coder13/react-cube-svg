import React from 'react'

import { Puzzle } from 'react-cube-svg'
// import 'react-cube-svg/dist/index.css'

const App = () => {
  const [scramble, setScramble] = React.useState('');

  const handleChange = (e) => {
    setScramble(e.target.value);
  }

  return (
    <div>
      <form className="form">
        <label>
          Scramble:
          <input type="text" name="scramble" value={scramble} onChange={handleChange} />
        </label>
      </form>
      <Puzzle puzzle="333" scramble={scramble}/>
    </div>
  )
}

export default App
