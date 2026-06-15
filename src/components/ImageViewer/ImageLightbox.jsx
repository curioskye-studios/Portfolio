import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

/**
 * ImageLightbox Component
 *
 * A reusable lightbox/modal for viewing images with:
 * - Scroll wheel to zoom in/out (100% - 500%)
 * - Click-and-drag to pan when zoomed
 * - Pinch-to-zoom on touch devices
 * - Keyboard shortcut (Esc to close)
 *
 * Props:
 *   src       – Image URL (required)
 *   alt       – Alt text for accessibility
 *   caption   – Optional caption shown at top of modal
 *   className – Extra CSS classes for the thumbnail wrapper
 */
export default function ImageLightbox({ 
  src, 
  alt = '', 
  caption, 
  className = '' 
}) {
  // ═══════════════════════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════════════════════

  const [open, setOpen]         = useState(false);
  const [scale, setScale]       = useState(1);        // zoom level (1 = 100%)
  const [offset, setOffset]     = useState({ x: 0, y: 0 }); // pan position
  const [dragging, setDragging] = useState(false);    // currently panning?


  // ═══════════════════════════════════════════════════════════════════════════
  // REFS (non-state values that persist between renders)
  // ═══════════════════════════════════════════════════════════════════════════

  const dragStart  = useRef(null);        // where drag started
  const offsetSnap = useRef({ x: 0, y: 0 }); // pan offset at drag start
  const imgRef     = useRef(null);        // the <img> element
  const touchRef   = useRef({});          // touch pinch-zoom data


  // ═══════════════════════════════════════════════════════════════════════════
  // MODAL OPEN / CLOSE
  // ═══════════════════════════════════════════════════════════════════════════

  const openModal = () => {
    setOpen(true);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);


  // ═══════════════════════════════════════════════════════════════════════════
  // KEYBOARD: ESC TO CLOSE
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, closeModal]);


  // ═══════════════════════════════════════════════════════════════════════════
  // MOUSE: SCROLL TO ZOOM
  // ═══════════════════════════════════════════════════════════════════════════

  const onWheel = (e) => {
    e.preventDefault();

    // Scroll up (negative deltaY) = zoom in
    // Scroll down (positive deltaY) = zoom out
    const zoomDelta = e.deltaY < 0 ? 0.15 : -0.15;

    setScale(prevScale => {
      const nextScale = prevScale + zoomDelta;
      return Math.min(5, Math.max(1, nextScale)); // clamp: 1x to 5x
    });
  };


  // ═══════════════════════════════════════════════════════════════════════════
  // MOUSE: DRAG TO PAN
  // ═══════════════════════════════════════════════════════════════════════════

  const onMouseDown = (e) => {
    // Only allow dragging when zoomed in
    if (scale <= 1) return;

    e.preventDefault();
    setDragging(true);

    // Record the starting mouse position and current offset
    dragStart.current  = { x: e.clientX, y: e.clientY };
    offsetSnap.current = { ...offset };
  };

  const onMouseMove = useCallback((e) => {
    if (!dragging || !dragStart.current) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    setOffset({
      x: offsetSnap.current.x + deltaX,
      y: offsetSnap.current.y + deltaY,
    });
  }, [dragging, offset]);

  const onMouseUp = useCallback(() => {
    setDragging(false);
    dragStart.current = null;
  }, []);


  // ═══════════════════════════════════════════════════════════════════════════
  // TOUCH: SINGLE FINGER TO PAN, TWO FINGERS TO PINCH ZOOM
  // ═══════════════════════════════════════════════════════════════════════════

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Single finger: pan
      dragStart.current  = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      offsetSnap.current = { ...offset };
      setDragging(true);

    } else if (e.touches.length === 2) {
      // Two fingers: pinch zoom
      setDragging(false);

      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;

      touchRef.current.initDist  = Math.hypot(dx, dy);
      touchRef.current.initScale = scale;
    }
  };

  const onTouchMove = (e) => {
    e.preventDefault();

    if (e.touches.length === 1 && dragging && dragStart.current) {
      // Single finger: pan
      const deltaX = e.touches[0].clientX - dragStart.current.x;
      const deltaY = e.touches[0].clientY - dragStart.current.y;

      setOffset({
        x: offsetSnap.current.x + deltaX,
        y: offsetSnap.current.y + deltaY,
      });

    } else if (e.touches.length === 2 && touchRef.current.initDist) {
      // Two fingers: pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      const currentDist = Math.hypot(dx, dy);

      // Calculate new zoom based on finger distance ratio
      const zoomRatio = currentDist / touchRef.current.initDist;
      const nextScale = touchRef.current.initScale * zoomRatio;

      setScale(Math.min(5, Math.max(1, nextScale))); // clamp: 1x to 5x
    }
  };

  const onTouchEnd = () => {
    setDragging(false);
    dragStart.current = null;
  };


  // ═══════════════════════════════════════════════════════════════════════════
  // ZOOM CONTROL BUTTONS
  // ═══════════════════════════════════════════════════════════════════════════

  const handleZoomIn = (e) => {
    e.stopPropagation(); // Don't trigger backdrop click

    setScale(prevScale => Math.min(5, prevScale + 0.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();

    setScale(prevScale => {
      const nextScale = Math.max(1, prevScale - 0.5);

      // Reset pan when zooming back to 100%
      if (nextScale === 1) {
        setOffset({ x: 0, y: 0 });
      }

      return nextScale;
    });
  };

  const handleZoomReset = (e) => {
    e.stopPropagation();

    setScale(1);
    setOffset({ x: 0, y: 0 });
  };


  // ═══════════════════════════════════════════════════════════════════════════
  // EFFECT: RESET PAN WHEN ZOOMED OUT FULLY
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (scale === 1) {
      setOffset({ x: 0, y: 0 });
    }
  }, [scale]);


  // ═══════════════════════════════════════════════════════════════════════════
  // COMPUTE IMAGE TRANSFORM
  // ═══════════════════════════════════════════════════════════════════════════

  const imgStyle = {
    transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
    cursor: scale > 1 
      ? (dragging ? 'grabbing' : 'grab') 
      : 'zoom-in',
    transition: dragging 
      ? 'none' 
      : 'transform 0.15s ease',
  };


  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          THUMBNAIL (clickable preview)
          ───────────────────────────────────────────────────────────────────── */}

      <div 
        className={`lb-thumb-wrap ${className}`} 
        onClick={openModal} 
        title="Click to expand"
      >
        <img 
          className="lb-thumb" 
          src={src} 
          alt={alt} 
        />
        <div className="lb-thumb-overlay">
          <ZoomIcon />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          MODAL (portalled to document.body to escape CSS constraints)
          ───────────────────────────────────────────────────────────────────── */}

      {open && createPortal(
        <div
          className="lb-backdrop"
          onClick={closeModal}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* Inner modal: click inside doesn't close */}
          <div 
            className="lb-modal" 
            onClick={(e) => e.stopPropagation()}
          >

            {/* ───────────────────────────────────────────────────────────────
                HEADER: caption + close button
                ─────────────────────────────────────────────────────────────── */}

            <div className="lb-header">
              {caption && (
                <span className="lb-caption">
                  {caption}
                </span>
              )}

              <button 
                className="lb-close" 
                onClick={closeModal} 
                aria-label="Close lightbox"
              >
                <CloseIcon />
              </button>
            </div>

            {/* ───────────────────────────────────────────────────────────────
                IMAGE STAGE (the zoomable/pannable area)
                ─────────────────────────────────────────────────────────────── */}

            <div
              className="lb-stage"
              onWheel={onWheel}
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                ref={imgRef}
                className="lb-image"
                src={src}
                alt={alt}
                style={imgStyle}
                draggable={false}
              />
            </div>

            {/* ───────────────────────────────────────────────────────────────
                CONTROLS: zoom in/out buttons + percentage display
                ─────────────────────────────────────────────────────────────── */}

            <div className="lb-controls">
              <button 
                className="lb-ctrl-btn" 
                onClick={handleZoomOut}
                aria-label="Zoom out"
              >
                <MinusIcon />
              </button>

              <button 
                className="lb-ctrl-btn lb-zoom-label" 
                onClick={handleZoomReset}
                aria-label="Reset zoom to 100%"
              >
                {Math.round(scale * 100)}%
              </button>

              <button 
                className="lb-ctrl-btn" 
                onClick={handleZoomIn}
                aria-label="Zoom in"
              >
                <PlusIcon />
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// WRAPPER: Drop-in replacement for existing ImageSection component
// ═══════════════════════════════════════════════════════════════════════════

/**
 * ImageSectionWithLightbox
 *
 * Same props/layout as your existing ImageSection, but adds lightbox support.
 *
 * Props:
 *   data        – Object with { link, alt, caption }
 *   otherClasses – Additional CSS classes
 */
export function ImageSectionWithLightbox({ data, otherClasses = '' }) {
  return (
    <>
      <div className="separator-small" />

      <div className={`detail-img-wrap ${otherClasses}`}>
        <ImageLightbox
          src={data.link}
          alt={data.alt ?? ''}
          caption={data.caption}
        />
      </div>

      {data.caption && (
        <div className="img-caption text-center mt-3">
          {data.caption}
        </div>
      )}

      <div className="separator" />
    </>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// ICONS (inline SVG components)
// ═══════════════════════════════════════════════════════════════════════════

function ZoomIcon() {
  return (
    <svg 
      width="22" 
      height="22" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg 
      width="22" 
      height="22" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}