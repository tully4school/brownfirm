import React, { useState, render } from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from '../../images/slideone.jpg';
import SlideTwo from '../../images/slidetwo.jpg';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item className="w-50">
                <img
                    className="first-slide d-block w-100"
                    src={SlideOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Comprehensive Legal Service That Works</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="w-50">
                <img
                    className="d-block w-100"
                    src={SlideTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>We Protect You By Providing Proven Legal Services</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}



export default ControlledCarousel