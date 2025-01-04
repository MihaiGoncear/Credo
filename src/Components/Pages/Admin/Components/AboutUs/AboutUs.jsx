import React, { useEffect, useState } from "react";
import Languages from "../Languages/Languages";
import { getBlock, updateBlock } from "api/api";
import { LANGUAGES } from "utils/constants";
import CustomWysiwyg from "../CustomWysiwyg/CustomWysiwyg";
import { useSelector } from "react-redux";

function AboutUs() {
    const [language, setLanguage] = useState(LANGUAGES[0]);
    const [contentToSend, setContentToSend] = useState({});

    //@ts-ignore
    const token = useSelector((state) => state.token);

    useEffect(() => {
        const getAddressesApi = async () => {
            let getAboutUs = await getBlock("about_us");
            if (getAboutUs.status === 200) {
                setContentToSend(getAboutUs.data[0]);
            }
        };
        getAddressesApi();
    }, []);

    const handleUpdateBlock = async () => {
        try {
            const res = await updateBlock({ ...contentToSend, token: token });
            console.log(res);

            if (!res.data.error) {
                alert("Informația a fost actualizată cu succes!");
            } else {
                alert(res.data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleWysiwygChange = (updatedContent) => {
        setContentToSend({
            ...contentToSend,
            [`value_${language}`]: updatedContent,
        });
    };

    return (
        <>
            <Languages
                language={language}
                setLanguage={setLanguage}
            />
            <div className='admin-content__about-us'>
                <CustomWysiwyg
                    content={contentToSend[`value_${language}`] || ""}
                    onChange={handleWysiwygChange}
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
