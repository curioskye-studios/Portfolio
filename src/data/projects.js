// IMAGES — replace these imports with your actual project screenshots:
import lumoNoteImg from '../assets/ux-projects/lumonote/lumonote-project.png';
import quickWashImg from '../assets/ux-projects/quickwash/quickwash-project.png';

export const PROJECTS = {
  design: [
    {
      id: 'lumonote',
      type: 'Mobile Application',
      title: 'A Robust But Simple Note-Taking Mobile App.',
      img: lumoNoteImg,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      link: '/portfolio/lumonote',
      column: 1
    },
    {
      id: 'quickwash',
      type: 'Desktop Application',
      title: 'An Easy To Use Laundry Appointment Scheduling System.',
      img: quickWashImg,
      imgPlaceholder: { bg: '#ffffff', label: 'QuickWash' },
      link: '/portfolio/quickwash',
      column: 2
    },
  ],

  software: [
    // Add your software projects here following the same shape
  ],
};