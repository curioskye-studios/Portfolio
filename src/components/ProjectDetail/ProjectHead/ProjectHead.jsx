import './ProjectHead.css';
import { Link, useParams } from 'react-router-dom';

import { capitalizer } from '../../../utils/textFormatter'; 

import ImageViewer from '../../ImageViewer/ImageViewer';

export default function DetailHead( { category, id, project } ) {
  
  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb" data-aos="fade-down">
        <Link to="/portfolio">Portfolio</Link>
        <span>›</span>
        <span>{capitalizer(category) + " Work"}</span>
        <span>›</span>
        <span className="green">{capitalizer(id)}</span>
      </nav>

      {/* Description */}
      <div className="detail-header" data-aos="fade-up" data-aos-delay="100">
        <h1 className="detail-title">{project.title}</h1>
        
        <div className='separator-small' />

        <div className='detail-header-body'>
        
          <div className="detail-text-wrap">
            <div className='detail-text-title'>Type: </div>
            <div className='green'>{project.type}</div>              
          </div>

          <div className='separator-small' style={{marginTop: "3px"}}/>

          <div className="detail-text-wrap">
            <div className='detail-text-title'>Roles: </div>
            <div className="detail-tags">
              {project.roles.map(role => (
                <span key={role} className="detail-tag">{role}</span>
              ))}
            </div>
          </div>

          <div className="detail-text-wrap">
            <div className='detail-text-title'>Tools: </div>
            <div className="detail-tags">
              {project.tools.map(tool => (
                <span key={tool} className="detail-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className='separator-small' style={{marginTop: "3px"}}/>

          <div className="detail-text-wrap">
            <div className='detail-text-title'>Date: </div>
            <div className='green'>{project.date}</div>              
          </div>

          <div className="detail-text-wrap">
            <div className='detail-text-title'>Link: </div>
            <Link className='green detail-link' to={project.link}>{project.link}</Link>
          </div>
        </div>   

      </div>

      
      <div className='separator' style={{marginTop: "60px"}} />

      {/* Overview */}
      <div className='overview' data-aos="fade-up" data-aos-delay="200">

        <div>          
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
              <ImageViewer className='detail-img'  imgPath={project.hero.img} />
            ) : (
              <div className='detail-img-placeholder' />
            )
          }
        </div>   
        
      </div>

    </>
  );
}