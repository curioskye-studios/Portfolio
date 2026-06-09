import { Link } from 'react-router-dom';
import RightArrow from './Icons/RightArrow';
import LeftArrow from './Icons/LeftArrow';

export default function ArrowButton({ className, linkPath, children, isRight = true, ...props }) {

  return (
    <div className={className} {...props}>
    
      <Link to={linkPath} className="btn-primary">
        {!isRight? <LeftArrow /> : null}

        {children}
        
        {isRight? <RightArrow /> : null}
      </Link>

    </div>
  );
} 
