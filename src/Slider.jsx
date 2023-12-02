import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Frontend from './Frontend.jpg'
import lowCode from './low-code.jpg'
import reacone from './reactone.jpeg'

const Slider =()=>{
    return(
        <Carousel className='Carousel'>
      <Carousel.Item>
        <img src={Frontend} className='SliderImg' alt='frontend' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={lowCode} className='SliderImg' alt='code' text="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={reacone} className='SliderImg' alt='react' text="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    )
  

}

export default Slider