export default function UpArrow({ className = '' }) {

  return (
    <svg 
      className={`arrow-up ${className}`}
      xmlns="http://www.w3.org/2000/svg" 
      width="17" height="17" 
      viewBox="0 0 24 24">
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2.5"
          d="M19.5 13.5L12 6m0 0l-7.5 7.5M12 6v18" 
        />
    </svg>
  );
}