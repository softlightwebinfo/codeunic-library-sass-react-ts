export const getInnerSize = (el: HTMLElement, dimension: string, padding1: string, padding2: string): number => {
    const styles = getComputedStyle(el);

    if (styles.boxSizing === "border-box") {
        return Math.max(
            0,
            (parseFloat(styles[dimension] as string) || 0) -
            (parseFloat(styles[padding1] as string) || 0) -
            (parseFloat(styles[padding2] as string) || 0)
        );
    }

    return parseFloat(styles[dimension] as string) || 0;
};
/**
 * @description Return element's height without padding
 */
export const getInnerHeight = (el: HTMLElement): number => {
    return getInnerSize(el, "height", "paddingTop", "paddingBottom");
};

/**
 * @description Return element's width without padding
 */
export const getInnerWidth = (el: HTMLElement): number => {
    return getInnerSize(el, "width", "paddingLeft", "paddingRight");
};
