import './App.css'
import Star from './components/Star'

function makeStarfield(starCount: number) {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <Star
        x={Math.random() * window.innerWidth}
        y={Math.random() * window.innerHeight}
        size={Math.random() * 10}
      />
    );
  }

  return stars;
}

function App() {
  // TODO fix the resize
  return (
    <div id="space">
      <div id="content">
        <h1>Hello World!</h1>
      </div>
      {...makeStarfield(1000)}
    </div>
  )
}

export default App
