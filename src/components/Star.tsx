import './Star.css';

type StarProps = {
  x: number;
  y: number;
  size: number;
}

function Star(props: StarProps) {
  const size = {
    height: props.size,
    width: props.size
  }
  return (
    <div className="star" style={{
      top: props.y,
      left: props.x,
      ...size
    }}>
      <div className="point" style={{ ...size }} />
      <div className="point" style={{ ...size }} />
      <div className="point" style={{ ...size }} />
      <div className="point" style={{ ...size }} />
    </div>
  )
}

export default Star