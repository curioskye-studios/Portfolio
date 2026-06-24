import { useState } from 'react';

export default function useScrollZoom(zoomHook) {
  
  function handleMouseScroll(scrollEvent) {    
    scrollEvent.preventDefault(); // stop the page itself from scrolling

    //Positive value → scrolling down (or pinch-zooming out on some trackpads)
    //Negative value → scrolling up (or pinch-zooming in on some trackpads)
    const verticalScroll = scrollEvent.deltaY;

    if (verticalScroll < 0) {
      zoomHook.handleZoomIn();
    } else {
      zoomHook.handleZoomOut();
    }
  }

  function disableMouseScroll(scrollEvent) {
    scrollEvent.preventDefault(); 
  }


  return {  
    handleMouseScroll,
    disableMouseScroll    
  };
}