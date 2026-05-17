import { Em, BrS, BrM, BrL, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'reflection',
  heading: `Reflection`,
  body: (
    <div className='padded-fully'>
      My {Em("biggest takeaways")} from working on QuickWash would be that:

      {BrS()}

      <ul>
        {Li(
          <>Stepping into a role for an existing project really {Em("tested my ability to adapt.")} 
          I had to not only get up to speed by {Em("quickly getting through documentation,")} I had to 
          {Em("ask the right questions.")} Once I had an understanding, I had to build on the project 
          in a way which demonstrated that I understood {Em("what we were trying to achieve.")}</>
        )}
        {BrS()}
        {Li(
          <>Due to the limitations of what was supported by Java's built-in UI libraries, I had to design 
          an interface that {Em("played into the strengths of the software.")} 
          This involved {Em("researching designs of software created with the technology")} as well as 
          {Em("finding creative solutions")} to achieve a more modern look and feel.</>
        )}
        {BrS()}
        {Li(
          <>While the initial design of the interface was {Em("fragmented,")} these previous attempts 
          {Em("gave me a better understanding")} of {Em("how we were trying to solve the problem")} from 
          multiple perspectives. I was very intentional to {Em("pull the best parts from each attempt")} 
          to create a design that was more {Em("unified in how it communicated with the user,")} but was still 
          clearly built on the progress of previous iterations.</>
        )}
        {BrS()}
        {Li(
          <>The fragmentation itself taught me the {Em("importance of establishing a single visual direction")} 
          before a team splits design work. This {Em("saves a lot of rework")} down the line.</>
        )}
      </ul>
    </div>
  )
}