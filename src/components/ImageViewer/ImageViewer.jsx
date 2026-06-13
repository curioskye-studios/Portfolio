import { useState, useRef, useCallback, useEffect } from 'react';
import './ImageLightbox.css';

/**
 * ImageLightbox
 *
 * Wraps any image (or the existing ImageSection) so clicking it opens a
 * full-screen modal with pinch/scroll-to-zoom and click-drag pan.
 *
 * Props:
 *   src        – image URL (required)
 *   alt        – alt text
 *   caption    – optional caption shown below the image
 *   className  – extra classes forwarded to the thumbnail wrapper
 */
export default function ImageLightbox({ src, alt = '', caption, className = '' }) {
  const [open, setOpen]         = useState(false);
  const [scale, setScale]       = useState(1);
  const [offset, setOffset]     = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart  = useRef(null);
  const offsetSnap = useRef({ x: 0, y: 0 });
  const imgRef     = useRef(null);

  /* ── open / close ─────────────────────────────────────────────── */
  const openModal = () => {
    setOpen(true);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  /* ── keyboard ──────────────────────────────────────────────────── */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, closeModal]);

  /* ── scroll-to-zoom ────────────────────────────────────────────── */
  const onWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    setScale(s => Math.min(5, Math.max(1, s + delta)));
  };

  /* ── mouse drag ────────────────────────────────────────────────── */
  const onMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current  = { x: e.clientX, y: e.clientY };
    offsetSnap.current = { ...offset };
  };

  const onMouseMove = useCallback((e) => {
    if (!dragging || !dragStart.current) return;
    setOffset({
      x: offsetSnap.current.x + (e.clientX - dragStart.current.x),
      y: offsetSnap.current.y + (e.clientY - dragStart.current.y),
    });
  }, [dragging, offset]);

  const onMouseUp = useCallback(() => {
    setDragging(false);
    dragStart.current = null;
  }, []);

  /* ── touch drag + pinch ────────────────────────────────────────── */
  const touchRef   = useRef({});

  const onTouchStart = (e) => {
    if (e.touches.length === 1) {
      dragStart.current  = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      offsetSnap.current = { ...offset };
      setDragging(true);
    } else if (e.touches.length === 2) {
      setDragging(false);
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchRef.current.initDist  = Math.hypot(dx, dy);
      touchRef.current.initScale = scale;
    }
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && dragging && dragStart.current) {
      setOffset({
        x: offsetSnap.current.x + (e.touches[0].clientX - dragStart.current.x),
        y: offsetSnap.current.y + (e.touches[0].clientY - dragStart.current.y),
      });
    } else if (e.touches.length === 2 && touchRef.current.initDist) {
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = touchRef.current.initScale * (dist / touchRef.current.initDist);
      setScale(Math.min(5, Math.max(1, next)));
    }
  };

  const onTouchEnd = () => {
    setDragging(false);
    dragStart.current = null;
  };

  /* ── zoom controls ─────────────────────────────────────────────── */
  const zoomIn  = (e) => { e.stopPropagation(); setScale(s => Math.min(5, s + 0.5)); };
  const zoomOut = (e) => { e.stopPropagation(); setScale(s => { const n = Math.max(1, s - 0.5); if (n === 1) setOffset({ x: 0, y: 0 }); return n; }); };
  const zoomReset=(e) => { e.stopPropagation(); setScale(1); setOffset({ x: 0, y: 0 }); };

  /* ── reset pan when fully zoomed out ──────────────────────────── */
  useEffect(() => { if (scale === 1) setOffset({ x: 0, y: 0 }); }, [scale]);

  const imgStyle = {
    transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
    cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
    transition: dragging ? 'none' : 'transform 0.15s ease',
  };

  return (
    <>
      {/* ── thumbnail ── */}
      <div className={`lb-thumb-wrap ${className}`} onClick={openModal} title="Click to expand">
        <img className="lb-thumb" src={src} alt={alt} />
        <div className="lb-thumb-overlay">
          <ZoomIcon />
        </div>
      </div>

      {/* ── modal ── */}
      {open && (
        <div
          className="lb-backdrop"
          onClick={closeModal}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* inner prevents backdrop-click from firing when clicking controls */}
          <div className="lb-modal" onClick={(e) => e.stopPropagation()}>

            {/* header bar */}
            <div className="lb-header">
              {caption && <span className="lb-caption">{caption}</span>}
              <button className="lb-close" onClick={closeModal} aria-label="Close">
                <CloseIcon />
              </button>
            </div>

            {/* image stage */}
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

            {/* zoom controls */}
            <div className="lb-controls">
              <button className="lb-ctrl-btn" onClick={zoomOut}  aria-label="Zoom out"><MinusIcon /></button>
              <button className="lb-ctrl-btn lb-zoom-label" onClick={zoomReset} aria-label="Reset zoom">
                {Math.round(scale * 100)}%
              </button>
              <button className="lb-ctrl-btn" onClick={zoomIn}   aria-label="Zoom in"><PlusIcon /></button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}


/* ────────────────────────────────────────────────────────────────────
   Drop-in replacement for ImageSection that adds lightbox support.
   Usage is identical to your existing ImageSection component.
──────────────────────────────────────────────────────────────────── */
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


/* ── inline SVG icons ──────────────────────────────────────────── */
function ZoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/>
      <line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}
