import React from 'react';
import { useCart } from './CartContext';

interface ShopItemProps {
    image: string;
    title: string;
    cost: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ image, title, cost }) => {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const itemInCart = isInCart(title);

    return (
        <div className="shop-item">
            <img src={image} alt={title} className="item-image" />
            <h3 className="item-title">{title}</h3>
            <p className="cost">{cost}</p>

            {itemInCart ? (
                <button className="remove-from-cart-button" onClick={() => removeFromCart(title)}>
                    Remove
                </button>
            ) : (
                <button className="add-to-cart-button" onClick={() => addToCart({ image, title, cost })}>
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ShopItem;
