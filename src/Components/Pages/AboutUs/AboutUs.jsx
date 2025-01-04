import { getBlock } from "api/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./AboutUs.sass";

function AboutUs() {
    const [content, setContent] = useState("");
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

    useEffect(() => {
        const getAddressesApi = async () => {
            let getAboutUs = await getBlock("about_us");
            if (getAboutUs.status === 200) {
                setContent(getAboutUs.data[0][`value_${currLanguage}`]);
            }
        };
        getAddressesApi();
    }, [currLanguage]);

    return (
        <div className='about-page'>
            <div
                className='general-wrapper'
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

export default AboutUs;
