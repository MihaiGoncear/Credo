import React, { useRef, useState } from "react";
import { HEADER_NAV_LINKS } from "../../../../utils/constants";
import { useLocation } from "react-router-dom";
import NavLink from "./Components/NavLink";
import useWindowSizes from "../../../../hooks/useWindowSizes";
import useClickOutsideTarget from "../../../../hooks/useClickDocument";

function Navigation() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const location = useLocation();
    const activeTab = `${location.pathname}${location.hash}`;
    const { isMobile } = useWindowSizes();
    const menuRef = useRef(null);
    useClickOutsideTarget(menuRef, setIsMenuActive);

    return (
        <div className='header__navigation '>
            {isMobile && (
                <div
                    className={`header__navigation--mobile ui__cols ui__display-justify-between ${
                        isMenuActive && "active"
                    }`}
                    onClick={() => setIsMenuActive((state) => !state)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            <div
                ref={menuRef}
                className={`header__navigation--items ui__display-align-center ${
                    isMobile && !isMenuActive && "hidden"
                }`}
                onClick={() => setIsMenuActive((state) => !state)}
            >
                {HEADER_NAV_LINKS.map((itm) => {
                    return (
                        <NavLink
                            isActive={activeTab === itm.path}
                            key={itm.name}
                            name={itm.name}
                            path={itm.path}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Navigation;
