import { useState, useRef, useEffect } from 'react';

import useZoom from './useZoom';
import useClickPan from './useClickPan';

export default function useImageViewer() {

  const zoomHook = useZoom();
  const clickPanHook = useClickPan();

  const [isOpen, setIsOpen] = useState(false); 

  const imgRef = useRef(null);

  useEffect(() => {

    if (zoomHook.currScale === 1) clickPanHook.resetImgPosition();

  }, [zoomHook.currScale]);
  

  function openModal() {
    setIsOpen(true);
    clickPanHook.resetImgPosition();
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

  const clickPanHookObj = {    
    currImgPosition: clickPanHook.currImgPosition,
    setCurrImgPosition: clickPanHook.setCurrImgPosition,

    isDragging: clickPanHook.isDragging,
    setIsDragging: clickPanHook.setIsDragging,

    handleMousePressed: clickPanHook.handleMousePressed,
    handleMouseMove: clickPanHook.handleMouseMove,
    handleMouseUnpressed: clickPanHook.handleMouseUnpressed,
    resetImgPosition: clickPanHook.resetImgPosition    
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

    ...clickPanHookObj
  };
}