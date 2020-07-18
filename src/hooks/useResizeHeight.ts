import {useEffect, useRef, useState} from "react";

export default function useResizeHeight() {
    const [height, setHeight] = useState(window.innerHeight);
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
