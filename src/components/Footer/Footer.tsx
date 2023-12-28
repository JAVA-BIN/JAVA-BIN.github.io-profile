import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By CHAEBIN LIM")}</p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;