import React from "react";
import Statistic from "./Components/Statistic";
import { MERITS } from "utils/constants";
import { useSelector } from "react-redux";

function Statistics() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div className='home__statistics ui__rows ui__display-justify-between'>
            {MERITS.map((item, index) => (
                <Statistic
                    key={index}
                    info={item}
                    currLanguage={currLanguage}
                />
            ))}
        </div>
    );
}

export default Statistics;
