import React, { useState } from 'react';
import '../styles/Header.css';
import frame from '../assets/Frame.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import AuthPopup from './AuthPopup';
import Cart from './Cart';

const Header: React.FC = () => {
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="left-element">
                    <img src={frame} alt="Logo" className="agon-image" />
                    <ul className="menu">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#work">ABOUT US</a></li>
                        <li><a href="#shop">SHOP</a></li>
                    </ul>
                </div>
                <div className="right-element">
                    <button className="icon-button" onClick={() => setIsAuthPopupOpen(true)}>
                        <img src={icon1} alt="Log In Icon" className="button-icon" />
                        <span className="button-text">Log in</span>
                    </button>
                    <button className="icon-button" onClick={() => setIsCartOpen(true)}>
                        <img src={icon2} alt="Cart Icon" className="button-icon" />
                        <span className="button-text">Cart</span>
                    </button>
                </div>
            </div>

            {isAuthPopupOpen && <AuthPopup onClose={() => setIsAuthPopupOpen(false)} />}
            {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
        </>
    );
};

export default Header;
