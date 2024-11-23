import React from "react";
import { Link } from "react-router-dom";

function NavLink({ path, name, isActive }) {
    return (
        <Link
            to={path}
            className={`header__navigation--item ui__display-center ${isActive && "active"}`}
        >
            {name}
        </Link>
    );
}

export default NavLink;
