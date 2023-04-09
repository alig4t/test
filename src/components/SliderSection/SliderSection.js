import {Carousel} from 'react-bootstrap';
import img1 from './img/12d47-HDC28078-2.jpg';
import img2 from './img/7d7a1-HDC11548-2.jpg';

const SliderSection = () => {
   return(
    <Carousel indicators={false}>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src={img2}
      />

    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src={img1}   
      />

    </Carousel.Item>

  </Carousel>
   )
}

export default SliderSection