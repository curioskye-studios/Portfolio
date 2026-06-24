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

  return {  
    currScale,
    setCurrScale,

    handleZoomIn,
    handleZoomOut,
    handleZoomReset,

    resetImgScale
  };
}