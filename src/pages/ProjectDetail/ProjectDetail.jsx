import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectDetail.css';

import { capitalizer } from '../../utils/textFormatter'; 

import { PROJECT_DETAILS } from '../../data/project-details';

import DetailHead from '../../components/ProjectDetail/DetailHead';
import DetailBody from '../../components/ProjectDetail/DetailBody';

export default function ProjectDetail() {
  const { category, id } = useParams();
  const project = PROJECT_DETAILS[id];

  useEffect(() => {
    document.title = `${capitalizer(category)} | ${capitalizer(id)}`;
    AOS.init({ duration: 700, once: true });

    if (!project) {
      document.body.style.backgroundImage = 'none';
    } else {
      updateBackground();
    }

    return () => {
      resetBackground();
    };
  }, [id]);

  function updateBackground(){
    const skyGradient = 
    ` 
      linear-gradient(180deg,
#4A8FBF 0%, #6BADD4 40%,
#82BAD5 65%, #6BADD4 100%)
    `;

    document.body.style.backgroundImage = 'none';
    document.body.style.background = skyGradient;
    // document.body.style.backgroundImage = "url('/images/hazy-horizon.svg)";
  }
  function resetBackground() {    
    document.body.style.background = '';
    document.body.style.backgroundImage = "url('/images/blue-background-image.webp')";
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
    <div className="project-detail sky-bg">
      <div className="detail-inner">

        <DetailHead category={category} id={id} project={project}/>

        <div className='separator-large' />

        <DetailBody project={project} />

        <div className='separator-large' />

        <div className='detail-bottom' data-aos="fade-up" data-aos-delay="200">
          <Link to="/portfolio" className="btn-primary back-btn" >
            ← Back to Portfolio
          </Link>

          {project.next && (
            <Link 
              to={`/portfolio/${category}/${project.next}`} 
              className="btn-primary back-btn">
              Next Project →
            </Link>
          )}
        </div>

        

      </div>
    </div>
  );
}