import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

import IconButton from '../Buttons/IconButton/IconButton';
import CloseIcon from '../Icons/CloseIcon';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';
import ZoomIcon from '../Icons/ZoomIcon';

export default function ImageViewer({ imgPath, alt = '', caption, className = '' }) {

  const [isOpen, setIsOpen] = useState(false);
  const imgRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, [isOpen, closeModal]);

  const imageViewerContent = (
    <>
      <div className="viewer-backdrop" onClick={closeModal} >

        {/* Inner modal: click inside doesn't close */}
        <div className="viewer-modal" onClick={(e) => e.stopPropagation()} >

          <div className="viewer-header">
            <IconButton 
              svgIconComponent={ <CloseIcon className="viewer-close-icon" /> }
              className="btn-primary viewer-close viewer-btn" 
              onClick={closeModal}
              aria-label="Close viewer"
            />
          </div>                   
          
          <div className="viewer-img-main" >
            <img 
              ref={imgRef} 
              className="viewer-img"
              src={imgPath}
              alt={alt} 
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
            />

            <button 
              className="zoom-tracker" 
              aria-label="Reset zoom to 100%"
            >
              {100}%
            </button>   

            <IconButton 
              svgIconComponent={ <PlusIcon /> }
              className="btn-primary viewer-btn" 
              aria-label="Zoom in"
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

