import React from 'react';
import '../styles/Shop.css'

interface ShopItemProps {
    image: string;
    title: string;
    cost: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ image, title, cost }) => {
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop(); // Последнее слово
    const firstPart = titleWords.join(' '); // Первая часть заголовка

    return (
        <div className="shop-item">
            <img src={image} alt={title} className="item-image" />
            <h3 className="item-title">
                {firstPart}<br />{lastWord}
            </h3>

            <p className="cost">{cost}</p>
        </div>
    );
};

export default ShopItem;
