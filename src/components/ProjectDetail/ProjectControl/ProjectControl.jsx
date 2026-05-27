import './ProjectControl.css';

import ScrollTopButton from '../../../components/ScrollTopButton/ScrollTopButton';
import ProjectNavigator from '../../../components/ProjectDetail/ProjectNavigator/ProjectNavigator';

export default function ProjectControl( { referencedSections, shouldDisplay } ) {
  
  return (
    <div className={`detail-control ${shouldDisplay ? "" : "hidden-temp"}`}>
      
      <ScrollTopButton moreClasses='top-btn' />
     
      <ProjectNavigator moreClasses='nav-section' referencedSections={referencedSections} />
    </div>
  );
}