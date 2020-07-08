import * as React from "react";
import {createPortal} from 'react-dom';

export const PortalComponent = (
    {
        children,
        className = 'root-portal',
        element = 'div',
    }
) => {
    if (typeof window == 'undefined') return children;
    const [container] = React.useState(() => {
        const el = document.createElement(element);
        el.classList.add(className);
        return el
    });

    React.useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, []);

    return createPortal(children, container)
};
