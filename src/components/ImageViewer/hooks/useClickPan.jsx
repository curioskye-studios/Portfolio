import { useState, useRef } from 'react';

export default function useClickPan() {

  const [currImgPosition, setCurrImgPosition] = useState({ xPos: 0, yPos: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ xPos: 0, yPos: 0 }); // no reset on render

  function resetImgPosition() {    
    setCurrImgPosition({ xPos: 0, yPos: 0 });
  }


  function calculateClickAndImgOffset(clickPosObj, imgPosObj) {
    
    const clickNImgXOffset =  clickPosObj.x - imgPosObj.x;
    const clickNImgYOffset =  clickPosObj.y - imgPosObj.y;

    return {
      xPos: clickNImgXOffset,
      yPos: clickNImgYOffset
    };
  }


  function handleMousePressed(mouseEvent) {
    setIsDragging(true);

    const clickXPos = mouseEvent.clientX;
    const clickYPos = mouseEvent.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      {x: clickXPos, y: clickYPos},
      {x: currImgPosition.xPos, y: currImgPosition.yPos}
    );
 
    dragStart.current = { xPos, yPos };
  }

  function handleMouseMove(mouseEvent) {
    if (!isDragging) return;

    const clickXPos = mouseEvent.clientX;
    const clickYPos = mouseEvent.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      {x: clickXPos, y: clickYPos},
      {x: dragStart.current.xPos, y: dragStart.current.yPos}
    );

    setCurrImgPosition({ xPos, yPos });
  }

  function handleMouseUnpressed() {
    setIsDragging(false);
  }
  
  
  return {
    currImgPosition,
    setCurrImgPosition,

    isDragging,
    setIsDragging,

    handleMousePressed,
    handleMouseMove,
    handleMouseUnpressed,
    resetImgPosition
  };
}