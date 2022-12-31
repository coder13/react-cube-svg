import Sticker from './Sticker';

interface FaceProps {
  x: number;
  y: number;
  puzzle: number;
  size: number;
  state: string[][];
  lineColor: string;
  lineWidth: number;
}

const Face = ({
  x,
  y,
  puzzle,
  lineColor,
  lineWidth,
  state,
  size,
}: FaceProps) => {
  return (
    <>
      {state.map((_, _x) =>
        state.map((__, _y) => (
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
    </>
  );
};

export default Face;
