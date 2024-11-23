import { useState, useEffect } from "react";

function useWindowSizes() {
    const [windowSizes, setWindowSizes] = useState(calcCurrentWindowSizes());

    const debounce = (func, timeout = 250) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    };

    useEffect(() => {
        const debounceHandleResize = debounce(() => {
            setWindowSizes(calcCurrentWindowSizes);
        });

        window.addEventListener("resize", debounceHandleResize);

        return () => {
            window.removeEventListener("resize", debounceHandleResize);
        };
    }, []);

    return windowSizes;
}

function calcCurrentWindowSizes() {
    return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        isPortrait: window.innerWidth < window.innerHeight,
        isMobile: window.innerWidth <= 720,
    };
}

export default useWindowSizes;
