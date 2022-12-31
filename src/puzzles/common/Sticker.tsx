interface StickerProps extends React.SVGProps<SVGRectElement> {
  x: number;
  y: number;
  size: number;
}

const Sticker = ({ x, y, size, style }: StickerProps) => {
  return <rect x={x} y={y} width={size} height={size} style={style} />;
};

export default Sticker;
