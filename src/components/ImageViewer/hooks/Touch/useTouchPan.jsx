
export default function useTouchPan(panHook){

  function handlePanStart(touchEvent) {
    panHook.setIsDragging(true);

    const touch = touchEvent.touches[0];
    const clickXPos = touch.clientX;
    const clickYPos = touch.clientY;

    const { xPos, yPos } = panHook.calculateClickAndImgOffset(
      { x: clickXPos, y: clickYPos },
      { x: panHook.currImgPosition.xPos, y: panHook.currImgPosition.yPos }
    );

    panHook.dragStart.current = { xPos, yPos };
  }

  function handlePanMove(touchEvent) {
    if (!panHook.isDragging) return;

    const touch = touchEvent.touches[0];
    const clickXPos = touch.clientX;
    const clickYPos = touch.clientY;

    const { xPos, yPos } = panHook.calculateClickAndImgOffset(
      { x: clickXPos, y: clickYPos },
      { x: panHook.dragStart.current.xPos, y: panHook.dragStart.current.yPos }
    );

    panHook.setCurrImgPosition({ xPos, yPos });
  }

  function handlePanEnd() {
    panHook.setIsDragging(false);
  }

  return { 
    handlePanStart,
    handlePanMove,
    handlePanEnd
  };
}