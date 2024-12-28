import React, { useState } from "react";
import { DESPRE_NOI } from "utils/backend";
import Languages from "../Languages/Languages";
import { LANGUAGES } from "utils/constants";

function AboutUs() {
    const [language, setLanguage] = useState(LANGUAGES[0]);

    return (
        <>
            <Languages
                language={language}
                setLanguage={setLanguage}
            />
            <div className='admin-content__about-us'>
                <textarea value={DESPRE_NOI[language]} />
            </div>
        </>
    );
}

export default AboutUs;
