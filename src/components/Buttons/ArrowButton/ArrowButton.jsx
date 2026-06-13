import { Link } from 'react-router-dom';

import './ArrowButton.css'

import RightArrow from '../../Icons/RightArrow';
import LeftArrow from '../../Icons/LeftArrow';

export default function ArrowButton(
    {   
      linkPath, 
      hasText = true, 
      isRight = true, 
      shouldSpin = false,
      children,   
      ...props 
    } 
  ) {

  const content = (
    <>
      {
        !isRight ? 
        <LeftArrow className={`arrow ${hasText ? "left-arrow" : ""}`} /> 
        : null
      }

      {hasText ? children : null}

      {
        isRight ? 
        <RightArrow className={`arrow ${hasText ? "right-arrow" : ""} ${shouldSpin ? "rotate-right" : ""}`} /> 
        : null
      }
    </>
  );

  return (
    <div {...props}>
      {linkPath ? 
        ( 
          <Link to={linkPath} className={`btn-primary arrow-btn ${hasText ? "" : "no-text"}`}>
            {content}
          </Link>
        )
        : (
            <div className={`btn-primary arrow-btn ${hasText ? "" : "no-text"}`}>
              {content}
            </div>
          )
      }
    </div>
  );
} 
