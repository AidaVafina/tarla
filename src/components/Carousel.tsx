import React from 'react';
import '../styles/Carousel.css'; // Подключаем CSS стили для карусели

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Carousel: React.FC = () => {
    return (
        <div className="carousel-container">
            <h1>@tarlabakes</h1>
            <div className="carousel-track">
                {[...images, ...images, ...images].map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`Carousel image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
