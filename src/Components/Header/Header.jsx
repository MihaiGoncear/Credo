import React from "react";
import Logo from "./Components/Logo/Logo";
import Languages from "./Components/Languages/Languages";
import Navigation from "./Components/Navigation/Navigation";
import "./Header.sass";

function Header() {
    return (
        <div className='header'>
            <div className='general-wrapper ui__display-align-center'>
                <Logo />
                <Languages />
                <Navigation />
            </div>
        </div>
    );
}

export default Header;
