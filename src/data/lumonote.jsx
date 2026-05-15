import { Em, Br, Li, H } from '../utils/sectionJSXCreator';
import lumoNoteHeroImg from '../assets/ux-projects/lumonote/lumonote-project.png';

export const LumoNoteData = { 
  title: 'LumoNote.',
  type: "Exploratory Project",
  roles: ["UI/UX Designer", "Frontend Developer", "Backend Developer"],
  date: "Autumn 2025",
  tools: ["Kotlin", "Draw.io", "Pencil & Paper"],
  link: "https://github.com/curioskye-studios/LumoNote",  

  hero: {
    description: (
      <div>
        {Em("LumoNote")} is a {Em("feature rich note-taking mobile app.")}
        {' '}
        It sits in that sweet spot between a simple note-taking app and one that borders on a word processor like Microsoft Word.
        {Br()}
        This was an {Em("exploratory project")} undertaken with a focus on {Em("refining my process")}
        {' '}and {Em("expanding my knowledge and skill")} as both a
        {' '}{Em("UI/UX Designer")} and {Em("Software Developer.")}
      </div>
    ),
    img: lumoNoteHeroImg,
  },

  sections: [
    {      
      heading: 'The Problem',
      body: (
        <div>
          {Em("A note app is an essential tool everyone uses in their day to day.")}

          <ul>
            {Li(
              "Many people like myself use it mostly for thought organization and planning."
            )}
            {Li(
              "For some of those people, the ability to freely combine and customize " + 
              "how note elements are presented is a must, without unnecessarily complex features getting in the way."
            )}
            {Li(
              "However, many note apps are either too simple or too complex, " +
              "sometimes choosing to separate certain note elements into a separate note type altogether."
            )}
          </ul>

          I used this issue as a jumping off point to develop my first prototype of the product for testing.
          
          {Br()}

          {H("Constraints")}
          As both the {Em("designer")} and {Em("developer, ")}
          the outcome was limited by {Em("time")} and {Em("my current skill level.")}
          {Br()}
          Some potential features had to be shelved, and {Em("high impact features were prioritized")} 
          to be developed and tested in a short time frame.
        </div>
      )
    }
  ]
}