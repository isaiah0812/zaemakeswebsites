import { createContext, useEffect, useMemo, useState } from 'react';
import './App.css'
import Star from './components/star/Star'
import { Outlet } from 'react-router-dom';

const messages = [
  "Hi! I'm Isaiah!",
  "I'm a Software Engineer, amongst other things...",
  "Come check out what I do!"
];
let position = 0;

function makeStarfield(starCount: number) {
  const stars = [];
  const total = Math.floor(starCount);
  for (let i = 0; i < total; i++) {
    const size = Math.random() * 12;
    const delay = Math.log2(.5 / size * i + 1);
    stars.push(
      <Star
        x={Math.random() * window.innerWidth}
        y={Math.random() * window.innerHeight}
        size={size}
        delay={delay <= 10 ? delay : 10}
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
    console.log('mounted');
    if (
      !(/^\/*$/.test(window.location.pathname)) ||
      messagePosition === messages.length - 1
    ) {
      toggleStars(true);
    }
  }, [messagePosition])

  const pages = useMemo(() => (
    <Outlet />
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
