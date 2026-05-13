import './ProjectCard.css'
import ArrowButton from '../ArrowButton';

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
    <div
      key={projectData.id}
      className="project-card"
      style={cardStyle}
      data-aos="fade-up"
      data-aos-delay={cardAOSDelay}
      data-aos-once="true">

      {/* Project Image */}
      <div className="project-img-wrap">
        {projectImage}
      </div>

      {/* Card Body */}
      <div className="project-body">

        <span className="project-type-badge">{projectData.type}</span>
        <h3 className="project-title">{projectData.title}</h3>

        <ArrowButton 
          linkPath={projectData.link} className="project-btn"> 
            Dive Into Design
        </ArrowButton>
      </div>

    </div>
  );
}