import { useState, useRef, useCallback, useEffect } from 'react';

export function useImageViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const dragStart = useRef(null);
  const offsetSnap = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const touchRef = useRef({});

  const openModal = () => {
    setIsOpen(true);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onWheel = (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.15 : -0.15;
    setScale(prevScale => Math.min(5, Math.max(1, prevScale + zoomDelta)));
  };

  const onMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsPanning(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    offsetSnap.current = { ...offset };
  };

  const onMouseMove = useCallback((e) => {
    if (!isPanning || !dragStart.current) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    setOffset({
      x: offsetSnap.current.x + deltaX,
      y: offsetSnap.current.y + deltaY,
    });
  }, [isPanning, offset]);

  const onMouseUp = useCallback(() => {
    setIsPanning(false);
    dragStart.current = null;
  }, []);

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      offsetSnap.current = { ...offset };
      setIsPanning(true);
    } else if (e.touches.length === 2) {
      setIsPanning(false);
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      touchRef.current.initDist = Math.hypot(dx, dy);
      touchRef.current.initScale = scale;
    }
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isPanning && dragStart.current) {
      const deltaX = e.touches[0].clientX - dragStart.current.x;
      const deltaY = e.touches[0].clientY - dragStart.current.y;
      setOffset({
        x: offsetSnap.current.x + deltaX,
        y: offsetSnap.current.y + deltaY,
      });
    } else if (e.touches.length === 2 && touchRef.current.initDist) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      const currentDist = Math.hypot(dx, dy);
      const zoomRatio = currentDist / touchRef.current.initDist;
      const nextScale = touchRef.current.initScale * zoomRatio;
      setScale(Math.min(5, Math.max(1, nextScale)));
    }
  };

  const onTouchEnd = () => {
    setIsPanning(false);
    dragStart.current = null;
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prevScale => Math.min(5, prevScale + 0.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prevScale => {
      const nextScale = Math.max(1, prevScale - 0.5);
      if (nextScale === 1) setOffset({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleZoomReset = (e) => {
    e.stopPropagation();
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (scale === 1) {
      setOffset({ x: 0, y: 0 });
    }
  }, [scale]);

  return {
    isOpen,
    setIsOpen,
    scale,
    offset,
    isPanning,
    imgRef,
    openModal,
    closeModal,
    onWheel,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    handleZoomIn,
    handleZoomOut,
    handleZoomReset,
  };
}