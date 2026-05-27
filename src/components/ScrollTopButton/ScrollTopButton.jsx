import "./ScrollTopButton.css";
import UpArrow from "../Icons/UpArrow";

export default function ScrollTopButton({ shouldDisplay = true }) {

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
      className={`btn-primary back-to-top ${shouldDisplay ? "" : "hidden-temp"}`} 
      onClick={ handleButtonClick }
    >
        Top <UpArrow />
    </button>
  );
}