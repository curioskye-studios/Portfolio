import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDetail.css';

import { capitalizer } from '../../utils/textFormatter'; 

import { ALL_PROJECTS } from '../../data/project-overviews';
import { PROJECT_DETAILS } from '../../data/project-details';

import DetailHead from '../../components/ProjectDetail/ProjectHead/ProjectHead';
import DetailBody from '../../components/ProjectDetail/ProjectBody/ProjectBody';

import { SectionRefsContext } from './SectionRefsContext';
import ProjectControl from '../../components/ProjectDetail/ProjectControl/ProjectControl';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function ProjectDetail() {
  const { category, id } = useParams();
  const project = PROJECT_DETAILS[id];

  const [isPast, setIsPast] = useState(false);
  const elementRef = useRef(null); 
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
    if (!elementRef.current) return;
    const { bottom } = elementRef.current.getBoundingClientRect();
    setIsPast(bottom < 0);
  }

  function updateBackground(){
    const skyGradient = 
    ` 
      linear-gradient(180deg,
      #4A8FBF 0%, #6BADD4 40%,
      #82BAD5 65%, #6BADD4 100%)
    `;

    document.body.style.backgroundImage = 'none';
    document.body.style.background = skyGradient;
    // document.body.style.backgroundImage = "url('/blue-background-image-2.webp)";
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
        
        <div ref={elementRef}>
          <DetailHead category={category} id={id} project={project}/>      
        </div>        

        <div className='separator-large' />

        <ProjectControl referencedSections={referencedSections} shouldDisplay={isPast}/>

        <DetailBody project={project} />  

        <div className='separator-large' />

        <div className='detail-bottom row-adaptable' data-aos="fade-up" data-aos-delay="200">
          <Link to="/portfolio" className="btn-primary back-btn" >
            ← Back to Portfolio
          </Link>

          {project.next && (
            <div className="next-project">
              <h5 className='next-project-text'>Explore Another Project:</h5>
              <ProjectCard               
                key={project.id} 
                projectData={ALL_PROJECTS[capitalizer(project.next)]} 
                category={category}                
              />            
            </div>
            /* <Link 
              to={`/portfolio/${category}/${project.next}`} 
              className="btn-primary back-btn">
              Next Project →
            </Link> */
          )}
        </div>

      </div>
    </div>
      
    </SectionRefsContext.Provider>
  );
}