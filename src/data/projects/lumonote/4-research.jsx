import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'research',
  heading: 'Research',
  body: (
    <div className='padded-fully'>
      I sought references for {Em("simple note app designs,")} and {Em("analyzed note apps")} like Google Keep Notes to 
      understand their {Em("strengths and weaknesses")} in the context of the problem.
      {BrS()}
      I had these key takeaways from Google Keep Notes:
      {BrS()}
      <ul>
        {Li(
          <>While it was sufficiently {Em("simple, approachable,")} had {Em("note organization")} as well as many
          key note-taking features {Em("(rich text editing, undo and redo system, etc),")}</>
        )}
        {Li(
          <>It had {Em("clear separation between text and other features")} such as {Em("images, checklists, and links,")} limiting the user's ability to customize how information was presented.</>
        )}
      </ul>
    </div>
  )
}