
export default function useClickPan(panHook) {

  function calculateClickAndImgOffset(clickPosObj, imgPosObj) {
    
    const clickNImgXOffset =  clickPosObj.x - imgPosObj.x;
    const clickNImgYOffset =  clickPosObj.y - imgPosObj.y;

    return {
      xPos: clickNImgXOffset,
      yPos: clickNImgYOffset
    };
  }


  function handleMousePressed(mouseEvent) {
    panHook.setIsDragging(true);

    const clickXPos = mouseEvent.clientX;
    const clickYPos = mouseEvent.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      {x: clickXPos, y: clickYPos},
      {x: panHook.currImgPosition.xPos, y: panHook.currImgPosition.yPos}
    );
 
    panHook.dragStart.current = { xPos, yPos };
  }

  function handleMouseMove(mouseEvent) {
    if (!panHook.isDragging) return;

    const clickXPos = mouseEvent.clientX;
    const clickYPos = mouseEvent.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      {x: clickXPos, y: clickYPos},
      {x: panHook.dragStart.current.xPos, y: panHook.dragStart.current.yPos}
    );

    panHook.setCurrImgPosition({ xPos, yPos });
  }

  function handleMouseUnpressed() {
    panHook.setIsDragging(false);
  }
  
  
  return {
    handleMousePressed,
    handleMouseMove,
    handleMouseUnpressed
  };
}