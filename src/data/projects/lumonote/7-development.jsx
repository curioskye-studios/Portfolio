import { Em, BrS, BrM, BrL, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  heading: `Development`,
  body: (
    <div className='padded-sides padded-top'>
      I built the project using {Em("Kotlin")} for the functionality and {Em("XML Layouts")} for the UI. 
      I was {Em("new to mobile design and development")} when I started, and being both the 
      designer and developer had a real effect on my design decisions.

      {BrS()}

      <ul>
        {Li(
          <>My {Em("lack of experience with the platform")} made it difficult to {Em("accurately assess")} how possible 
          it would be implement certain features in the way I had designed them.</>
        )}
        {BrS()}
        {Li(
          <>I found myself going back to {Em("simplify elements of the design")} so they could be implemented and 
          tested within the time frame. However, I see this as a {Em("constraint that pushed me toward simpler solutions")} rather than a failure.</>
        )}
        {BrS()}
        {Li(
          <>Many times this turned out well for the project and {Em("forced me to get more creative.")} 
          I believe building this skill only serves me well for future projects.</>
        )}
      </ul>

      The project can be found here: {A("https://github.com/curioskye-studios/LumoNote", "LumoNote on Github")}      
      {BrS()}
      My medium article goes into the developer perspective more: 
      {A("https://medium.com/@curioskye.studios/building-my-all-in-one-note-app-what-i-learned-f3b7094a92d0", 
        "Building My All-in-one Note App: What I Learned")} 
      
      {BrL()}
    </div>
  )
}