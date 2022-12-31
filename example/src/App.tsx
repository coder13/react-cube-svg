import { useState } from 'react';

import { Puzzle } from 'react-cube-svg';

const App = () => {
  const [scramble, setScramble] = useState('');

  const handleChange = (e) => {
    setScramble(e.target.value);
  };

  return (
    <div>
      <form className='form'>
        <label>
          Scramble:
          <input
            type='text'
            name='scramble'
            value={scramble}
            onChange={handleChange}
          />
        </label>
      </form>
      <Puzzle scramble={scramble} />
    </div>
  );
};

export default App;
