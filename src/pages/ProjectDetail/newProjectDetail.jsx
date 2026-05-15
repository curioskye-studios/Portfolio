import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDetail.css';

import { PROJECT_DETAILS } from '../../data/projectDetails';
import Section from '../../components/ProjectSection/Section'

export default function ProjectDetail() {
  const { category, id } = useParams();
  const project = PROJECT_DETAILS[id];

  const capitalizer = (str) => {return str.charAt(0).toUpperCase() + str.slice(1)};

  if (!project) return <p>Project not found.</p>;

  useEffect(() => {
    document.title = `${capitalizer(category)} | ${capitalizer(id)}`;
    AOS.init({ duration: 700, once: true });

    window.scrollTo(0, 0);

    // document.body.style.backgroundImage = 'none';
    // document.body.style.background = 'linear-gradient(170deg, #4A8FBF 0%, #6BADD4 40%, #9DC8E0 70%, #B8D9ED 100%)';

    // return () => {
    //   document.body.style.background = '';
    //   document.body.style.backgroundImage = "url('/images/blue-background-image.webp')";
    // };
  }, [id]);

  return (
    <div className="project-detail sky-bg">
      <div className="detail-inner">

        {/* Breadcrumb */}
        <nav className="breadcrumb" data-aos="fade-down">
          <Link to="/portfolio">Portfolio</Link>
          <span>›</span>
          <span>{capitalizer(category) + " Work"}</span>
          <span>›</span>
          <span className="green">{capitalizer(id)}</span>
        </nav>

        {/* Header */}
        <div className="detail-header" data-aos="fade-up" data-aos-delay="100">
          <h1 className="detail-title">{project.title}</h1>

          <div className="detail-tags">
            <span className="detail-tag">Tag</span>
          </div>
        </div>

        {/* Description */}
        <div data-aos="fade-up" data-aos-delay="200">          
          <div className='green-line' />
          <div className="detail-description bigger-text">          
            {project.hero.description}
          </div>
          <div className='green-line'/>
        </div>
        
        <div className='separator' />

        <div className='detail-img-wrap'>
          {
            project.hero.img ? ( 
              <img className='detail-img' src={project.hero.img} />
            ) : (
              <div className='detail-img-placeholder' />
            )
          }
        </div>   
        
        <div className='separator' />

        <div data-aos="fade-up" data-aos-delay="200">
          {
            project.sections.map(
              (section, i) => (
                <Section key={i} data={section} />
              )
            )
          }
        </div>

        <Link to="/portfolio" className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
          ← Back to Portfolio
        </Link>

      </div>
    </div>
  );
}