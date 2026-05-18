import lumoNoteImg from '../assets/ux-projects/lumonote/lumonote-project.png';
import quickWashImg from '../assets/ux-projects/quickwash/quickwash-project.png';

const allProjects = {    
  "Lumonote": 
    {
      id: 'lumonote',
      type: 'Mobile Application',
      summary: 'A Robust But Simple Note-Taking Mobile App.',
      img: lumoNoteImg,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      columnNum: 2
    },
  "Quickwash": 
    {
      id: 'quickwash',
      type: 'Desktop Application',
      summary: 'An Approachable Laundry Appointment Scheduling System.',
      img: quickWashImg,
      imgPlaceholder: { bg: '#ffffff', label: 'QuickWash' },
      columnNum: 1
    },
  "ARGUS": 
    {
      id: 'argus',
      type: 'Website / Web Application',
      summary: 'A Person of Interest Identifier.',
      img: "",
      imgPlaceholder: { bg: '#c9c9c9', label: 'ARGUS' },
      columnNum: 1
    },
}

export const PROJECTS = {
  "design": [
    allProjects["Quickwash"],
    allProjects["Lumonote"],
    allProjects["ARGUS"],
  ],

  "development": [
    //Reference projects here
  ],
};