import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';
import lumoNoteHeroImg from '../../../assets/ux-projects/lumonote/lumonote-project.png';

import Problem from './1-problem';
import TargetUser from './2-target-user';
import NotesImage from './3-notes-img';
import Research from './4-research';
import Design from './5-design';
import Decisions from './6-decisions';
import Development from './7-development';
import Reflection from './8-reflection';

export const LumoNoteData = { 
  next: 'quickwash',
  title: 'LumoNote.',
  type: "Exploratory Project",
  roles: ["UI/UX Designer", "Frontend Developer", "Backend Developer"],
  date: "Autumn 2025",
  tools: ["Draw.io", "Pencil & Paper"],
  link: "https://github.com/curioskye-studios/LumoNote",  

  hero: {
    description: (
      <div>
        {Em("LumoNote")} is a {Em("feature rich note-taking mobile app.")}
        {' '}
        It sits in that sweet spot between a simple note-taking app and one that borders on a word processor like Microsoft Word.
        {BrS()}
        This was an {Em("exploratory project")} undertaken with a focus on {Em("refining my process")}
        {' '}and {Em("expanding my knowledge and skill")} as both a
        {' '}{Em("UI/UX Designer")} and {Em("Software Developer.")}
      </div>
    ),
    img: lumoNoteHeroImg,
  },

  sections: [
    Problem,
    TargetUser,
    NotesImage,
    Research,
    Design,
    Decisions,
    Development,
    Reflection,
  ]
}