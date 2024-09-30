import React from 'react';
import '../styles/Shop.css';
import ShopItem from "./ShopItem.tsx";
import butter from "../assets/butter.jpg";
import almond from "../assets/almond.jpg";
import raspberry from "../assets/raspberry.jpg";
import paisins from "../assets/paisins.jpg";
import abricot from "../assets/abricot.jpg";
import chocolat from "../assets/chocolat.jpg";

const Shop: React.FC = () => {
    return (
        <div className="shop-container">
            <h1>Shop pastry kits</h1>

        <div className="shop">
            <ShopItem
                image={butter}
                title="ALL-BUTTER CROISSANT"
                cost="KIT OF 6 - £12"
            />
            <ShopItem
                image={almond}
                title="ALMOND CROISSANT"
                cost="KIT OF 6 - £13.50"
            />
            <ShopItem
                image={raspberry}
                title="RASPBERRY DANISH"
                cost="KIT OF 6 - £13.50"
            />
            <ShopItem
                image={paisins}
                title="PAIN AUX PAISINS"
                cost="KIT OF 6 - £13.50"
            />
            <ShopItem
                image={abricot}
                title="APRICOT DANISH"
                cost="KIT OF 6 - £13.50"
            />
            <ShopItem
                image={chocolat}
                title="PAIN AU CHOCOLAT"
                cost="KIT OF 6 - £13.50"
            />
        </div>
        </div>
    );
};

export default Shop;
