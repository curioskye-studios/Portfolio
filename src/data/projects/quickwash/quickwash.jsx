import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';
import quickwashHeroImg from '../../../assets/ux-projects/quickwash/quickwash-project.png';

import Problem from './1-problem';
import SystemSupport from './2-system';
import WasherImage from './3-washer-img';
import Research from './4-research';
import Design from './5-design';
import Decisions from './6-decisions';
import Reflection from './7-reflection';

export const QuickwashData = { 
  // next: 'quickwash',
  title: 'Quickwash',
  type: "University Project",
  roles: ["UI/UX Designer", "Frontend Developer"],
  date: "April 2024",
  tools: ["Canva", "Java", "PostgreSQL"],
  link: "https://github.com/xeniqued/QuickWash",  

  hero: {
    description: (
      <div>
        {Em("QuickWash")} is a {Em("laundry appointment scheduling system")} intended to alleviate the laundry issues
        at the {Em("George Alleyne Hall")} at the University of the West Indies (UWI) Mona campus.
        {BrS()}
        This project was an exploration of a {Em("desktop solution")} to target the inefficiencies 
        of the current system.
      </div>
    ),
    img: quickwashHeroImg,
  },

  sections: [
    Problem,
    SystemSupport,
    WasherImage,
    Research,
    Design,
    Decisions,
    Reflection,
  ]
}