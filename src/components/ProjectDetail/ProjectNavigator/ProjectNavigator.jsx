import './ProjectNavigator.css'
import { capitalizer } from '../../../utils/textFormatter';

import { useContext } from 'react';
import { SectionRefsContext } from '../../../pages/ProjectDetail/SectionRefsContext';

export default function ProjectNavigator({ referencedSections, shouldDisplay }) {

  /* 
    collect all referenced sections name from the current project info
    loop through and create the buttons to get to each
    create logic to get to the section on click

    create button element to pass data into
  */

  const sectionRefs = useContext(SectionRefsContext);

  function handleReferenceClick(reference) {

    // console.log(sectionRefs.current[reference]);

    sectionRefs.current[reference]?.scrollIntoView(
      { 
        behavior: "smooth" 
      }
    );
  }

  function createSectionButton(reference) {

    return (      
      <button 
        className='navigator-btn' 
        onClick={() => handleReferenceClick(reference)}
      >
        {capitalizer(reference)}
      </button>
    );
  }
  

  return (
    <div className={`navigator ${shouldDisplay ? "" : "hidden"}`}>

      Navigate: 

      {
        referencedSections.map(
          (section, i) => (      

            <div key={i}>
              {createSectionButton(section.reference)}
              {/* <div className='green-line'/> */}
            </div>                         
          )
        )
      }
      
    </div>
  );
}