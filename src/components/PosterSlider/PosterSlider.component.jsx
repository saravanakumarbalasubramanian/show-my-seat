import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.component';
// config 
import PosterCarouselSettings from '../../config/PosterCarousel.config';

 const PosterSlider = (props) => {
  return (
    <>
       <div className='flex flex-col items-start'>
    <h3 className={`text-white text-xl font-bold ${
            props.isDark ? "text-white" : "text-grey-700"
        }`}>{props.title}</h3>
    <p className={` text-sm ${
            props.isDark ? "text-white" : "text-grey-700"
        }`}>{props.subtitle}</p>
   </div>
   <Slider {...PosterCarouselSettings}>
    {props.images.map((image)=>(
        <Poster {...image} isDark={props.isDark} />
    ))}
   </Slider>
    </>
  )
}

export default PosterSlider ;