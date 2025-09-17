import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import sasuke from '../Images/sasuke.jpg'

function Carosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={img1} alt="img1" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img2} alt="img2" />
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img className='d-block w-100' src={sasuke} alt="img3" />
        
      </Carousel.Item>
     

    </Carousel>
  );
}

export default Carosel;