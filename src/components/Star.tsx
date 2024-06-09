import './Star.css';

type StarProps = {
  x: number;
  y: number;
  size: number;
}

function Star(props: StarProps) {
  
  return (
    <div className="star" style={{
      top: props.y,
      left: props.x,
      height: props.size,
      width: props.size
    }} />
  )
}

export default Star