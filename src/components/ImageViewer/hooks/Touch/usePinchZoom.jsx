import { useRef } from 'react';

export default function usePinchZoom(zoomHook, panHook) {	

  const pinchStartDistance = useRef(null);
  const pinchStartScale = useRef(null);
  const pinchStartMidpoint = useRef(null);
  const pinchStartPosition = useRef(null);
  

  function getDistanceBetweenTouches(touches) {
    const [touch1, touch2] = touches;
    
    const xDist = touch2.clientX - touch1.clientX;
    const yDist = touch2.clientY - touch1.clientY;

    // Pythagoras — straight line distance
    return Math.sqrt(
      (xDist * xDist) + (yDist * yDist)
    ); 
  }

  function getPinchMidpoint(touches) {
    const [touch1, touch2] = touches;

    return {
      x: (touch1.clientX + touch2.clientX) / 2,
      y: (touch1.clientY + touch2.clientY) / 2,
    };
  }

  function calculateNewPos(midPos, startPos, restrictedScale, currentPinchScale) {    
    return midPos - (midPos - startPos) * (restrictedScale / currentPinchScale);    
  }
  
  function saveState(newX, nexY) {  
    // re-snapshot so next event is relative to current position
    pinchStartDistance.current = currentDistance;
    pinchStartScale.current = restrictedScale;
    pinchStartMidpoint.current = currentMidpoint; 
    pinchStartPosition.current = { xPos: newX, yPos: newY };
  }

  // function handleZoom(pinchRatio) {
  //   if (pinchRatio > 1) {
  //     zoomHook.handleZoomIn();
  //   } else {
  //     zoomHook.handleZoomOut();
  //   }
  // }


  function handlePinchStart(touchEvent) {    
    pinchStartDistance.current = getDistanceBetweenTouches(touchEvent.touches);

    // snapshot scale at pinch start
    pinchStartScale.current = zoomHook.currScale;

    // snapshot midpoint between fingers at pinch start
    pinchStartMidpoint.current = getPinchMidpoint(touchEvent.touches);

    // snapshot pan position at pinch start
    pinchStartPosition.current = { ...panHook.currImgPosition };
  }

  function handlePinchMove(touchEvent) {
    const currentDistance = getDistanceBetweenTouches(touchEvent.touches);
    const currentMidpoint = getPinchMidpoint(touchEvent.touches);
    
    //Ratio > 1 → fingers spread apart → zoom in
    //Ratio < 1 → fingers pinched closer → zoom out
    const pinchRatio = currentDistance / pinchStartDistance.current;

    const sensitivity = 0.8; // 1 for full sensitivity
    const sensitiveRatio = 1 + (pinchRatio - 1) * sensitivity;

    const newScale = pinchStartScale.current * sensitiveRatio;
    const restrictedScale = Math.min(Math.max(newScale, 1), 5);

    // adjust position so the pinch midpoint stays visually fixed
    // instead of zooming toward the center of the image
    const midpoint = pinchStartMidpoint.current;
    const startPos = pinchStartPosition.current;

    const newX = 
      calculateNewPos(midpoint.x, startPos.xPos, restrictedScale, pinchStartScale.current);
    const newY = 
      calculateNewPos(midpoint.y, startPos.yPos, restrictedScale, pinchStartScale.current);
    
    zoomHook.setCurrScale(restrictedScale);
    panHook.setCurrImgPosition({ xPos: newX, yPos: newY }); 
    saveState(newX, newY); 
  }

  function handlePinchEnd() {
    pinchStartDistance.current = null;
    pinchStartScale.current = null;
    pinchStartMidpoint.current = null;
    pinchStartPosition.current = null;
  }

  
  return {
    handlePinchStart,
    handlePinchMove,
    handlePinchEnd
  };
}