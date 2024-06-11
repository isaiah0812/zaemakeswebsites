import { createContext, useEffect, useMemo, useState } from 'react';
import './App.css'
import Star from './components/star/Star'
import Home from './pages/home/Home';

const messages = [
  "Hi! I'm Isaiah!",
  "I'm a Software Engineer, amongst other things...",
  "Come check out what I do!"
];
let position = 0;

function makeStarfield(starCount: number) {
  const stars = [];
  for (let i = 0; i < Math.floor(starCount); i++) {
    stars.push(
      <Star
        x={Math.random() * window.innerWidth}
        y={Math.random() * window.innerHeight}
        size={Math.random() * 12}
      />
    );
  }

  return stars;
}

export const MessageContext = createContext({ messages, messagePosition: 0 });

function App() {
  const [showStars, toggleStars] = useState(false);
  const [messagePosition, setMessagePosition] = useState(0);

  const handleWheel = (e: any) => {
    if (messagePosition < messages.length - 1) {
      if (position + e.deltaY > 300) {
        setMessagePosition(messagePosition + 1);
        position = 0;
      } else {
        position += e.deltaY;
      }
    }
  }

  useEffect(() => {
    if (messagePosition === messages.length - 1) toggleStars(true);
  }, [messagePosition])

  const pages = useMemo(() => (
    <Home />
  ), [])

  // TODO fix the resize
  return (
    <div id="space" onWheel={handleWheel}>
      <MessageContext.Provider value={{ messages, messagePosition }}>
        {pages}
      </MessageContext.Provider>
      {showStars && <>{...makeStarfield(window.innerHeight * window.innerWidth * .0006)}</>}
    </div>
  )
}

export default App
