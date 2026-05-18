export default function RightArrow({ className = '' }) {
    
  return (
    <svg 
      className={`arrow-right ${className}`}
      style={{marginTop: "-4px", marginLeft: "6px"}} 
      xmlns="http://www.w3.org/2000/svg" 
      width="17" height="17" 
      viewBox="0 0 24 24">
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2.5"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
        />
    </svg>
  );
}