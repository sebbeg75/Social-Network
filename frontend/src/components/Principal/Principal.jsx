import React from 'react';
import './Principal.scss';
import Carousel from 'react-bootstrap/Carousel';
import Pic18 from './Pic18.jpg';
import Pic19 from './Pic19.jpg';
import Pic20 from './Pic20.jpg';


const Principal = () => {
    return (
        
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic18}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mallorca</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic19}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Koh Samui</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic20}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Valencia</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                
            
        
    )
};

export default Principal;