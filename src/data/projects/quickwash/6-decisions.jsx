import { Em, BrS, BrM, BrL, Li, H, A, Img } from '../../../utils/jsxContentCreator';
import DesignColorsImg from '../../../assets/ux-projects/quickwash/quickwash-design-colors.png';

export default 
{      
  type: 'text',
  heading: `Visual Design Decisions`,
  body: (
    <div>      
      <div className='padded-sides padded-top'>
        Since the application revolves around the concept of {Em("cleanliness, organization")} and 
        {Em("water,")} I chose colors and designs that complimented that idea.
      </div>

      {BrS()}

      <div className='padded-sides'>

        <div className='row-adaptable'>
          <div className='even-row-spacing'>
            {Img(DesignColorsImg, "Picture of lumonote's design colors")}
          </div>

          <div className='even-row-spacing padded-left'>
            <ul>
              {Li(
                <>The {Em("saturated blue")} was pulled from the {Em("pre-existing logo design")} 
                  in an attempt to both {Em("increase cohesion")} in the design and represent {Em("water.")} </>
              )}
              {BrS()}
              {Li(
                <>Using {Em("white")} as the main color allows for good contrast with that blue, while 
                  evoking that feeling of something {Em("sterile and clean.")}</>
              )}
              {BrS()}
              {Li(
                <>{Em("Boxy shapes")} were used throughout the UI to create that sense of 
                  {Em("structure and order.")}</>
              )}
              {BrS()}
              {Li(
                <>The {Em("Create")} and {Em("Edit Appointment")} Screens were designed to 
                  {Em("resemble washing machines.")}</>
              )}
            </ul>
          </div>
        </div>       
        
      </div>

      {BrM()}
    </div>
  )
}