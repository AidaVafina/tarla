import React from 'react';
import '../styles/Information.css';

const Information: React.FC = () => {
    return (
        <div className="information">
            <h4>We're focusing on London to start with, please enter your post code here to see if you're within our
                delivery zone!</h4>
            <input type="text" placeholder="Post code"/>
            <button>Check</button>
        </div>
    );
};

export default Information;
