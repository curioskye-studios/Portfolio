import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

import IconButton from '../Buttons/IconButton/IconButton';
import CloseIcon from '../Icons/CloseIcon';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';
import ZoomIcon from '../Icons/ZoomIcon';

import { useState } from 'react';

// import { useImageViewer } from './hooks/useImageViewer';
// import { useKeyboard } from './hooks/useKeyboard';

export default function ImageViewer({ imgPath, alt = '', caption, className = '' }) {

  const [isOpen, setIsOpen] = useState(false); 

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  function disableCloseModal(closeEvent) {
    closeEvent.stopPropagation();
  }
  

  const imageViewerContent = (
    <>
      <div 
        className="viewer-backdrop" 
        onClick={closeModal} 
        // onMouseMove={viewerHook.onMouseMove}
        // onMouseUp={viewerHook.onMouseUp}
        // onMouseLeave={viewerHook.onMouseUp}
      >

        <div className="viewer-modal" onClick={(e) => disableCloseModal(e)}>

          <div className="viewer-header">  
                    
            <div className='viewer-caption-wrap'>            
              <span className="viewer-caption">
                { caption ? caption : alt }  
              </span>
            </div> 

            <IconButton 
              svgIconComponent={ <CloseIcon className="viewer-close-icon" /> }
              className="btn-primary viewer-close viewer-btn" 
              onClick={closeModal}
              title="Close image viewer"
            />
          </div>               
          
          <div 
            className="viewer-img-main" 
            // onMouseDown={viewerHook.onMouseDown}
            // onTouchStart={viewerHook.onTouchStart}
            // onTouchEnd={viewerHook.onTouchEnd}
          >
            <img 
              // ref={viewerHook.imgRef} 
              className="viewer-img"
              src={imgPath}
              alt={alt} 
              // style={imgStyle}
              draggable={false}                 
            />
          </div>        
                     
          <div className="viewer-controls">      
            <IconButton 
              svgIconComponent={ <MinusIcon /> }
              className="btn-primary viewer-btn" 
              title="Zoom out"
              // onClick={viewerHook.handleZoomOut}
            />

            <button 
              className="zoom-tracker" 
              title="Reset zoom to 100%"
              // onClick={viewerHook.handleZoomReset}
            >
              {/* {Math.round(viewerHook.scale * 100)}% */}
              100%
            </button>   

            <IconButton 
              svgIconComponent={ <PlusIcon /> }
              className="btn-primary viewer-btn" 
              title="Zoom in"
              // onClick={viewerHook.handleZoomIn}
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
        onClick={openModal} 
        title="Click to expand"
      >
        <img className="thumbnail" src={imgPath} alt={alt} />
        <div className="thumbnail-overlay">
          <ZoomIcon />
        </div>
      </div>

      {
        isOpen ? 
          createPortal(imageViewerContent, document.body)
          : null
      }
    </>
  );
}