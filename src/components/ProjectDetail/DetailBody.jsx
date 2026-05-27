import './DetailBody.css';
import Section from '../../components/ProjectSection/Section'

export default function DetailBody( { project } ) { 

  return (
    <>   
      {/* Sections */}
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