import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'research',
  heading: 'Research',
  body: (
    <div>
      I sought references for simple note app designs, and analyzed note apps like Google Keep Notes to 
      understand their strengths and weaknesses in the context of the problem.
      {BrS()}
      I had these key takeaways from Google Keep Notes:
      {BrS()}
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
}