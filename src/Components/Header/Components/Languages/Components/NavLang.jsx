import React from "react";

function NavLang({ name, isActive, onClick }) {
    return (
        <div
            onClick={() => onClick(name)}
            className={`${isActive && "active"} header__languages--item`}
        >
            {name}
        </div>
    );
}

export default NavLang;
