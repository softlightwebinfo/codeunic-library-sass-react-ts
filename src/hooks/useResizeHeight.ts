import {useEffect, useRef, useState} from "react";

export default function useResizeHeight() {
    const [height, setHeight] = useState(typeof window != "undefined" ? window.innerHeight : 0);
    let ref = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return {ref, height, setHeight}
};
