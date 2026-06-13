import { Link } from 'react-router-dom';

import './ArrowButton.css'

import RightArrow from '../../Icons/RightArrow';
import LeftArrow from '../../Icons/LeftArrow';

export default function ArrowButton(
    { linkPath = "", hasText = true, isRight = true, children, ...props } 
  ) {

  return (
    <div {...props}>
    
      <Link to={linkPath} className={`btn-primary ${hasText? "" : "arrow-btn"}`}>
        {!isRight? <LeftArrow /> : null}

        {hasText? children : null}
        
        {isRight? <RightArrow /> : null}
      </Link>

    </div>
  );
} 
