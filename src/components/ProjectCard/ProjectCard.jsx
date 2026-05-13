import './ProjectCard.css'
import { Link } from 'react-router-dom';
import RightArrow from '../RightArrow';

export default function ProjectCard({ projectData, cardAOSDelay, cardStyle }) {

  /*
    id: 'lumonate',
    type: 'Mobile Application',
    title: 'A Robust But Simple Note-Taking Mobile App.',
    imgLink: null,
    link: '/portfolio/lumonate',
  */

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
      to={projectData.link}
      key={projectData.id}
      className="project-card"
      style={cardStyle}
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