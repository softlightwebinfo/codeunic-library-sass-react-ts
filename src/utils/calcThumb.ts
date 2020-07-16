/**
 * @description Calculate thumb size for given viewport and track parameters
 *
 * @param {number} contentSize - Scrollable content size
 * @param {number} viewportSize - Viewport size
 * @param {number} trackSize - Track size thumb can move
 * @param {number} minimalSize - Minimal thumb's size
 * @param {number} maximalSize - Maximal thumb's size
 */
import {isNum} from "./is";

export const calcThumbSize = (
    contentSize: number,
    viewportSize: number,
    trackSize: number,
    minimalSize?: number,
    maximalSize?: number
): number => {
    if (viewportSize >= contentSize) {
        return 0;
    }

    let thumbSize = (viewportSize / contentSize) * trackSize;

    isNum(maximalSize) && (thumbSize = Math.min(maximalSize!, thumbSize));
    isNum(minimalSize) && (thumbSize = Math.max(minimalSize!, thumbSize));

    return thumbSize;
};

/**
 * @description Calculate thumb offset for given viewport, track and thumb parameters
 *
 * @param {number} contentSize - Scrollable content size
 * @param {number} viewportSize - Viewport size
 * @param {number} trackSize - Track size thumb can move
 * @param {number} thumbSize - Thumb size
 * @param {number} scroll - Scroll value to represent
 */
export const calcThumbOffset = (
    contentSize: number,
    viewportSize: number,
    trackSize: number,
    thumbSize: number,
    scroll: number
): number => {
    if (!scroll || !thumbSize || viewportSize >= contentSize) {
        return 0;
    }

    return ((trackSize - thumbSize) * scroll) / (contentSize - viewportSize);
};
/**
 * @description Calculate scroll for given viewport, track and thumb parameters
 *
 * @param {number} contentSize - Scrollable content size
 * @param {number} viewportSize - Viewport size
 * @param {number} trackSize - Track size thumb can move
 * @param {number} thumbSize - Thumb size
 * @param {number} thumbOffset - Thumb's offset representing the scroll
 */
export const calcScrollForThumbOffset = (
    contentSize: number,
    viewportSize: number,
    trackSize: number,
    thumbSize: number,
    thumbOffset: number
): number => {
    if (!thumbOffset || !thumbSize || viewportSize >= contentSize) {
        return 0;
    }

    return (thumbOffset * (contentSize - viewportSize)) / (trackSize - thumbSize);
};
