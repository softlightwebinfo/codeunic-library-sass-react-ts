/**
 * @description Returns scrollbar width specific for current environment. Can return undefined if DOM is not ready yet.
 */
import {doc, GetScrollbarWidthFN, isUndef} from "./is";

export const getScrollbarWidth: GetScrollbarWidthFN = (force: boolean = false): number | undefined => {
    if (!doc) {
        return (getScrollbarWidth._cache = 0);
    }

    if (!force && !isUndef(getScrollbarWidth._cache)) {
        return getScrollbarWidth._cache as number;
    }

    let el = doc.createElement("div");
    el.setAttribute("style", "position:absolute;width:100px;height:100px;top:-999px;left:-999px;overflow:scroll;");

    doc.body.appendChild(el);

    /* istanbul ignore next */
    if (el.clientWidth === 0) {
        // Do not even cache this value because there is no calculations. Issue https://github.com/xobotyi/react-scrollbars-custom/issues/123
        doc.body.removeChild(el);
        return;
    }
    getScrollbarWidth._cache = 100 - el.clientWidth;
    doc.body.removeChild(el);

    return getScrollbarWidth._cache;
};

interface ShouldReverseRtlScroll {
    (force?: boolean): boolean;

    _cache?: boolean;
}

/**
 * @description Detect need of horizontal scroll reverse while RTL.
 */
export const shouldReverseRtlScroll: ShouldReverseRtlScroll = (force: boolean = false): boolean => {
    if (!force && !isUndef(shouldReverseRtlScroll._cache)) {
        return shouldReverseRtlScroll._cache as boolean;
    }

    if (!doc) {
        return (shouldReverseRtlScroll._cache = false);
    }

    const el = doc.createElement("div");
    const child = doc.createElement("div");

    el.appendChild(child);

    el.setAttribute(
        "style",
        "position:absolute;width:100px;height:100px;top:-999px;left:-999px;overflow:scroll;direction:rtl"
    );
    child.setAttribute("style", "width:1000px;height:1000px");

    doc.body.appendChild(el);

    el.scrollLeft = -50;
    shouldReverseRtlScroll._cache = el.scrollLeft === -50;

    doc.body.removeChild(el);

    return shouldReverseRtlScroll._cache;
};
