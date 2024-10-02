import React from 'react';
import '../../styles/Advantages.css';

interface AdvantageCardProps {
    image: string;
    title: string;
    description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ image, title, description }) => {
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <div className="transparent-point">
            <img src={image} alt={title} className="transparent-point-image" />
            <h3 className="transparent-point-title">
                {firstPart}<br />{lastWord}
            </h3>
            <p className="transparent-point-description">{description}</p>
        </div>
    );
};

export default AdvantageCard;
