import { Link } from 'react-router-dom';

import './ArrowButton.css'

import RightArrow from '../../Icons/RightArrow';
import LeftArrow from '../../Icons/LeftArrow';

export default function ArrowButton(
    {   
      linkPath = "", 
      hasText = true, 
      isRight = true, 
      shouldSpin = false,
      children,   
      ...props 
    } 
  ) {

  return (
    <div {...props}>
    
      <Link to={linkPath} className={`btn-primary arrow-btn ${hasText? "" : "no-text"}`}>
        {
          !isRight? 
          <LeftArrow 
            className={`arrow ${hasText? "left-arrow" : ""}`}
          /> 
          : null
        }

        {hasText? children : null}
        
        {
          isRight? 
          <RightArrow 
            className={`arrow ${hasText? "right-arrow" : ""} ${shouldSpin? "rotate-right" : ""}`} 
          /> 
          : null
        }
      </Link>

    </div>
  );
} 
