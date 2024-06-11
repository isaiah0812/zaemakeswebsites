import './Star.css';

type StarProps = {
  x: number;
  y: number;
  size: number;
}

function Star(props: StarProps) {
  const { size } = props;
  const dimensions = {
    height: props.size,
    width: props.size
  }

  const controlPoint = .5 * size + ',' + .5 * size;

  const starShapePath =
    `M${.5 * dimensions.width}, 0 ` +
    `Q${controlPoint} ${size}, ${.5 * size} ` +
    `Q${controlPoint} ${.5 * size}, ${size} ` +
    `Q${controlPoint} 0, ${.5 * size} ` +
    `Q${controlPoint} ${.5 * size}, 0` +
    'Z';

  return (
    <div className="star" style={{
      top: props.y,
      left: props.x,
      clipPath: `path("${starShapePath}")`,
      ...dimensions
    }} />
  )
}

export default Star