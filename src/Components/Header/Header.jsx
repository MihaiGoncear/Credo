import React from "react";
import Logo from "./Components/Logo/Logo";
import Languages from "./Components/Languages/Languages";
import Navigation from "./Components/Navigation/Navigation";
import "./Header.sass";

function Header({ isAdmin }) {
    return (
        <div className='header'>
            <div className='general-wrapper ui__display-align-center'>
                <Logo />
                {!isAdmin && (
                    <>
                        <Navigation />
                        <Languages />
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
