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
          
          <div className='separator-small' />

          <div className='detail-header-body'>
            <div className="detail-text-wrap">
              <div className='detail-text-title'>Type: </div>
              <div className='green'>{project.type}</div>              
            </div>

            <div className="detail-text-wrap">
              <div className='detail-text-title'>Roles: </div>
              <div className="detail-tags">
                {project.roles.map(role => (
                  <span key={role} className="detail-tag">{role}</span>
                ))}
              </div>
            </div>

            <div className="detail-text-wrap">
              <div className='detail-text-title'>Date: </div>
              <div className='green'>{project.date}</div>              
            </div>

            <div className="detail-text-wrap">
              <div className='detail-text-title'>Tools: </div>
              <div className="detail-tags">
                {project.tools.map(tool => (
                  <span key={tool} className="detail-tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="detail-text-wrap">
              <div className='detail-text-title'>Link: </div>
              <Link className='green' to={project.link}>{project.link}</Link>
            </div>
          </div>   
          
        </div>

        <div className='separator-large' />

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
          <div className='green-line' />         
          {
            project.sections.map(
              (section, i) => (      
                <div key={i} data-aos="fade-up" data-aos-delay="200">
                  {/* { i > 0 && project.sections[i - 1].type !== "text" 
                      ? (
                          <div className='green-line' /> 
                      ) : null 
                  } */}
                  <Section data={section} />
                </div>                         
              )
            )
          }
        </div>

        <div className='detail-bottom'>
          <Link to="/portfolio" className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
            ← Back to Portfolio
          </Link>

          {project.next && (
            <Link 
              to={`/portfolio/${category}/${project.next}`} 
              className="btn-primary back-btn" data-aos="fade-up" data-aos-delay="400">
              Next Project →
            </Link>
          )}
        </div>

        

      </div>
    </div>
  );
}