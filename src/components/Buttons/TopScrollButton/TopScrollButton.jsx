import "./TopScrollButton.css";
import UpArrow from "../../Icons/UpArrow";

export default function TopScrollButton({ moreClasses="" }) {

  function handleButtonClick() {
    window.scrollTo(
      { 
        top: 0, 
        behavior: "smooth" 
      }
    );
  }

  return (
    <button 
      className={`btn-primary back-to-top ${moreClasses}`} 
      onClick={ handleButtonClick }
    >
        Top <UpArrow />
    </button>
  );
}