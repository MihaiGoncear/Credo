import React from "react";
import { LANGUAGES } from "utils/constants";

function Languages({ setLanguage, language }) {
    return (
        <div className='admin-content__languages ui__display-align-center'>
            {LANGUAGES.map((lang) => (
                <div
                    key={lang}
                    className={`language ${language === lang ? "active" : ""}`}
                    onClick={() => setLanguage(lang)}
                >
                    {lang}
                </div>
            ))}
        </div>
    );
}

export default Languages;
