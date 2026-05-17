import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  heading: "Supporting The Current System",
  body: (
    <div className='padded-fully'>
      The current system involves interactions between {Em("3 main types of people:")}

      {BrS()}

      <ul>
        {Li(
          <>The {Em("Resident")} - books and modifies wash appointments</>
        )}
        {Li(
          <>The {Em("Staff")} - services wash appointments, reports issues with the machines using an external system</>
        )}
        {Li(
          <>The {Em("Manager/Supervisor")} - collects reports on generated income from wash appointments</>
        )}
      </ul>

      {BrS()}

      The proposed system would be {Em("designed to support these activities")} for each type of user.
    </div>
  )
}