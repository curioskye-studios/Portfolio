import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

import IconButton from '../Buttons/IconButton/IconButton';
import CloseIcon from '../Icons/CloseIcon';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';
import ZoomIcon from '../Icons/ZoomIcon';

import { useImageViewer } from './hooks/useImageViewer';
import { useKeyboard } from './hooks/useKeyboard';

export default function ImageViewer({ imgPath, alt = '', caption, className = '' }) {
  
  const viewerHook = useImageViewer();
  useKeyboard(viewerHook.isOpen, viewerHook.closeModal);


  useEffect(() => {
    if (!viewerHook.isOpen) return;

    const imgMain = document.querySelector('.viewer-img-main');
    if (!imgMain) return;

    imgMain.addEventListener('wheel', viewerHook.onWheel, { passive: false });
    imgMain.addEventListener('touchmove', viewerHook.onTouchMove, { passive: false });

    return () => {
      imgMain.removeEventListener('wheel', viewerHook.onWheel);
      imgMain.removeEventListener('touchmove', viewerHook.onTouchMove);
    };
  }, [viewerHook.isOpen, viewerHook.onWheel, viewerHook.onTouchMove]);


  const imgStyle = {
    transform: `scale(${viewerHook.scale}) translate(${viewerHook.offset.x / viewerHook.scale}px, ${viewerHook.offset.y / viewerHook.scale}px)`,
    cursor: viewerHook.scale > 1 
      ? (viewerHook.isPanning ? 'grabbing' : 'grab') 
      : 'zoom-in',
    transition: viewerHook.isPanning ? 'none' : 'transform 0.15s ease',
  };


  const imageViewerContent = (
    <>
      <div 
        className="viewer-backdrop" 
        onClick={viewerHook.closeModal} 
        onMouseMove={viewerHook.onMouseMove}
        onMouseUp={viewerHook.onMouseUp}
        onMouseLeave={viewerHook.onMouseUp}
      >
        <div className="viewer-modal" onClick={(e) => e.stopPropagation()}>
          <div className="viewer-header">
            <IconButton 
              svgIconComponent={ <CloseIcon className="viewer-close-icon" /> }
              className="btn-primary viewer-close viewer-btn" 
              onClick={viewerHook.closeModal}
              aria-label="Close viewer"
            />
          </div>                   
          
          <div 
            className="viewer-img-main" 
            onMouseDown={viewerHook.onMouseDown}
            onTouchStart={viewerHook.onTouchStart}
            onTouchEnd={viewerHook.onTouchEnd}
          >
            <img 
              ref={viewerHook.imgRef} 
              className="viewer-img"
              src={imgPath}
              alt={alt} 
              style={imgStyle}
              draggable={false}                 
            />
          </div>
                     
          <div className='viewer-caption-wrap'>
            <span className="viewer-caption">
              { caption ? caption : alt }  
            </span>
          </div> 
                     
          <div className="viewer-controls">      
            <IconButton 
              svgIconComponent={ <MinusIcon /> }
              className="btn-primary viewer-btn" 
              aria-label="Zoom out"
              onClick={viewerHook.handleZoomOut}
            />

            <button 
              className="zoom-tracker" 
              aria-label="Reset zoom to 100%"
              onClick={viewerHook.handleZoomReset}
            >
              {Math.round(viewerHook.scale * 100)}%
            </button>   

            <IconButton 
              svgIconComponent={ <PlusIcon /> }
              className="btn-primary viewer-btn" 
              aria-label="Zoom in"
              onClick={viewerHook.handleZoomIn}
            />
          </div>

        </div>
        
      </div>
    </>
  );

  return (
    <>
      <div 
        className={`thumbnail-wrap ${className}`} 
        onClick={viewerHook.openModal} 
        title="Click to expand"
      >
        <img className="thumbnail" src={imgPath} alt={alt} />
        <div className="thumbnail-overlay">
          <ZoomIcon />
        </div>
      </div>

      {
        viewerHook.isOpen ? 
          createPortal(imageViewerContent, document.body)
          : null
      }
    </>
  );
}