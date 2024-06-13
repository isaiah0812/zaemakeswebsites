import { useEffect, useState } from 'react';
import './Star.css';

type StarProps = {
  x: number;
  y: number;
  size: number;
  delay: number;
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

  const [ opacity, setOpacity ] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, [])

  return (
    <span className="star-wrap" style={{
      top: props.y,
      left: props.x,
      filter: `drop-shadow(0 0 ${size * .15}px #FFF)`,
      opacity,
      transition: `opacity 1s ${props.delay}s ease-in-out`,
      ...dimensions
    }}>
      <span className="star" style={{
        clipPath: `path("${starShapePath}")`
      }} />
    </span>
  )
}

export default Star