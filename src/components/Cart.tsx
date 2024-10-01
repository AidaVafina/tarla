import React from 'react';
import { useCart } from './CartContext';
import ShopItem from './ShopItem';

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { cartItems } = useCart();

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-popup" onClick={(e) => e.stopPropagation() }>
                <button onClick={onClose} className="close-button">X</button>
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <ShopItem image={item.image} title={item.title} cost={item.cost} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
