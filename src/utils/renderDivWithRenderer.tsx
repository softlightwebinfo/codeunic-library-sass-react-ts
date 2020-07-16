/**
 * @description Will return renderer result if presented, div element otherwise.
 * If renderer is presented it'll receive `elementRef` function which should be used as HTMLElement's ref.
 *
 * @param props {ElementPropsWithElementRefAndRenderer}
 * @param elementRef {ElementRef}
 */
import * as React from "react";
import {isFun} from "./is";
import {IElementPropsWithElementRefAndRenderer, IElementRef} from "../Interfaces/IElementPropsWithElementRefAndRenderer";

export const renderDivWithRenderer = (props: IElementPropsWithElementRefAndRenderer, elementRef: IElementRef) => {
    if (isFun(props.renderer)) {
        props.elementRef = elementRef;

        const renderer = props.renderer!;

        delete props.renderer;

        return renderer(props);
    }

    delete props.elementRef;

    return <div {...props} ref={elementRef}/>;
};
