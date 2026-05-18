import "./ScrollTopButton.css";
import UpArrow from "../Icons/UpArrow";

export default function ScrollTopButton({  }) {

  function handleButtonClick() {
    window.scrollTo(
      { 
        top: 0, 
        behavior: "smooth" 
      }
    );
  }

  return (
    <button className="btn-primary back-to-top" onClick={ handleButtonClick }>
      Top <UpArrow />
    </button>
  );
}