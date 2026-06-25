import './ProjectCard.css'

import { Link } from 'react-router-dom';
import { useRef } from 'react';

import RightArrow from '../Icons/RightArrow';
import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

export default function ProjectCard({ projectData, category, cardAOSDelay = 100, otherConfigs = {}}) {

  /*
    projectData:
      id: 'lumonote',
      type: 'Mobile Application',
      summary: 'A Robust But Simple Note-Taking Mobile App.',
      img: lumoNoteImg,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      link: '/gallery/lumonote',
      columnNum: 1
  */

  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    // cardRef.current.scrollIntoView({ 
    //   behavior: 'smooth', 
    //   block: 'center' 
    // });
  };

  const projectImage = 
    projectData.img ? (
      <img src={projectData.img} alt={projectData.summary} className="project-img" />
    ) : (
      <div
        className="project-img-placeholder"
        style={{ background: projectData.imgPlaceholder.bg }}
      >
        <span style={{
          fontFamily: 'Space Grotesk',
          fontWeight: 900,
          fontSize: '1.4rem',
          color: projectData.imgPlaceholder.bg === '#ffffff' ? '#1a4a7a' : '#1a1a1a'
        }}>
          {projectData.imgPlaceholder.label}
        </span>
      </div>
    );

  const otherClasses = otherConfigs.cardClasses? otherConfigs.cardClasses : "";
  const customStyle = otherConfigs.cardStyle? otherConfigs.cardStyle : null;

  return (
    <Link
      to={`/gallery/${category}/${projectData.id}`}

      key={projectData.id}
      className={`project-card ${otherClasses}`}
      style={customStyle}
      ref={cardRef} 
      onMouseEnter={handleMouseEnter}

      data-aos="fade-up"
      data-aos-delay={cardAOSDelay}
      data-aos-once="true">

      {/* Card Body */}
      <div className="project-body">   

        <div className="project-header">
          <span className="project-type-badge">{projectData.type}</span>

          <ArrowButton 
            shouldSpin={true} 
            hasText={false} 
          />
        </div>     

        <h4 className="project-summary">{projectData.summary}</h4>
      </div>

      {/* Project Image */}
      <div className="project-img-wrap">
        {projectImage}
      </div>
    </Link>
  );
}