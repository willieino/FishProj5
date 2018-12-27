import React from 'react';
import '../Css/Slideshow.css'
import ImageGallery from 'react-image-gallery';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

//class Slideshow extends React.Component {
 

  const images = [
    'http://lorempixel.com/1000/600/nature/3/',
    'http://lorempixel.com/1000/600/nature/2/'
   ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
  
  
  const Slideshow = () => {
    return (
      <div className="new-slide">
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img  className="slideshow" key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
      </div>
    )
}
/*   const Slideshow = () => {
      return (
        <Slide {...properties}>
          <div className="each-slide">
            <div className="new-slide" style={{'background-image': `url(${'http://i.4cdn.org/hr/1518039485750.jpg'})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="new-slide">
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'background-image': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      )
  } */

  Slideshow()
 

   /*  const images = [
      {
        original: 'http://i.4cdn.org/hr/1518039485750/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
} */
/* const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
} */
 
/* const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img  className="slideshow" key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
} */
  
 
  /*  const slideImages = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ]; 
   
    const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  } 
   
   const Slideshow = () => {
      return (
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${images[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${images[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${images[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      )
  } 
  
   

    Slideshow()

      */

   /*   return (
    <div className="slideshow">
    <div className="slide"></div>
    
    <div className="slide-btn-container">
    <div className="prev-btn" onClick={this.props.prevHandler}></div>
    <div className="start-btn" onClick={this.props.startHandler}></div>
    <div className="close-btn" onClick={this.props.closeHandler}></div>
    <div className="next-btn" onClick={this.props.nextHandler}></div>
    </div>
     
    </div>
  ) */ 

export default Slideshow;