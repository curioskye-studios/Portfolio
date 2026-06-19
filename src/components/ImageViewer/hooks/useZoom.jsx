import { useState } from 'react';

export default function useZoom() {

  const [currScale, setCurrScale] = useState(1);

  function resetImgScale() {    
    setCurrScale(1);
  }


  function handleZoomOut() {
    setCurrScale((prevScaleFactor) => {
      const currScaleFactor =
        prevScaleFactor !== 1 ? prevScaleFactor - 0.5 : prevScaleFactor;

      return currScaleFactor;
    });
  }

  function handleZoomReset() {
    resetImgScale();
  }

  function handleZoomIn() {
    setCurrScale((prevScaleFactor) => {
      const currScaleFactor =
        prevScaleFactor !== 5 ? prevScaleFactor + 0.5 : prevScaleFactor;

      return currScaleFactor;
    });
  }

  
  
  function handleMouseScroll(scrollEvent) {    
    scrollEvent.preventDefault(); // stop the page itself from scrolling

    //Positive value → scrolling down (or pinch-zooming out on some trackpads)
    //Negative value → scrolling up (or pinch-zooming in on some trackpads)
    const verticalScroll = scrollEvent.deltaY;

    if (verticalScroll < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  }

  function disableMouseScroll(scrollEvent) {
    scrollEvent.preventDefault(); 
  }


  return {  
    currScale,
    setCurrScale,

    handleZoomIn,
    handleZoomOut,
    handleZoomReset,

    resetImgScale,
    handleMouseScroll,
    disableMouseScroll    
  };
}