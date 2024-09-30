import React from 'react';
import '../styles/Work.css';
import BlackButton from "./elements/BlackButton.tsx";
import Point from "./elements/Point.tsx";
import iconcroissant from '../assets/iconcroissant.png';
import icondingdon from '../assets/icondingdon.png';
import iconbake from '../assets/iconbake.png';
import iconlove from '../assets/iconlove.png';

const Work: React.FC = () => {
    return (
        <div className="work">

            <div className="h">
                <h1>How it works</h1>
            </div>

            <div className="points">
                <Point
                    image={iconcroissant}
                    title="CHOOSE YOUR FAVE"
                    description="This sounds easier than it's going to be. We've got all the classics on here, so now it's over to you."
                />
                <Point
                    image={icondingdon}
                    title="DING DONG"
                    description="Next you'll get a beautiful little package delivered to your door, on a day and time slot that you choose."
                />
                <Point
                    image={iconbake}
                    title="GET BAKED"
                    description="Take your fresh pastry sheet and fillings, learn our pro techniques then never buy a stale pastry ever again."
                />
                <Point
                    image={iconlove}
                    title="TAKE THE CREDIT"
                    description="It was all you, nudge-nudge wink-wink. We're just happy to be your loyal side-kick."
                />
            </div>

            <BlackButton text="Shop pastry kits"/>
        </div>
    );
};

export default Work;
