import { Em, BrS, BrM, BrL, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'problem',
  heading: 'The Problem',
  body: (
    <div className='padded-fully'>

      138 Student Living Jamaica Limited (138SL) is a Jamaican company that provides student accommodations at the 
      {Em("UWI Mona campus,")} including the George Alleyne Hall.
      {BrS()}
      As part of the accommodations, 138SL provides {Em("laundry services")} to its residents.

      {BrS()}

      However, many George Alleyne Hall residents {Em("find these laundry services tedious to navigate.")}
      {BrS()}
      <ul>
        {Li(
          <>{Em("Tokens must be presented")} in order to set a wash appointment.</>
        )}
        {Li(
          <>Residents must purchase these tokens {Em("in person")}, a difficult task for the average busy University student.</>
        )}
        {Li(
          <>Additionally, these tokens {Em("can only be purchased")} using {Em("cash")} or {Em("Lynk")}, adding an extra hurdle.</>
        )}
      </ul>

      {BrS()}

      My team attempted to tackle this issue by creating {Em("a laundry scheduling system")} that would {Em("streamline this process.")}
      {BrS()}
      My main contribution was to help {Em("refine")} and {Em("develop")} the {Em("look and feel")} of the system.

      {BrS()}

      {H("Constraints")}

      <ul>
        {Li(
          <>Since we were an independent team without official support from the company, we were limited by the 
            {Em("short development time frame, skill levels of the members")}, as well as what was possible to accomplish 
            with our {Em("limited resources.")}</>
        )}
        {BrS()}
        {Li(
          <>Sometimes we had to make decisions that were {Em("realistic,")} but {Em("not the most ideal solution")} for the 
            issue at hand.</>
        )}
        {BrS()}
        {Li(
          <>Additionally, using the {Em("built in Java UI libraries")} limited the possiblities of what could be easily achieved 
            in the implementation of the design, {Em("affecting our design decisions.")}</>
        )}
      </ul>

    </div>
  )
}