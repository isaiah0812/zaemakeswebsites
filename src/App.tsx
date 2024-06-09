import './App.css'
import Star from './components/Star'

function makeStarfield(starCount: number) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <Star
        x={Math.random() * window.innerWidth}
        y={Math.random() * window.innerHeight}
        size={Math.random() * 5}
      />
    );
  }

  return stars;
}

function App() {
  // TODO fix the resize
  return (
    <div id="space">
      {...makeStarfield(500)}
      <div id="content">
        <h1>Hello World!</h1>
      </div>
    </div>
  )
}

export default App
