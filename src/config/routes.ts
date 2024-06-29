import { ElementType } from "react";
import Contact from "../pages/contact/Contact";
import Music from "../pages/music/Music";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";

interface Route {
  path: string;
  title: string;
  element: ElementType;
  linkProps: RouteLinkProps;
}

interface RouteLinkProps {
  x: number;
  y: number;
  color: string;
}

// TODO fit routes inside of given window (don't worry about resizing yet)
const routes: Route[] = [
  {
    path: 'contact',
    title: 'Contact',
    element: Contact,
    linkProps: {
      x: 100,
      y: 100,
      color: '#f2bd6f'
    }
  },
  {
    path: 'music',
    title: 'Music',
    element: Music,
    linkProps: {
      x: 500,
      y: 100,
      color: '#a5def2'
    }
  },
  {
    path: 'projects',
    title: 'Projects',
    element: Projects,
    linkProps: {
      x: 100,
      y: 500,
      color: '#f5ec89'
    }
  },
  {
    path: 'skills',
    title: 'Skills',
    element: Skills,
    linkProps: {
      x: 500,
      y: 500,
      color: '#e86666'
    }
  },
]

export default routes;