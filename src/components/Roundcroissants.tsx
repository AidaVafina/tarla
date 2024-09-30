import React from 'react';
import roundcroissants from "../assets/roundcroissants.jpg";
import '../styles/Roundcroissants.css';

const RoundCroissants: React.FC = () => {
    return (
        <div className="roundcroissants">
            <img src={roundcroissants} alt="roundcroissants" className="cropped-image" />
        </div>
    );
};

export default RoundCroissants;
