import EyeOpen from '../../Icons/EyeOpen';
import EyeClose from '../../Icons/EyeClose';

export default function DisplayToggleButton( { isOn = true, ...props } ) {

  return (
    <div className="display-btn" {...props}>
      {
        isOn ? 
        <EyeOpen /> : <EyeClose />
      }      
    </div>
  );
}