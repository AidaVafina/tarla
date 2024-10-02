import React from 'react';
import '../styles/ReadMore.css';
import read1 from '../assets/read1.jpg';
import read2 from '../assets/legend.jpg';
import BlackButton from "./elements/BlackButton.tsx";

const ReadMore: React.FC = () => {
    return (
        <div className="read-more">
            <div className="read-more_first">
                <div className="text-more">
                    <div className="title">
                        <p>Amazing Ingredients</p>
                    </div>
                    <div className="description">
                        <p>We like to keep things simple and authentic. We’ve sourced the very best from the very best,
                            from our Poitou-Charentes butter to our Valrhona chocolate batons.</p>
                    </div>
                    <BlackButton text="Read more" />
                </div>
                <img src={read1} alt="Amazing Ingredients" className="read1" />
            </div>

            <div className="read-more_last">
                <div className="text-more">
                    <div className="title">
                        <p>Legendary Bakes</p>
                    </div>
                    <div className="description">
                        <p>The inspiration for our brand and our guiding principles is the Legend of El Tarlà. A young
                            man
                            who brought joy to the isolated citizens of Girona during an outbreak of the plague.</p>
                    </div>
                    <BlackButton text="Read more" />
                </div>
                <img src={read2} alt="Legendary Bakes" className="read2" />
            </div>
        </div>
    );
};

export default ReadMore;
