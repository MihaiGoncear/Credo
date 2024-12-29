import React, { useEffect, useState } from "react";
import Languages from "../Languages/Languages";
import { getBlock, updateBlock } from "api/api";
import { LANGUAGES } from "utils/constants";

function AboutUs() {
    const [language, setLanguage] = useState(LANGUAGES[0]);
    const [contentToSend, setContentToSend] = useState({});

    useEffect(() => {
        const getAddressesApi = async () => {
            let getAboutUs = await getBlock("about_us");
            if (getAboutUs.status === 200) {
                setContentToSend(getAboutUs.data[0]);
            }
        };
        getAddressesApi();
    }, []);

    const handleChange = (e) => {
        setContentToSend({
            ...contentToSend,
            [`value_${language}`]: e.target.value,
        });
    };

    const handleUpdateBlock = async () => {
        await updateBlock(contentToSend);
    };

    return (
        <>
            <Languages
                language={language}
                setLanguage={setLanguage}
            />
            <div className='admin-content__about-us'>
                <textarea
                    onChange={(e) => handleChange(e)}
                    value={contentToSend[`value_${language}`]}
                />
                <div
                    className='send-button'
                    onClick={handleUpdateBlock}
                >
                    Trimite
                </div>
            </div>
        </>
    );
}

export default AboutUs;
