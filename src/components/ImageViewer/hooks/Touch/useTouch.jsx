import { useState, useRef } from 'react';

export default function useTouch(touchPanHook, pinchZoomHook) {	

  function handleTouchStart(touchEvent) {
    touchEvent.preventDefault();
    
    // two fingers — start pinch zoom
    if (touchEvent.touches.length === 2) {
      pinchZoomHook.handlePinchStart(touchEvent);
    } 
    
    // one finger — start pan (existing logic)
    else if (touchEvent.touches.length === 1) {
      touchPanHook.handlePanStart(touchEvent);
    }
  }

  function handleTouchMove(touchEvent) {
    touchEvent.preventDefault();

    if (touchEvent.touches.length === 2) {
      pinchZoomHook.handlePinchMove(touchEvent);
    } 
    
    else if (touchEvent.touches.length === 1) {
      touchPanHook.handlePanMove(touchEvent);
    }
  }

  function handleTouchEnd(touchEvent) {

    if (touchEvent.touches.length < 2) {
      pinchZoomHook.handlePinchEnd();
    }

    if (touchEvent.touches.length === 0) {
      touchPanHook.handlePanEnd();
    }
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}