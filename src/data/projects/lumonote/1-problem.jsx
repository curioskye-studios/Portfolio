import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';

export default 
{      
  type: 'text',
  reference: 'problem',
  heading: 'The Problem',
  body: (
    <div className='padded-fully'>
      {Em("A note app is an essential tool everyone uses in their day to day.")}
      {BrS()}
      <ul>
        {Li(
          <>Many people like myself use it mostly for {Em("thought organization")} and {Em("planning.")}</>
        )}
        {Li(
          <>For some of those people, the ability to {Em("freely combine and customize how note elements are presented")} is a must, without {Em("unnecessarily complex features")} getting in the way.</>
        )}
        {Li(
          <>However, many note apps are either {Em("too simple")} or {Em("too complex")}, sometimes choosing to {Em("separate certain note elements")} into a separate note type altogether.</>
        )}
      </ul>
      I used this issue as a jumping off point to {Em("develop my first prototype")} of the product for testing.
      
      {BrS()}
      {H("Constraints")}
      {BrS()}
      As both the {Em("designer")} and {Em("developer, ")}
      the outcome was limited by {Em("time")} and {Em("my current skill level.")}
      {BrS()}
      Some potential features had to be shelved, and {Em("high impact features were prioritized")} 
      to be developed and tested in a short time frame.
    </div>
  )
}