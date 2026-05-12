import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { PROJECTS } from '../../data/projects';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('design');

  useEffect(() => {
    document.title = 'Portfolio | CurioSkye Studios';
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  function handleTabClick(newTab) {
    setActiveTab(newTab);
  }

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
            onClick={() => handleTabClick('design')}
          >
            UI/UX Design Work
          </button>

          <button
            className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => handleTabClick('software')}
          >
            Software Dev Work
          </button>
        </div>

        {/* Project Grid */}
        <div className="projects-grid d-lg-">
          {
            PROJECTS[activeTab].length === 0 
            && 
            (
              <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', gridColumn: '1/-1' }}>
                Projects coming soon!
              </p>
            )
          } 

          {
            PROJECTS[activeTab].map(
              (project, i) => (
                <ProjectCard key={project.id} projectData={project} cardAOSDelay={100 * (i + 1)} />
              )
            )
          }
        </div>

      </div>

    </div>
  );
}
