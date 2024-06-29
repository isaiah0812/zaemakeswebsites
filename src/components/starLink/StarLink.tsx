import { Link } from 'react-router-dom';
import './StarLink.css';
import { useState } from 'react';

type StarLinkProps = {
  path: string;
  title: string;
  color: string;
  x: number;
  y: number;
}

function StarLink(props: StarLinkProps) {
  const [opacity, setOpacity] = useState(0);
  const [top, setTop] = useState('110%');
  
  const size = 50;
  const dimensions = {
    height: size,
    width: size
  }
  const linkSize = size * 1.2;

  const controlPoint = .5 * size + ',' + .5 * size;

  const starShapePath =
    `M${.5 * dimensions.width}, 0 ` +
    `Q${controlPoint} ${size}, ${.5 * size} ` +
    `Q${controlPoint} ${.5 * size}, ${size} ` +
    `Q${controlPoint} 0, ${.5 * size} ` +
    `Q${controlPoint} ${.5 * size}, 0` +
    'Z';

  const handleHover = () => {
    setOpacity(1);
    setTop('100%');
  };
  const handleLeave = () => {
    setOpacity(0);
    setTop('110%');
  };

  return (
    <Link to={props.path} onMouseEnter={handleHover} onMouseLeave={handleLeave} className="link" style={{ 
      top: props.y,
      left: props.x,
      width: linkSize,
      height: linkSize
    }}>
      <span className="star-link-wrap" style={{
        filter: `drop-shadow(0 0 7.5px ${props.color})`,
        ...dimensions
      }}>
        <span className="star-link" style={{
          clipPath: `path("${starShapePath}")`,
          backgroundColor: props.color
        }}></span>
      </span>
      <span style={{ top, marginTop: '5px', position: 'absolute', textAlign: 'center', width: '100%', color: '#FFF', textDecoration: 'none', opacity, transition: 'opacity 0.5s ease-out, top 0.75s ease-out' }}>{props.title}</span>
    </Link>
  )
}

export default StarLink;