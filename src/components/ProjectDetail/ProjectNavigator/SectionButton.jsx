import { capitalizer } from '../../../utils/textFormatter';

export default function SectionButton( { reference, ...props } ) {

  return (
    <>
      <button 
        className='navigator-btn' 
        { ...props }
      >
        {capitalizer(reference)}
      </button>
    </>
  );
}