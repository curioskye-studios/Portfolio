import { Link } from 'react-router-dom';

export default function SocialLinkIcon({ linkPath, width="36", height="36", pathD, svgClass=""}) {

    return (
      <Link to={linkPath}>     
        <svg 
          className={svgClass}
          xmlns="http://www.w3.org/2000/svg" 
          width={width} height={height}
          viewBox="0 0 640 640">
            <path fill="currentColor"
              d={pathD}/>
        </svg>
      </Link>
    );
}