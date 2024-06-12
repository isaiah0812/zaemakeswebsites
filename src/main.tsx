import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import NotFound from './pages/notFound/NotFound.tsx'
import Contact from './pages/contact/Contact.tsx'
import Music from './pages/music/Music.tsx'
import Projects from './pages/projects/Projects.tsx'
import Skills from './pages/skills/Skills.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'music',
        element: <Music />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'skills',
        element: <Skills />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
