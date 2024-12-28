import React from "react";
import { TRANSLATES } from "utils/translates";

function Contact({ info, currLanguage }) {
    const { title, image, content, type } = info;
    let hrefType = "";
    if (type === "phone") {
        hrefType = "tel:";
    } else if (type === "email") {
        hrefType = "mailto:";
    } else if (type === "address") {
        hrefType =
            "https://www.google.com/maps/place/Vulcanizare+Tehn.+Spec./@47.0012219,28.8835931,19.25z/data=!4m6!3m5!1s0x40c97b257d283a1b:0xadcbe25b21ce114a!8m2!3d47.0012312!4d28.8833239!16s%2Fg%2F11r8y7nmy9?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D";
    }

    return (
        <div className='contacts-item ui__display-align-center'>
            <img
                src={image}
                alt={title}
            />
            <div className='title'>{TRANSLATES[title][currLanguage]}: </div>
            <a href={`${hrefType}${type === "address" ? "" : content.replaceAll(" ", "")}`}>
                {content}
            </a>
        </div>
    );
}

export default Contact;
