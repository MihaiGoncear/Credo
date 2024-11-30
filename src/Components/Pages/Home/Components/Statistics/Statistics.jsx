import React from "react";
import Statistic from "./Components/Statistic";
import { MERITS } from "utils/constants";

function Statistics() {
    return (
        <div className='home__statistics ui__rows ui__display-justify-between'>
            {MERITS.map((item, index) => (
                <Statistic
                    key={index}
                    info={item}
                />
            ))}
        </div>
    );
}

export default Statistics;
