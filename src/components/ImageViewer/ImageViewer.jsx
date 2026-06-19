import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

import IconButton from '../Buttons/IconButton/IconButton';
import CloseIcon from '../Icons/CloseIcon';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';
import ZoomIcon from '../Icons/ZoomIcon';

import useImageViewer from './hooks/useImageViewer';
import { useKeyboard } from './hooks/useKeyboard';

export default function ImageViewer({ imgPath, alt = '', caption, className = '' }) {

  const viewerHook = useImageViewer();
  useKeyboard(viewerHook.isOpen, viewerHook.closeModal);

  useEffect(() => {
    const imgElement = viewerHook.imgRef.current;
    if (!imgElement) return;

    imgElement.addEventListener(
      'wheel', viewerHook.handleMouseScroll, { passive: false }
    );
    document.body.addEventListener(
      'wheel', viewerHook.disableMouseScroll, { passive: false }
    );

    return () => {
      imgElement.removeEventListener('wheel', viewerHook.handleMouseScroll);
      document.body.removeEventListener('wheel', viewerHook.disableMouseScroll);
    }
  }, [viewerHook.isOpen, viewerHook.handleMouseScroll]);

  const scaleDisplayValue = Math.round(viewerHook.currScale * 100);  

  const imgStyle = {
    // translate then scale moves the image in screen pixels before scaling
    // reversing the order would scale the translation too.
    transform: 
      `
        translate(${viewerHook.currImgPosition.xPos}px, ${viewerHook.currImgPosition.yPos}px) 
        scale(${viewerHook.currScale})
      `
  };

  const imageViewerContent = (
    <div 
      className="viewer-backdrop" 
      onClick={(e) => {if (!viewerHook.isDragging) viewerHook.closeModal}}       
      draggable={false}   
      ref={viewerHook.imgRef} 
    >

      <div className="viewer-modal" onClick={(e) => viewerHook.disableCloseModal(e)}>

        <div className="viewer-header">  
                  
          <div className='viewer-caption-wrap'>            
            <span className="viewer-caption">
              { caption ? caption : alt }  
            </span>
          </div> 

          <IconButton 
            svgIconComponent={ <CloseIcon className="viewer-close-icon" /> }
            className="btn-primary viewer-close viewer-btn" 
            onClick={viewerHook.closeModal}
            title="Close image viewer"
          />
        </div>               
        
        <div 
          className="viewer-img-main" 
          onMouseDown={viewerHook.handleMousePressed}
          onMouseMove={viewerHook.handleMouseMove}
          onMouseUp={viewerHook.handleMouseUnpressed}
          onMouseLeave={viewerHook.handleMouseUnpressed}
          // onTouchStart={viewerHook.onTouchStart}
          // onTouchEnd={viewerHook.onTouchEnd}
        >
          <img 
            className="viewer-img"
            src={imgPath}
            alt={alt} 
            style={imgStyle}
            draggable={false}
          />
        </div>        
                    
        <div className="viewer-controls">      
          <IconButton 
            svgIconComponent={ <MinusIcon /> }
            className="btn-primary viewer-btn" 
            title="Zoom out"
            onClick={viewerHook.handleZoomOut}
          />

          <button 
            className="zoom-tracker" 
            title="Reset image"
            onClick={viewerHook.resetImage}
          >
            {scaleDisplayValue}%
          </button>   

          <IconButton 
            svgIconComponent={ <PlusIcon /> }
            className="btn-primary viewer-btn" 
            title="Zoom in"
            onClick={viewerHook.handleZoomIn}
          />
        </div>

      </div>
      
    </div>
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