import { Em, BrS, BrM, BrL, Li, H, A, Img } from '../../../utils/jsxContentCreator';
import OldDesignImg from '../../../assets/ux-projects/quickwash/quickwash-old-designs.png';
import StartScreensImg from '../../../assets/ux-projects/quickwash/quickwash-login-password.png';
import RsdtStaffScreensImg from '../../../assets/ux-projects/quickwash/quickwash-resident-staff.png';
import AddEditScreensImg from '../../../assets/ux-projects/quickwash/quickwash-add-edit.png';
import AdminScreensImg from '../../../assets/ux-projects/quickwash/quickwash-admin-account.png';

export default 
{      
  type: 'text',
  reference: 'design',
  heading: `Revamping QuickWash's Design`,
  body: (
    <div>

      <div className="padded-left padded-top padded-right">
        When I was brought onto the team, the project had {Em("fragmented designs")} across different screens.
        This was due to how the {Em("workload was initially split")} among the team.

        {BrS()}

        {Em("Key features of the old design:")}
      </div>

      {Img(OldDesignImg, "Pictures featuring old fractured designs")}

      <div className='padded-sides'>
        The Core Implementations:
        {BrS()}
        <ul>
          {Li(
            <>{Em("Login Screen")} - ensure secure access to the system</>
          )}
          {BrS()}
          {Li(
            <>{Em("Create User Screens")} - add different user types to the system</>
          )}
          {BrS()}
          {Li(
            <>{Em("Resident Screen")} - options to add and edit wash appointment details</>
          )}
          {BrS()}
          {Li(
            <>{Em("Staff Screen")} - options to view wash appointments, make machine reports</>
          )}
          {BrS()}
          {Li(
            <>{Em("Admin Screen")} - options to create and view wash income reports</>
          )}
        </ul>
      </div>
      
      {BrM()}

      {H("Revamped Design")}

      {BrS()}

      <div className='padded-sides'>
        As I reviewed the designs and set to work on creating a new design, my focus was on 
        {Em("reducing redundancies")} and creating a {Em("straightforward, cohesive user interface")} 
        and {Em("experience")} that borrowed the best elements of previous iterations.
      </div>

      {Img(StartScreensImg, "Pictures of login and forgot password screens")}

      <div className='padded-sides'>
        The interface was generally revamped to have a {Em("consistent structure")} and 
        {Em("design.")} {Em("Icons were included")} to enhance its {Em("readability")} 
        and {Em("approachability.")}

        {BrS()}

        Welcome/Login Screen Key Changes:
        {BrS()}
        <ul>
          {Li(
            <>{Em("Centralized")} access to {Em("all user management")} into a single screen: 
            {Em("login, create account, forgot password")}</>
          )}
          {Li(
            <>Added {Em("button to toggle password visibility")} to make login easier</>
          )}
        </ul>
      </div>

      {BrM()}

      {Img(RsdtStaffScreensImg, "Pictures of resident and staff dashboard screens")}

      <div className='padded-sides'>
        Resident & Staff Screen Key Changes:

        {BrS()}

        <ul>
          {Li(
            <>Kept {Em("all appointment management features to the left")} to improve identification of related actions</>
          )}
          {Li(
            <>Added {Em("section to display appointment")} details to reduce clutter after more data fields were added</>
          )}
        </ul>
      </div>

      {BrM()}

      {Img(AddEditScreensImg, "Pictures of add and edit screens")}

      <div className='padded-sides'>
        Appointment Management Screens Key Changes:

        {BrS()}

        <ul>
          {Li(
            <>The screens were {Em("reduced")} to a {Em("small concise")} popup window</>
          )}
          {Li(
            <>The screens are {Em("designed to look similar")} to increase ease of navigation</>
          )}
        </ul>
      </div>

      {BrM()}

      {Img(AdminScreensImg, "Pictures of admin and create account screens")}

      <div className='padded-sides'>
        Create Account Screen Key Changes:

        {BrS()}

        <ul>
          {Li(
            <>{Em("Centralized")} the {Em("creation of all 3 account types")} into a single screen</>
          )}
          {Li(
            <>Quick {Em("navigation back to login")}</>
          )}
        </ul>
      </div>

      {BrL()}
    </div>
  )
}