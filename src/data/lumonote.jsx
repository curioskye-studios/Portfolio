import { Em, Br, Li, H, A } from '../utils/sectionJSXCreator';
import lumoNoteHeroImg from '../assets/ux-projects/lumonote/lumonote-project.png';
import NotesImg from '../assets/ux-projects/lumonote/notes-image.jpg';

export const LumoNoteData = { 
  next: 'quickwash',
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
      type: 'text',
      reference: 'problem',
      heading: 'The Problem',
      body: (
        <div>
          {Em("A note app is an essential tool everyone uses in their day to day.")}
          {Br()}
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
          {Br()}
          As both the {Em("designer")} and {Em("developer, ")}
          the outcome was limited by {Em("time")} and {Em("my current skill level.")}
          {Br()}
          Some potential features had to be shelved, and {Em("high impact features were prioritized")} 
          to be developed and tested in a short time frame.
        </div>
      )
    },
    {      
      type: 'text',
      heading: 'Crafting My Experience Into The Target User',
      body: (
        <div>
          The project was built on these key assumptions about the user:
          {Br()}
          <ul>
            {Li(
              "Organization, simplicity, approachability and speed is highly valued,"
            )}
            {Li(
              "The combination of checklists and other key note elements is highly valued,"
            )}
            {Li(
              "Simple, in text images is highly valued, and"
            )}
            {Li(
              "Undo and redo are high frequency actions."
            )}
          </ul>
        </div>
      )
    },
    {
      type: 'image',
      link: NotesImg,
      caption: (
        <div>
          Photo by {' '}
          {A(
            "https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            "Brett Jordan"
          )}
          on {' '}
          {A(
            "https://unsplash.com/photos/white-and-blue-google-logo-aJ08i9-5k7E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            "Unsplash"
          )} 
        </div>
      )
    },
    {      
      type: 'text',
      reference: 'research',
      heading: 'Research',
      body: (
        <div>
          I sought references for simple note app designs, and analyzed note apps like Google Keep Notes to 
          understand their strengths and weaknesses in the context of the problem.
          I had these key takeaways from Google Keep Notes:
          {Br()}
          <ul>
            {Li(
              "While it was sufficiently simple, approachable, had note organization as well as many" + 
              "key note-taking features (rich text editing, undo and redo system, etc),"
            )}
            {Li(
              "It had clear separation between text and other features such as images, checklists," +
              "and links, limiting the user's ability to customize how information was presented."
            )}
          </ul>
        </div>
      )
    },
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
          {Br()}

          With the app's theme and concept in place, I got to work on some low fidelity wireframes
          tailored to the user's needs.
        </div>
      )
    },
    {      
      type: 'text',
      heading: `Visual Design Decisions`,
      body: (
        <div>
          The concept of illuminating the user's thoughts was combined with a sleek, modern look and 
          high contrast so everything jumps out at you.
          With the app's theme and concept in place, I got to work on some low fidelity wireframes
          tailored to the user's needs.
          {Br()}
          Conceptually, it can be seen as elements shining or glowing (are luminous) against the dark background.
        </div>
      )
    },
    {      
      type: 'text',
      heading: `Development`,
      body: (
        <div>
          I built the project using Kotlin for the functionality and XML Layouts for the UI. 
          I was new to mobile design and development when I started, and being both the 
          designer and developer had a real effect on my design decisions.
        </div>
      )
    },
    {      
      type: 'text',
      reference: 'reflection',
      heading: `Outcome & Reflection`,
      body: (
        <div>
          I attempted to use the prototype in my day to day to test its long term usability.

          Some things stood out to me in particular:
          {Br()}

        </div>
      )
    },
  ]
}