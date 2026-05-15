import lumoNoteImg from '../assets/ux-projects/lumonote/lumonote-project.png';
import quickWashImg from '../assets/ux-projects/quickwash/quickwash-project.png';

const allProjects = {    
  "Lumonote": 
    {
      id: 'lumonote',
      type: 'Mobile Application',
      title: 'A Robust But Simple Note-Taking Mobile App.',
      img: lumoNoteImg,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      columnNum: 2
    },
  "Quickwash": 
    {
      id: 'quickwash',
      type: 'Desktop Application',
      title: 'An Easy To Use Laundry Appointment Scheduling System.',
      img: quickWashImg,
      imgPlaceholder: { bg: '#ffffff', label: 'QuickWash' },
      columnNum: 1
    },
  "ARGUS": 
    {
      id: 'argus',
      type: 'Website / Web Application',
      title: 'A Person of Interest Identifier.',
      img: "",
      imgPlaceholder: { bg: '#c9c9c9', label: 'ARGUS' },
      columnNum: 1
    },
}

export const PROJECTS = {
  "design": [
    allProjects["ARGUS"],
    allProjects["Lumonote"],
    allProjects["Quickwash"],
  ],

  "development": [
    //Reference projects here
  ],
};