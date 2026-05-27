import './ProjectNavigator.css'

import { useState, useContext } from 'react';
import { SectionRefsContext } from '../../../pages/ProjectDetail/SectionRefsContext';

import SectionButton from './SectionButton';
import DisplayToggleButton from './DisplayToggleButton';

export default function ProjectNavigator({ referencedSections, moreClasses = "" }) {

  const [shouldDisplayButtons, setShouldDisplayButtons] = useState(true);

  const sectionRefs = useContext(SectionRefsContext);

  function handleReferenceClick(reference) {

    sectionRefs.current[reference]?.scrollIntoView(
      { 
        behavior: "smooth" 
      }
    );
  }

  function handleDisplayClick() {
    setShouldDisplayButtons(prevState => !prevState);
  }

  function createSectionButtons() {
    return (
      referencedSections.map(
        (section, i) => (      

          <div key={i}>
            { createSectionButton(section.reference) }
          </div>                         
        )
      )
    );    
  }

  function createSectionButton(reference) {
    return (
      <>
        {/* <div className='green-line'/> */}

        <SectionButton 
          reference={reference} 
          onClick={() => handleReferenceClick(reference)} 
        />
      </>
    );    
  }
  

  return (
    <div className={`navigator ${shouldDisplayButtons ? '' : 'collapsed'} ${moreClasses}`}>

      <div className='nav-toggle'>
        <DisplayToggleButton onClick={handleDisplayClick} isOn={shouldDisplayButtons} />
        {/* View Sections: On */}
      </div>

      <div className={`nav-buttons ${shouldDisplayButtons ? "" : "hidden-nav-btns" }`} >
        {
          shouldDisplayButtons ? createSectionButtons() : null
        }
      </div>      
      
    </div>
  );
}