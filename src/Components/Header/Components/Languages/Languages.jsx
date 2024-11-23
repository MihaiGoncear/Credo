import React, { useRef, useState } from "react";
import NavLang from "./Components/NavLang";
import { useDispatch, useSelector } from "react-redux";
import useClickOutsideTarget from "hooks/useClickOutsideTarget";
import { LANGUAGES } from "utils/constants";
import { setLanguage } from "../../../../redux/slices/languageSlice";

function Languages() {
    const [isLanguageActive, setIsLanguageActive] = useState(false);

    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    const dispatch = useDispatch();

    const changeLanguage = (item) => {
        dispatch(setLanguage(item));
    };

    const langRef = useRef(null);
    useClickOutsideTarget(langRef, setIsLanguageActive);

    return (
        <div
            ref={langRef}
            className='ui__display-align-center header__languages'
            onClick={() => setIsLanguageActive((state) => !state)}
        >
            <div
                className={`header__languages--head ui__custom-arrow-select ${
                    isLanguageActive && "active"
                }`}
            >
                {currLanguage}
            </div>
            <div className={`header__languages--items ${!isLanguageActive && "hidden"}`}>
                {LANGUAGES.map((itm) => (
                    <NavLang
                        key={itm}
                        name={itm}
                        onClick={changeLanguage}
                        isActive={currLanguage === itm}
                    />
                ))}
            </div>
        </div>
    );
}

export default Languages;
