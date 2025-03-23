import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import ProjectCSS from '../styles/Project.module.css';

interface ProjectProps {
    folder?: string;
    imagesProp?: string[];
    isHovered: boolean; 
}

function Project({ folder, imagesProp, isHovered }: ProjectProps) {
    const generalPath = '/images/projects/';
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        if (imagesProp) {
            setImages(imagesProp.map(element => generalPath + folder + element + '.png'));
        }
    }, [imagesProp]);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((src, idx) => (
                <Carousel.Item key={idx}>
                    <div className={`${ProjectCSS.projectImage} ${isHovered ? ProjectCSS.hovered : ""}`}>
                        <img src={src} alt={`Slide ${idx + 1}`} />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Project;
