import './ProjectBody.css';
import Section from '../ProjectSection/Section'

export default function DetailBody( { project } ) { 

  return (
    <>   
      {/* Sections */}
      <div className='separator' style={{marginTop: "-30px"}} />

      <div data-aos="fade-up" data-aos-delay="200">          
        <div className='green-line' />         
        {
          project.sections.map(
            (section, i) => (      
              <div key={i} data-aos="fade-up" data-aos-delay="100">
                <Section data={section}/>
              </div>                         
            )
          )
        }
      </div>
    </>
  );
}