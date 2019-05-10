//import React from 'react';
import React, { Component } from 'react';
import '../Css/Slideshow.css'
import ImageGallery from 'react-image-gallery';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      cellCount: 9
    }
   // let carousel = document.querySelector('.carousel');
    
 
  }

  componentDidMount() {
 console.log("this.state:", this.state.selectedIndex)
  }

  rotateCarousel = (si) => {
    let carousel = document.querySelector('.carousel')
    let angle = si/ this.state.cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  }
  
  prevButton = () => {
 console.log("this.selectedIndex:", this.state.selectedIndex)
   let SelectedIndex =  this.state.selectedIndex;
   SelectedIndex--;
   this.setState(() => ({ selectedIndex: SelectedIndex }));

   this.rotateCarousel(SelectedIndex);

  }
  
 
 nextButton = () => {
  let SelectedIndex =  this.state.selectedIndex;
  SelectedIndex++;
  this.setState(() => ({ selectedIndex: SelectedIndex }));
 
  this.rotateCarousel(SelectedIndex);
  }
 
 /*  const images = [
    'http://lorempixel.com/1000/600/nature/3/',
    'http://lorempixel.com/1000/600/nature/2/'
   ]; */
   
  /* const properties = {
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
  } */
  
  
render() {

  //const Slideshow = () => {
    return (
/*       <div className="new-slide">
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img  className="slideshow" key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
      </div> */
 //  )
//}

<div className="new-slide">
<div className="scene">
  <div className="carousel">
    <div className="carousel__cell">1</div>
    <div className="carousel__cell">2</div>
    <div className="carousel__cell">3</div>
    <div className="carousel__cell">4</div>
    <div className="carousel__cell">5</div>
    <div className="carousel__cell">6</div>
    <div className="carousel__cell">7</div>
    <div className="carousel__cell">8</div>
    <div className="carousel__cell">9</div>
  </div>
</div>
{/* <p style="text-align: center;"> */}
<p>
  <button className="previous-button" onClick={this.prevButton}>Previous</button>
  <button className="next-button" onClick={this.nextButton}>Next</button>
</p>
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

  //Slideshow()
 

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
}
export default Slideshow;