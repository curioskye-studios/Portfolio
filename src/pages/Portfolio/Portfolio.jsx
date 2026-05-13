import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { PROJECTS } from '../../data/projects';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('design');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    document.title = 'Portfolio | CurioSkye Studios';
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

    window.addEventListener('resize', 
      () => handleWindowResize(window.innerWidth)
    );
    // function clean up
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  function handleTabClick(newTab) {
    setActiveTab(newTab);
  }

  function handleWindowResize(windowWidth) {
    setIsMobile(windowWidth <= 700);
  }

  function createProjectCard(project, projectCount) {
    return (      
      <ProjectCard 
        key={project.id} 
        projectData={project} 
        cardAOSDelay={100 * (projectCount + 1)} 
        cardStyle={{ gridColumn: project.column }}                 
      />
    );
  }

  const col1Projects = 
    PROJECTS[activeTab].filter(
      project => isMobile || project.columnNum === 1
    );
  const col2Projects = 
    PROJECTS[activeTab].filter(
      project => project.columnNum === 2
  );
  const isEmpty = PROJECTS[activeTab].length === 0;

  return (
    <div className="portfolio sky-bg">
      
      <div className="portfolio-inner">
        
        <p className="page-label green portfolio-letter-spacing" data-aos="fade-down">
          Portfolio
        </p>
        <h1 className="portfolio-title" data-aos="fade-up" data-aos-delay="100">
          Welcome To The{' '}
          <span className="green">CurioSkye <br /> Studios</span> Gallery.
        </h1>
        <p className="page-sub" data-aos="fade-up" data-aos-delay="200">
          Feel free to take a look around!
        </p>

        {/* Tabs */}
        <div className="portfolio-tabs" data-aos="fade-up" data-aos-delay="300">
          <button
            className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => handleTabClick('design')} >
              UI/UX Design Work
          </button>

          <button
            className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => handleTabClick('software')} >
              Software Dev Work
          </button>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {
            isEmpty ? 
            ( <p className="no-project">Projects coming soon!</p> ) 
            : 
            (
              <>
                <div className="projects-col">
                  {col1Projects.map((project, i) => createProjectCard(project, i))}
                </div>

                {
                  !isMobile &&
                  (
                    <div className="projects-col">
                      {col2Projects.map((project, i) => createProjectCard(project, i))}
                    </div>
                  )
                }
              </>
            )
          }
        </div>

      </div>

    </div>
  );
}
