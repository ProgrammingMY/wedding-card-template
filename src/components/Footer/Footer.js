import React from "react";
import "./Footer.css"
import OURS from '../../assets/page6/ours.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container-divider-rsvp">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='footer-ours'>
                <h2>This wedding card template is created by Loqman & Mira</h2>
                <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/">Loqman's LinkedIn</a>
                <br></br>
                <a href="https://github.com/akkeyron/wedding-card-template/tree/master">Github</a>
                
            </div>
        </footer>
    )
}

export default Footer