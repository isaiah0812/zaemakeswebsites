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
      <h1>Hi! I'm Isaiah!</h1>
      {...makeStarfield(1000)}
    </div>
  )
}

export default App
