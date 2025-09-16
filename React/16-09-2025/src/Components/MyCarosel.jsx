import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import sasuke from '../Images/sasuke.jpg'
import video from '../Images/video.mp4'
function MyCarosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="img1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="img2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sasuke} alt="img3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
  <video 
    src={video} 
    autoPlay 
    muted 
    loop 
    playsInline
    style={{ width: "1500px", height: "300px", objectFit: "cover" }}
  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>

    </Carousel>
  );
}

export default MyCarosel;