/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title ">Meghana</h2>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="" className="footer__link"></a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        className="footer__social-icon" href="https://github.com/meghana6899" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a className="footer__social-icon" href="https://www.linkedin.com/in/sai-meghana-vemula/" target="_blank">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>

                    <a title="vemulasaimeghana@gmail.com" href="mailto:vemulasaimeghana@gmail.com" className="footer__social-icon" ><i className="bx bx-envelope"></i></a>
                </div>

                <span className="footer__copy">
                    &#169; All rights reserved
                </span>
            </div>

        </footer>
    )
}

export default Footer;