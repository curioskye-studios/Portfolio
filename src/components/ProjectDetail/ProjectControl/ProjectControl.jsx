import './ProjectControl.css';

import ScrollTopButton from '../../../components/Buttons/TopScrollButton/TopScrollButton';
import ProjectNavigator from '../../../components/ProjectDetail/ProjectNavigator/ProjectNavigator';

export default function ProjectControl( { referencedSections, shouldDisplay } ) {
  
  return (
    <div 
      className={`detail-control ${shouldDisplay ? "" : "hidden-temp"}`}
      inert={!shouldDisplay ? "" : undefined}
    >      
      <ScrollTopButton moreClasses='top-btn' />
    
      <ProjectNavigator 
        moreClasses="nav-section"
        referencedSections={referencedSections} 
      />
    </div>
  );
}