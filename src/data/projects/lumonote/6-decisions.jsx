import { Em, BrS, BrM, BrL, Li, H, A, Img, HoM } from '../../../utils/jsxContentCreator';
import DesignColorsImg from '../../../assets/ux-projects/lumonote/lumonote-design-colors.png';
import DesignFontsImg from '../../../assets/ux-projects/lumonote/lumonote-design-font.png';


export default 
{      
  type: 'text',
  heading: `Visual Design Decisions`,
  body: (
    <div>
      <div className='padded-sides padded-top'>
        The concept of {Em("illuminating the user's thoughts")} was combined with a {Em("sleek, modern look and high contrast")}
        so everything jumps out at you.
        {BrS()}
        Conceptually, it can be seen as {Em("elements shining or glowing (are luminous)")} against the dark background.
      </div>

      {BrS()}

      <div className='padded-sides'>

        <div className='row-adaptable'>
          <div className='even-row-spacing'>
            {Img(DesignColorsImg, "Picture of lumonote's design colors")}
          </div>

          <div className='padded-left even-row-spacing'>
            The {Em("golden yellow gives off a warm feeling")} and is striking against a {Em("cooler, blue-black background.")}
            {BrS()}
            The {Em("light elements on a dark background")} also {Em("reduces eye strain.")} Note-taking can be a screen intensive task.
          </div>
        </div>

        {HoM(<> {BrM()} </>)}
        {BrS()}

        <div className='row-adaptable'>
          <div className='even-row-spacing'>
            {Img(DesignFontsImg, "Picture of lumonote's font")}
          </div>

          <div className='padded-left even-row-spacing'>
            The {Em("Inter")} font:
            <ul>
              {Li(<>is very {Em("easy to read,")}</>)}
              {Li(<>supports {Em("bold, italics, underline")} and different types of {Em("capitalization,")}</>)}
              {Li(<>and gives a {Em("clean, modern tech feel.")}</>)}
            </ul>
          </div>
        </div>
        
      </div>

      {BrM()}
    </div>
  )
}