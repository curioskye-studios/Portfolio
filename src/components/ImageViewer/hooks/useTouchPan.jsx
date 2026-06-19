
export default function useTouchPan(panHook){

  function handleTouchStart(touchEvent) {
    panHook.setIsDragging(true);

    const touch = touchEvent.touches[0];
    const clickXPos = touch.clientX;
    const clickYPos = touch.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      { x: clickXPos, y: clickYPos },
      { x: panHook.currImgPosition.xPos, y: panHook.currImgPosition.yPos }
    );

    panHook.dragStart.current = { xPos, yPos };
  }

  function handleTouchMove(touchEvent) {
    if (!panHook.isDragging) return;
    touchEvent.preventDefault(); // stop page scroll while panning

    const touch = touchEvent.touches[0];
    const clickXPos = touch.clientX;
    const clickYPos = touch.clientY;

    const { xPos, yPos } = calculateClickAndImgOffset(
      { x: clickXPos, y: clickYPos },
      { x: panHook.dragStart.current.xPos, y: panHook.dragStart.current.yPos }
    );

    panHook.setCurrImgPosition({ xPos, yPos });
  }

  function handleTouchEnd() {
    panHook.setIsDragging(false);
  }

  return { 
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}