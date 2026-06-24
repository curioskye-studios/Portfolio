import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'research',
  heading: 'Research',
  body: (
    <div className='padded-fully'>
      The team had conducted this phase before I joined the team, so I was not as involved here.

      {BrS()}

      However, this process involved {Em("getting first hand accounts")} from a team member that lived on the 
      affected George Alleyne Hall (among others) to {Em("understand the current way things were done")} 
      and what the {Em("day to day of each type of user looked like.")}

      {BrS()}

      This would be later mapped to how they needed to interact with the system.
    </div>
  )
}