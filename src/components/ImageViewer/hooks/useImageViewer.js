import { useState, useRef, useEffect, use } from 'react';

import useZoom from './useZoom';
import usePan from './usePan';

import useScrollZoom from './Mouse/useScrollZoom';
import useClickPan from './Mouse/useClickPan';

import usePinchZoom from './Touch/usePinchZoom';
import useTouchPan from './Touch/useTouchPan';

import useTouch from './Touch/useTouch';


export default function useImageViewer() {

  const zoomHook = useZoom();
  const panHook = usePan();

  const scrollZoomHook = useScrollZoom(zoomHook);
  const clickPanHook = useClickPan(panHook);

  const pinchZoomHook = usePinchZoom(zoomHook, panHook);
  const touchPanHook = useTouchPan(panHook);

  const touchHook = useTouch(touchPanHook, pinchZoomHook);

  const [isOpen, setIsOpen] = useState(false); 

  const imgRef = useRef(null);
  

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;
      
    document.body.addEventListener(
      'wheel', scrollZoomHook.disableMouseScroll, { passive: false }
    );
    setupEventListeners(imgElement);

    return () => {      
      document.body.removeEventListener(
        'wheel', scrollZoomHook.disableMouseScroll
      );
      removeEventListeners(imgElement)
    }
  }, [isOpen, scrollZoomHook.handleMouseScroll, touchHook.handleTouchMove]);

  useEffect(() => {

    if (zoomHook.currScale === 1) panHook.resetImgPosition();

  }, [zoomHook.currScale]);


  function setupEventListeners(element) {  
    element.addEventListener(
      'wheel', scrollZoomHook.handleMouseScroll, { passive: false }
    );
    element.addEventListener(
      'touchmove', touchHook.handleTouchMove, { passive: false }
    );
    element.addEventListener(
      'touchstart',touchHook.handleTouchStart, { passive: false }
    );
  }
  function removeEventListeners(element) {  
    element.removeEventListener(
      'wheel', scrollZoomHook.handleMouseScroll
    );
    element.removeEventListener(
      'touchmove', touchHook.handleTouchMove
    );
    element.removeEventListener(
      'touchstart', touchHook.handleTouchStart
    );
  }

  function openModal() {
    setIsOpen(true);
    panHook.resetImgPosition();
    zoomHook.resetImgScale();
  };

  function closeModal() {
    setIsOpen(false);
  };

  function disableCloseModal(closeEvent) {
    closeEvent.stopPropagation();
  }


  function resetImage(event) {
    zoomHook.handleZoomReset(event);
    panHook.resetImgPosition();
  }


  return {
    isOpen, // same thing as isOpen: isOpen,
    setIsOpen,

    imgRef,

    openModal,
    closeModal,
    disableCloseModal,

    resetImage,
    
    ...zoomHook,
    ...panHook,

    ...scrollZoomHook,
    ...clickPanHook,
    
    ...touchHook
  };
}