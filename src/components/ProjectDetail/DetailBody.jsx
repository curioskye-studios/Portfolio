import './DetailBody.css';
import Section from '../../components/ProjectSection/Section'

export default function DetailBody( { project } ) { 

  return (
    <>
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
      
      <div className='separator' style={{marginTop: "60px"}} />

      <div data-aos="fade-up" data-aos-delay="200">          
        <div className='green-line' />         
        {
          project.sections.map(
            (section, i) => (      
              <div key={i} data-aos="fade-up" data-aos-delay="100">
                {/* { i > 0 && project.sections[i - 1].type !== "text" 
                    ? (
                        <div className='green-line' /> 
                    ) : null 
                } */}
                <Section data={section}/>
              </div>                         
            )
          )
        }
      </div>
    </>
  );
}