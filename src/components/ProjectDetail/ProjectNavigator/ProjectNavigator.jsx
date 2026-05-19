import './ProjectNavigator.css'

export default function ProjectNavigator({ referencedSections }) {
  // export default function ProjectNavigator() {

  //collect all referenced sections name from the current project info
  //loop through and create the buttons to get to each
  //create logic to get to the section on click

  //create button element to pass data into

  function handleReferenceClick() {
    
  }
  

  return (
    <div className='navigator'>
      {/* {
        referencedSections.map(
          (section) => {console.log(section.reference)}
        )
      } */}

      {
        referencedSections.map(
          (section, i) => (      
            <div key={i}>
              <button className='btn-primary' onClick={}>{section.reference}</button>
              {/* <div className='green-line'/> */}
            </div>                         
          )
        )
      }
      
    </div>
  );
}