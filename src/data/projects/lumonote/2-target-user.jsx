import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  heading: 'Crafting My Experience Into The Target User',
  body: (
    <div>
      The project was built on these key assumptions about the user:
      {BrS()}
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
}