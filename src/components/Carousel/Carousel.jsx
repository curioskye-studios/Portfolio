import './Carousel.css';
import { useState } from 'react';

import CarouselItem from './CarouselItem';

import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

export default function Carousel( { carouselItems = [] } ) {

  // keep track of no. of items for displaying
  // when scrolling between items, update progress tracker

  // populate carousel using array given

  // replace content dynamically using arrows to navigvate bwteen array items (indices)
  // then populate content with content at that index, use state hook

  //functions to increase/decrease index displayed

  const itemCount = carouselItems.length; 
  if (itemCount < 1) return;

  const [currItemIndex, setCurrItemIndex] = useState(0);

  let content = carouselItems[currItemIndex];

  function navigvateLeft() {

    setCurrItemIndex(
      prevItemIndex => {
        if (prevItemIndex - 1 >= 0) {
          return prevItemIndex - 1;
        }         
        else return prevItemIndex;
      }   
    );
  }

  function navigvateRight() {

    setCurrItemIndex(
      prevItemIndex => {
        if (prevItemIndex + 1 < itemCount) {
          return prevItemIndex + 1;
        }         
        else return prevItemIndex;
      }
    );
  }

  return (
    <div className='carousel-div'>

      <ArrowButton isRight={false} hasText={false} onClick={navigvateLeft}/>

      <div className='carousel-content'>
        {content}
      </div>

      <ArrowButton hasText={false} onClick={navigvateRight}/>

    </div>
  );
}