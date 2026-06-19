import { useState, useRef, useEffect } from 'react';

import useZoom from './useZoom';
import usePan from './usePan';
import useClickPan from './useClickPan';
import useTouchPan from './useTouchPan';

export default function useImageViewer() {

  const zoomHook = useZoom();

  const panHook = usePan();
  const clickPanHook = useClickPan(panHook);
  const touchPanHook = useTouchPan(panHook);

  const [isOpen, setIsOpen] = useState(false); 

  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    imgElement.addEventListener(
      'wheel', zoomHook.handleMouseScroll, { passive: false }
    );
    document.body.addEventListener(
      'wheel', zoomHook.disableMouseScroll, { passive: false }
    );

    imgElement.addEventListener(
      'touchmove', touchPanHook.handleTouchMove, { passive: false }
    );

    return () => {
      imgElement.removeEventListener('wheel', zoomHook.handleMouseScroll);
      document.body.removeEventListener('wheel', zoomHook.disableMouseScroll);

      imgElement.removeEventListener('touchmove', touchPanHook.handleTouchMove);
    }
  }, [isOpen, zoomHook.handleMouseScroll, touchPanHook.handleTouchMove]);

  useEffect(() => {

    if (zoomHook.currScale === 1) panHook.resetImgPosition();

  }, [zoomHook.currScale]);


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
    clickPanHook.resetImgPosition()
  }


  const zoomHookObj = {    
    currScale: zoomHook.currScale,
    setCurrScale: zoomHook.setCurrScale,

    handleZoomIn: zoomHook.handleZoomIn,
    handleZoomOut: zoomHook.handleZoomOut,
    handleZoomReset: zoomHook.handleZoomReset,

    resetImgScale: zoomHook.resetImgScale,
    handleMouseScroll: zoomHook.handleMouseScroll,
    disableMouseScroll: zoomHook.disableMouseScroll,
  }

  const panHookObj = {
    currImgPosition: panHook.currImgPosition,
    setCurrImgPosition: panHook.setCurrImgPosition,

    isDragging: panHook.isDragging,
    setIsDragging: panHook.setIsDragging,

    resetImgPosition: panHook.resetImgPosition
  }

  const clickPanHookObj = {    
    handleMousePressed: clickPanHook.handleMousePressed,
    handleMouseMove: clickPanHook.handleMouseMove,
    handleMouseUnpressed: clickPanHook.handleMouseUnpressed
  }

  const touchPanHookObj = {
    handleTouchStart: touchPanHook.handleTouchStart,
    handleTouchMove: touchPanHook.handleTouchMove,
    handleTouchEnd: touchPanHook.handleTouchEnd
  }


  return {
    isOpen, // same thing as isOpen: isOpen,
    setIsOpen,

    imgRef,

    openModal,
    closeModal,
    disableCloseModal,

    resetImage,
    
    ...zoomHookObj,

    ...panHookObj,
    ...clickPanHookObj,
    ...touchPanHookObj
  };
}