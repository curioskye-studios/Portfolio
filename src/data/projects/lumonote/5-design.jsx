import { Em, BrS, BrM, BrL, Li, H, A, Img } from '../../../utils/jsxContentCreator';
import MainSketchImg from '../../../assets/ux-projects/lumonote/main-screen-sketches.png';
import MainScreenImg from '../../../assets/ux-projects/lumonote/lumonote-main-screens.png';

export default 
{      
  type: 'text',
  reference: 'design',
  heading: `Crafting LumoNote's Design`,
  body: (
    <div>
      The LumoNote name was the first place I started. My mind wandered:

      <ul>
        {Li(
          "Luminous, Illumination + Notes ➜ LumoNote ➜ Illuminate your notes and thoughts"
        )}
      </ul>
      {BrS()}

      With the app's theme and concept in place, I got to work on some low fidelity wireframes
      tailored to the user's needs.

      {BrS()}

      {H("The Main Screens")}

      {Img(MainSketchImg, "Sketches of main screens")}

      This is the first thing the users see when opening the app.
      {BrS()}
      My priority here was to limit the clutter on screen and create a simple and approachable 
      experience to avoid overwhelm.
      {BrS()}

      Key Ideas:
      <ul>
        {Li(
          "Notes capture the user's eye first as the app's core functionality"
        )}
      {BrS()}
        {Li(
          "The add notes button jumps out at you as something to interact with, prompting the user to interact"
        )}
      {BrS()}
        {Li(
          "All possible features are visible without feeling crowded and can be accessed in a simple 1-2 taps"
        )}
      {BrS()}
        {Li(
          "Viewing any main screen is done by simply clicking the icon at the bottom"
        )}
      </ul>

      {BrS()}
      
      Visible Features:
      <ul>
        {Li(
          "Pinning allows note prioritization (organization)"
        )}
      {BrS()}
        {Li(
          "The add notes button jumps out at you as something to interact with, prompting the user to interact"
        )}
      {BrS()}
        {Li(
          "Search is another way of quickly finding and accessing existing notes (speed)"
        )}
      </ul>
      
      {BrM()}

      The design went through some more changes during the development of the app, applying colors and the like.
      {BrS()}
      The most recent design had a couple key changes.
      {BrS()}

      {Img(MainScreenImg, "Pictures of main screens")}

      {H("The Note Taking Experience")}


    </div>
  )
}