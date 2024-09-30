import React from 'react';
import "../../styles/Work.css"

interface PointProps {
    image: string;
    title: string;
    description: string;
}

const Point: React.FC<PointProps> = ({ image, title, description }) => {
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop(); // Последнее слово
    const firstPart = titleWords.join(' '); // Первая часть заголовка

    return (
        <div className="point">
            <img src={image} alt={title} className="point-image" />
            <h3 className="point-title">
                {firstPart}<br />{lastWord}
            </h3>
            <p className="point-description">{description}</p>
        </div>
    );
};

export default Point;
