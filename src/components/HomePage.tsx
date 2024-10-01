import React from "react";
import '../styles/HomePage.css';
import BlackButton from "./elements/BlackButton.tsx";
import croissant from "../assets/croissant.jpg";

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="text-container">
                <div className="title">
                    <h2>Fresh <br/> pastry kits</h2>
                </div>
                <div className="description">
                    <h3>
                        Bringing the smells and tastes of your favourite patisserie to your home. Our kits
                        have everything you need to easily make killer pastries every time. We’ve done the
                        tricky bits so all you need to do is roll, proof and bake!
                    </h3>
                </div>
                <BlackButton text="Shop pastry kits" />
            </div>

            <div className="croissant-picture">
                <img src={croissant} className="croissant-picture" alt="croissant-picture" />
            </div>
        </div>
    );
};

export default HomePage;
