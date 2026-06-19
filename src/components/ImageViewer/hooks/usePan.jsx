import { useState, useRef } from 'react';

export default function usePan() {	

  const [currImgPosition, setCurrImgPosition] = useState({ xPos: 0, yPos: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ xPos: 0, yPos: 0 }); // no reset on render

  function resetImgPosition() {    
    setCurrImgPosition({ xPos: 0, yPos: 0 });
  }

	return {
		currImgPosition,
		setCurrImgPosition,

		isDragging,
		setIsDragging,

		dragStart,

		resetImgPosition
	};
}