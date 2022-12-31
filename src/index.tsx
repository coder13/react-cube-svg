import Cube, { CubeProps } from './puzzles/Cube';

function Puzzle(props: CubeProps) {
  return <Cube {...props} />;
}

export { Cube, Puzzle };
