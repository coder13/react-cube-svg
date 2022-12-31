import CubeState from '../lib/cube';
import Face from './common/Face';

/* Colors: */
const Black = '#000000';
const White = '#FFFFFF';
const Yellow = '#FEFE00';
const Red = '#EE0000';
const Orange = '#FFA100';
const Blue = '#0000F2';
const Green = '#00D800';

export interface ColorScheme {
  up: string;
  down: string;
  front: string;
  back: string;
  left: string;
  right: string;
}

export interface CubeProps {
  scramble?: string;
  puzzle?: number;
  size?: number;
  lineWidth?: number;
  colorScheme?: ColorScheme;
  lineColor?: string;
  spacing?: number;
}

const Faces = [
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
];

const Cube = ({
  scramble = '',
  puzzle = 3,
  size = 200,
  colorScheme = {
    up: White,
    down: Yellow,
    front: Green,
    back: Blue,
    left: Orange,
    right: Red,
  },
  lineColor = Black,
  lineWidth = 1,
  spacing = 0.9,
  ...props
}: CubeProps) => {
  const state = new CubeState(scramble);

  const getFace = (f) =>
    state.getFace(f).map((row) => row.map((s) => colorScheme[s]));

  return (
    <svg
      width={size}
      height={(size * 3) / 4}
      viewBox={`0 0 ${puzzle * 4} ${puzzle * 3}`}
      {...props}
    >
      {Faces.map(({ face, x, y }) => (
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
  );
};

export default Cube;
