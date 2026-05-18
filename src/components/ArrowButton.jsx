import { Link } from 'react-router-dom';
import RightArrow from './Icons/RightArrow';

export default function ArrowButton({ className, linkPath, children, ...props }) {

  return (
    <div className={className} {...props}>
    
      <Link to={linkPath} className="btn-primary">
        {children}
        
        <RightArrow />
      </Link>

    </div>
  );
} 
