export let doc: Document | null = typeof document === "object" ? document : null;

export const isUndef = (v: any): v is Exclude<typeof v, undefined> => {
    return typeof v === "undefined";
};

export const isFun = (v: any): v is Function => {
    return typeof v === "function";
};

export const isNum = (v: any): v is number => {
    return typeof v === "number";
};
export const _dbgSetDocument = (v: Document | null): Document | null => {
    if (v === null || v instanceof HTMLDocument) {
        return (doc = v);
    }

    throw new TypeError("override value expected to be an instance of HTMLDocument or null, got " + typeof v);
};

/**
 * @description Return current document node
 */
export const _dbgGetDocument = (): Document | null => doc;

export interface GetScrollbarWidthFN {
    (force?: boolean): number | undefined;

    _cache?: number;
}
