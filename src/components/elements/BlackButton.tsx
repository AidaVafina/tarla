import React from "react";

interface BlackButtonProps {
    text: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({ text }) => {
    return (
        <button className="black-button">
            {text}
        </button>
    );
};

export default BlackButton;
