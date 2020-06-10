import React from 'react';
import './Principal.scss';
import Carousel from 'react-bootstrap/Carousel';
import Pic18 from './Pic18.jpg';
import Pic22 from './Pic22.jpg';
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
      
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pic22}
                    alt="Second slide"
                />

                <Carousel.Caption>
      
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pic20}
                    alt="Third slide"
                />

                <Carousel.Caption>
      
                </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
};

export default Principal;