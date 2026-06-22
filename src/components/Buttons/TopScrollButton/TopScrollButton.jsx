import "./TopScrollButton.css";
import UpArrow from "../../Icons/UpArrow";
import IconButton from "../IconButton/IconButton";

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
    <IconButton   
      svgIconComponent={<UpArrow className="up-icon"/>} 
      className={`btn-primary top-btn ${moreClasses}`} 
      onClick={ handleButtonClick }
    />
  );
}