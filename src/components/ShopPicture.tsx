import React from 'react';
import '../styles/ShopPictures.css';
import croissantcut from "../assets/croissantcut.jpg";
import BlackButton from "./elements/BlackButton.tsx";

const ShopPicture: React.FC = () => {
    return (
        <div className="shop-picture">
            <div className="image-croissantcut">
                <img src={croissantcut} alt="croissant-picture" />
            </div>

            <div className="content-croissantcut">
                <p>
                    Freshly baked means fresh bakery smells filling your home, warm oozey
                    pastries on your plates, and never needing to get out of your PJs.
                </p>
                <BlackButton text="Shop pastry kits" />
            </div>
        </div>
    );
};

export default ShopPicture;
