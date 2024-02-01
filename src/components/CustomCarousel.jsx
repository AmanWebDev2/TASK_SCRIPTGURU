import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="m-4">
<Carousel>
      <Carousel.Item interval={1000}>
        <img src={Img1} alt="" srcset="" />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={Img2} alt="" srcset="" />

         
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img3} alt="" srcset="" />

         
      </Carousel.Item>
    </Carousel>
  </div>
  )

}

export default CustomCarousel