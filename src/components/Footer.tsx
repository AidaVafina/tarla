import React from 'react';
import BlackButton from "./elements/BlackButton.tsx";
import frame from "../assets/Frame.png";
import ccc from "../assets/ccc.png";
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="first">
                <h1>
                    Join our community
                </h1>
                <h2>
                    and let's get baked
                </h2>
                <BlackButton text="join" />
            </div>

            <div className="second ">
                <div className="logo">
                    <img src={frame} alt="Logo" className="agon-image"/>
                </div>
                <div className="account">
                <h3>Account</h3>
                    <a href="URL">SIGN UP</a>
                    <a href="URL">LOG IN</a>
                </div>
                <div className="company">
                    <h3>Our company</h3>
                    <a href="URL">SHOP</a>
                    <a href="URL">OUR STORY</a>
                    <a href="URL">WHO IS TARLA?</a>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <a href="">FAQ</a>
                    <a href="">CONTACT</a>
                    <a href="">BECOME AN INFLUENCER</a>
                    <a href="">PRIVACY POLICY</a>
                    <a href="">TERMS OF SERVICE</a>
                    <a href="">REFUND POLICY</a>
                </div>
                <div className="contacts">
                    <h3>@tarlabakes</h3>
                    <img src= {ccc} alt="ccc" className="ccc"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
