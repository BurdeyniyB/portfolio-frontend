import Carousel from 'react-bootstrap/Carousel';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';
import { useState } from 'react';
import CarouselCSS from '../styles/Carousel.module.css';

function CustomCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className={CarouselCSS.carouselImage}>
                    <img
                        className="d-block w-100"
                        src={project1Image}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={CarouselCSS.carouselImage}>
                    <img
                        className="d-block w-100"
                        src={project2Image}
                        alt="Second slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={CarouselCSS.carouselImage}>
                    <img
                        className="d-block w-100"
                        src={project3Image}
                        alt="Third slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={CarouselCSS.carouselImage}>
                    <img
                        className="d-block w-100"
                        src={project4Image}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;
