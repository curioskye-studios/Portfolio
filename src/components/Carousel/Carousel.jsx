import './Carousel.css';
import { useState } from 'react';

import CarouselItem from './CarouselItem';

import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

export default function Carousel( { carouselItems = [] } ) {

  // keep track of no. of items for displaying, use state hook
  // when scrolling between items, update progress tracker

  // populate carousel using array given

  // replace content dynamically using arrows to navigvate bwteen array items (indices)
  // then populate content with content at that index, use state hook

  //combine project-btn with arrow button component, as one with customizing options:
  // text/no-text, arrow directtion (left/right)
  // then customize two instances below

  const [itemCount, setItemCount] = useState(carouselItems.length);
  const [currItemIndex, setCurrItemIndex] = useState(0);

  let content = carouselItems[currItemIndex];

  return (
    <div className='carousel-div'>

      <ArrowButton isRight={false} hasText={false}/>

      {content}

      <ArrowButton hasText={false}/>

    </div>
  );
}