import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDetail.css';

import { capitalizer } from '../../utils/textFormatter'; 

import { getProjectOverview } from '../../data/project-overviews';
import { PROJECT_DETAILS } from '../../data/project-details';

import DetailHead from '../../components/ProjectDetail/ProjectHead/ProjectHead';
import DetailBody from '../../components/ProjectDetail/ProjectBody/ProjectBody';

import { SectionRefsContext } from './SectionRefsContext';
import ProjectControl from '../../components/ProjectDetail/ProjectControl/ProjectControl';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ArrowButton from '../../components/Buttons/ArrowButton/ArrowButton';

export default function ProjectDetail() {
  const { category, id } = useParams();
  const project = PROJECT_DETAILS[id];

  const [shouldDisplay, setShouldDisplay] = useState(false);
  const appearElementRef = useRef(null); 
  const disappearElementRef = useRef(null); 
  const sectionRefs = useRef({});

  const referencedSections = 
    project.sections.filter(
      (section) => section.reference
    ); 

  useEffect(() => {
    pageSetup();

    if (!project) {
      document.body.style.backgroundImage = 'none';
    } else {
      updateBackground();
    }
    
    window.addEventListener("scroll", onScroll);

    return () => {
      resetBackground();
      window.removeEventListener("scroll", onScroll);
    };
  }, [id]);

  function pageSetup() {    
    document.title = `${capitalizer(category)} | ${capitalizer(id)}`;
    AOS.init({ duration: 700, once: true });
    
    window.scrollTo(0, 0);
  }

  function onScroll() {
    if (!appearElementRef.current || !disappearElementRef.current) return;

    const { bottom: appearElBottom } = appearElementRef.current.getBoundingClientRect(); 
    const { top: disappearElTop } = disappearElementRef.current.getBoundingClientRect();

    const isAppearElVisible = appearElBottom < 0;
    const isDisappearElVisible = disappearElTop < window.innerHeight; 

    const shouldDisplayVal = isAppearElVisible && !isDisappearElVisible;

    setShouldDisplay(prev => {
      return prev !== shouldDisplayVal ? shouldDisplayVal : prev;
    });
  }

  function updateBackground(){
    const skyGradient = 
      `
        linear-gradient(-225deg, #4A8FBF 0%, #6BADD4 40%, #82BAD5 65%, #6BADD4 100%)
      `

    document.body.style.backgroundImage = skyGradient;
  }
  function resetBackground() {    
    document.body.style.background = '';
    document.body.style.backgroundImage = "url('/blue-background-image.webp')";
  }

  if (!project) {
    return (
      <div style={{display:"flex", flexDirection:"column", margin:"0 auto"}}> 
        <div className='separator-large' />
        <h4 className='text-center mt-5'>Sorry, couldn't find that Project :(</h4>

        <div className='separator-large' />

        <Link to="/portfolio" style={{width:"fit-content", margin:"0 auto"}} className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <SectionRefsContext.Provider value={sectionRefs}>

    <div className="project-detail sky-bg">
      <div className="detail-inner">
        
        <div ref={appearElementRef}>
          <DetailHead category={category} id={id} project={project}/>      
        </div>        

        <div className='separator-large' />

        <ProjectControl referencedSections={referencedSections} shouldDisplay={shouldDisplay}/>
        
        <DetailBody project={project} />  

        <div className='separator-large' />

        <div 
          className='detail-bottom row-adaptable' 
          data-aos="fade-up" data-aos-delay="200"
          ref={disappearElementRef}>

          <ArrowButton 
            linkPath="/portfolio" className="back-btn" isRight={false}> 
              Back to Portfolio
          </ArrowButton>

          {project.next && (
            <div className="next-project">
              <h5 className='next-project-text'>Explore Another Project:</h5>

              <ProjectCard               
                key={project.id} 
                projectData={getProjectOverview(project.next)} 
                category={category}                
              />            
            </div>
          )}
        </div>        

      </div>      
    </div>
      
    </SectionRefsContext.Provider>
  );
}