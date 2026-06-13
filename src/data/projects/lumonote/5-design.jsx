import { Em, B, BrS, BrM, BrL, Li, H, A, Img, Crsl } from '../../../utils/jsxContentCreator';
import MainSketchesImg from '../../../assets/ux-projects/lumonote/main-screen-sketches.png';
import MainScreensImg from '../../../assets/ux-projects/lumonote/lumonote-main-screens.png';
import EditNoteSketchImg from '../../../assets/ux-projects/lumonote/note-screen-sketch.png';
import EditNoteScreenImg from '../../../assets/ux-projects/lumonote/lumonote-note-screens.png';
import TagSketchImg from '../../../assets/ux-projects/lumonote/tag-screen-sketch.png';
import TagScreenImg from '../../../assets/ux-projects/lumonote/lumonote-tag-screens.png';


const carouselParts = {
  "Part 1" : {
    Full : (
      <>
        <div className="padded-sides">
          The LumoNote {Em("name")} was the first place I started. My mind wandered:

          <ul>
            {Li(
              <>{Em("Luminous, Illumination + Notes")} ➜ {Em("LumoNote")} ➜ {Em("Illuminate your notes and thoughts")}</>
            )}
          </ul>
          {BrS()}

          With the app's theme and concept in place, I got to work on some low fidelity wireframes
          tailored to the user's needs.        
        </div>

        {BrM()}
      </>
    ),
    Summary : (
      <>              
        {H("The Start")}
        
        {BrS()}

        <div className='padded-sides'>
          Coming up with the "LumoNote" concept: 
          <ul>
            {Li(<>{Em("Luminous")} + {Em("Notes")} → {Em("Illuminate your thoughts")}</>)}
          </ul>        
        </div>
        
        {BrM()}
      </>
    )
  },

  
  "Part 2" : {
    Full : (
      <>
        {H("The Main Screens")}

        {Img(MainSketchesImg, "Sketches of main screens")}

        <div className='padded-sides'>
          This is the first thing the users see when opening the app.
          {BrS()}
          My priority here was to {Em("limit the clutter on screen")} and create a {Em("simple and approachable experience")} to avoid overwhelm.
          {BrS()}

          Key Ideas:
          <ul>
            {Li(
              <>{Em("Notes")} capture the user's eye first as the app's core functionality</>
            )}
            {BrS()}
            {Li(
              <>The {Em("add notes button")} jumps out at you as something to interact with, prompting the user to interact</>
            )}
            {BrS()}
            {Li(
              <>{Em("All possible features are visible")} without feeling crowded and {Em("can be accessed in a simple 1-2 taps")}</>
            )}
            {BrS()}
            {Li(
              <>Viewing any main screen is done by simply {Em("clicking the icon at the bottom")}</>
            )}
          </ul>

          {BrS()}
          
          Visible Features:
          <ul>
            {Li(
              <>{Em("Pinning")} allows note prioritization (organization)</>
            )}
            {BrS()}
            {Li(
              <>The {Em("Calendar")} and {Em("View Notes")} main screens would allow multiple ways of quickly accessing existing notes (speed)</>
            )}
            {BrS()}
            {Li(
              <>{Em("Search")} is another way of quickly finding and accessing existing notes (speed)</>
            )}
          </ul>
        </div>

        {BrM()}
      </>
    ),
    Summary : (
      <>      
        {H("The Main Screens")}

        <div className='padded-sides'>
          {B("Original Sketch:")}
        </div>
        {Img(MainSketchesImg, "Sketches of main screens")}       
      </>
    )
  },

  "Part 3" : {
    Full : (
      <>
        {H("The Main Screens")}

        <div className='padded-sides'>
          The design went through some more changes during the development of the app, applying colors and the like.
          {BrS()}
          The most recent design had a couple key changes.
        </div>

        {Img(MainScreensImg, "Pictures of main screens")}

        {BrM()}
      </>
    ),
    Summary : (
      <>         
        {H("The Main Screens")}

        <div className='padded-sides'>
          {B("Latest Iteration:")}
        </div>
        {Img(MainScreensImg, "Pictures of main screens")}  
      </>
    )
  },

  "Part 4" : {
    Full : (
      <>
        {H("The Note Taking Experience")}

        <div className='padded-sides'>
          {BrS()}
          The Note Screen is where the user spends most of their time.
          {BrS()}
          Due to its importance, I spent a lot of time on this screen with a key focus on {Em("simplicity")} and {Em("approachability.")}
        </div>

        {Img(EditNoteSketchImg, "Sketches of note editing screen")}

        <div className='padded-sides'>
          Key Ideas:
          <ul>
            {Li(
              <>As the {Em("note content is the most important element,")} the note display takes up most of the screen</>
            )}
            {BrS()}
            {Li(
              <>
                The note supports {Em("combinations of different note elements")} (text, images, checklists, etc)
              </>
            )}
            {BrS()}
            {Li(
              <>{Em("Undo and Redo")} supported</>
            )}
            {BrS()}
            {Li(
              <>
                Text formatting is narrowed down to {Em("basic text editing tools,")} but isn't lacking key 
                note-taking features. Decent organization of note content can be accomplished with just {Em("title")} and 
                {Em("subtitle text sizes, bold, italics, underline, clearing font styles ")} and {Em("title.")}
              </>
            )}
          </ul>
        </div>

        {BrM()}
      </>
    ),
    Summary : (
      <>  
        {H("The Note Taking Experience")}

        <div className='padded-sides'>
          {B("Original Sketch:")}
        </div>
        {Img(EditNoteSketchImg, "Sketches of note editing screen")}       
      </>
    )
  },

  "Part 5" : {
    Full : (
      <>
        {H("The Note Taking Experience")}

        <div className='padded-sides'>
          After some testing and overcoming development issues, the design had undergone a few more changes.
        </div>
        
        {Img(EditNoteScreenImg, "Pictures of note taking screen")}

        {BrM()}
      </>
    ),
    Summary : (
      <>    
        {H("The Note Taking Experience")}

        <div className='padded-sides'>
          {B("Latest Iteration:")}
        </div>
        {Img(EditNoteScreenImg, "Pictures of note taking screen")}     
      </>
    )  
  },

  "Part 6" : {
    Full : (
      <>
        {H("The Tag Screen")}

        {BrS()}
        
        <div className='padded-sides'>
          This was a later addition, and is accessible from both the {Em("View Notes")} and {Em("Edit Notes")} Screens.
          {BrS()}

          Key Ideas:
          <ul>
            {Li(
              <>
                To {Em("avoid clutter,")} the tag management functionality is 
                {Em("separated into its own independent screen")}
              </>
            )}
          </ul>

          {BrS()}
          
          Visible Features:
          <ul>
            {Li(
              <>
                The user can easily {Em("delete, rename")} or {Em("add new tags")} for their notes to 
                {Em("help with note organization")}
              </>
            )}
          </ul>
          
          {BrS()}

          At first I wanted to {Em("follow a similar display style")} to how tags were displayed on the 
          {Em("View Notes Screen.")}
        </div>
        
        {Img(TagSketchImg, "Sketch of tag screen")}

        {BrM()}
      </>
    ),
    Summary : (
      <>        
        {H("The Tag Screen")}

        <div className='padded-sides'>
          {B("Original Sketch:")}
        </div>
        {Img(TagSketchImg, "Sketch of tag screen")}   
      </>
    )  
  },

  "Part 7" : {
    Full : (
      <>
        {H("The Tag Screen")}
        
        <div className='padded-sides'>
          {BrS()}
          But after further contemplation and analyzing how similar apps designed this type of screen, 
          I went with a {Em("simple list structure")} instead, keeping things straightforward.
        </div>

        {Img(TagScreenImg, "Picture of tag screen")}

        {BrM()}
      </>
    ),
    Summary : (
      <>      
        {H("The Tag Screen")}

        <div className='padded-sides'>
          {B("Latest Iteration:")}
        </div>
        {Img(TagScreenImg, "Picture of tag screen")}   
      </>
    )  
  },

};


export default 
{      
  type: 'text',
  reference: 'design',
  heading: `Crafting LumoNote's Design`,
  summary: (
    <div className='padded-carousel'>
      {          
        Crsl([
          carouselParts['Part 1'].Summary,
          carouselParts['Part 2'].Summary,
          carouselParts['Part 3'].Summary,
          carouselParts['Part 4'].Summary,
          carouselParts['Part 5'].Summary,
          carouselParts['Part 6'].Summary,
          carouselParts['Part 7'].Summary,
        ])
      }
    </div>
  ),
  body: (
    <div className='padded-carousel'>
      {          
        Crsl([
          carouselParts['Part 1'].Full,
          carouselParts['Part 2'].Full,
          carouselParts['Part 3'].Full,
          carouselParts['Part 4'].Full,
          carouselParts['Part 5'].Full,
          carouselParts['Part 6'].Full,
          carouselParts['Part 7'].Full,
        ])
      }
    </div>
  )
}

