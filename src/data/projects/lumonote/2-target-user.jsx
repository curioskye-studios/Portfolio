import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  heading: 'Crafting My Experience Into The Target User',
  body: (
    <div className='padded-fully'>
      The project was built on these key assumptions about the user:
      {BrS()}
      <ul>
        {Li(
          <>{Em("Organization, simplicity, approachability")} and {Em("speed")} is highly valued,</>
        )}
        {Li(
          <>The {Em("combination of checklists and other key note elements")} is highly valued,</>
        )}
        {Li(
          <>{Em("Simple, in text images")} is highly valued, and</>
        )}
        {Li(
          <>{Em("Undo and redo")} are {Em("high frequency")} actions.</>
        )}
      </ul>
    </div>
  )
}