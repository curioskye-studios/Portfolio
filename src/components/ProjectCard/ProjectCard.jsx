import './ProjectCard.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import RightArrow from '../RightArrow';

export default function ProjectCard({ projectData, category, cardAOSDelay, cardStyle }) {

  /*
    projectData:
      id: 'lumonote',
      type: 'Mobile Application',
      title: 'A Robust But Simple Note-Taking Mobile App.',
      img: lumoNoteImg,
      imgPlaceholder: { bg: '#F5C518', label: 'LumoNote.' },
      link: '/portfolio/lumonote',
      columnNum: 1
  */

  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    cardRef.current.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  };

  const projectImage = 
    projectData.img ? (
      <img src={projectData.img} alt={projectData.title} className="project-img" />
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

  return (
    <Link
      to={`/portfolio/${category}/${projectData.id}`}

      key={projectData.id}
      className="project-card"
      style={cardStyle}
      ref={cardRef} 
      onMouseEnter={handleMouseEnter}

      data-aos="fade-up"
      data-aos-delay={cardAOSDelay}
      data-aos-once="true">

      {/* Card Body */}
      <div className="project-body">   

        <div className="project-header">
          <span className="project-type-badge">{projectData.type}</span>

          <div className="project-btn">
            <RightArrow className="rotate-right" />
          </div>
        </div>     

        <h4 className="project-title">{projectData.title}</h4>
      </div>

      {/* Project Image */}
      <div className="project-img-wrap">
        {projectImage}
      </div>
    </Link>
  );
}