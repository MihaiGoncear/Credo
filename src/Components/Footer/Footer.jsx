import React from "react";
import "./Footer.sass";
import Contact from "./Components/Contact";
import { CONTACTS } from "utils/constants";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer ui__display-align-center'>
            <div className='general-wrapper ui__rows footer__wrapper'>
                <a
                    href='/'
                    className='footer__logo'
                >
                    <img
                        src='/images/icons/general/credo-logo.png'
                        alt='logo'
                    />
                </a>
                <div className='footer__contacts ui__rows'>
                    {CONTACTS.map((contact, index) => (
                        <Contact
                            info={contact}
                            key={index}
                        />
                    ))}
                </div>
                <p className='footer__text'>
                    © Toate drepturile rezervate S.R.L. Credo Industry 2004 - {year}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
