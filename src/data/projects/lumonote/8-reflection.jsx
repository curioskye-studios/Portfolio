import { Em, BrS, BrM, BrL, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'reflection',
  heading: `Outcome & Reflection`,
  body: (
    <div className='padded-fully'>
      I attempted to {Em("use the prototype in my day to day")} to test its long term usability.

      Some things stood out to me in particular:
      {BrS()}      
      <ul>
        {Li(
          <>Due to the complexities of text editing in android, a lot more work needs to be put in to {Em("stabilize the note elements")} so they behave more predictibly when used with each other.</>
        )}
        {BrS()}
        {Li(
          <>There needs to be {Em("more error messages and other forms of feedback")} so the user is well informed of the state of things within the app to lower confusion.</>
        )}
        {BrS()}
        {Li(
          <>I {Em("barely used the Calendar screen,")} so it wasn't ultimately contributing to the goals of the app as much as I hoped it would. It can be replaced with a more useful feature.</>
        )}
      </ul>
      
      {BrM()}

      My biggest takeaways from working on LumoNote would be that:
      {BrS()}      
      <ul>
        {Li(
          <>Further research into the target user would have allowed for a {Em("more accurate mapping of problem to solution,")} something I highly value.</>
        )}
        {BrS()}
        {Li(
          <>Building what I designed gave me a much more {Em("grounded sense of what is actually practical in UI and UX decisions.")} I'll carry that into future projects even when I'm not the developer.</>
        )}
        {BrS()}
        {Li(
          <>I also learned that {Em("documenting as I go would have made writing on LumoNote much easier,")} especially regarding collecting design iterations and tracking my decisions and reasoning. I'll be sure to be more diligent with this.</>
        )}
      </ul>
    </div>
  )
}