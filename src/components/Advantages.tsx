import React from 'react';
import '../styles/Advantages.css'
import AdvantageCard from "./elements/AdvantageCard.tsx";
import better from "../assets/better.jpg";
import pack from "../assets/pack.jpg";
import bake from "../assets/bake.jpg";

const Advantages: React.FC = () => {
    return (
        <div className="advantages">
            <AdvantageCard
                image={better}
                title="Better than the bakery"
                description="You’ll soon be making pastries to rival the best bakeries in town. We use only the best ingredients for generous pastries that taste and smell amazing. So good, that you’ll take all the credit."
            />
            <AdvantageCard
                image={pack}
                title="Planet-friendly packaging"
                description="We’ve done everything we can to make sure our packaging has the lightest footprint on the planet as possible. We’ve made sure everything is recyclable, and use as little packaging as we can."
            />
            <AdvantageCard
                image={bake}
                title="Simple to bake at home"
                description="We’ve done the hard work, so you don’t have to. Every pastry is easy to make with our 3-step instructions and doesn’t require any special tools – just an oven!"
            />
        </div>
    );
};


export default Advantages;
