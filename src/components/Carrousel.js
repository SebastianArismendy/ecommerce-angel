import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fondo from '../images/banner.webp';

const Carrousel = (props) => {
    return (
        <Carousel style={{ marginTop: '72px' }}>
            <Carousel.Item interval={100000}>
                <img
                    className="d-block w-100"
                    style={{ height: '550px', objectFit: 'cover', objectPosition: 'top' }}
                    src={fondo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Primer slide</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    style={{ height: '550px', objectFit: 'cover', objectPosition: 'top' }}
                    src={fondo}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Segundo slide</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    style={{ height: '550px', objectFit: 'cover', objectPosition: 'top' }}
                    src={fondo}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Tercer slide</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carrousel;