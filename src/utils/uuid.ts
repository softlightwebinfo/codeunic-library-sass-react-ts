/**
 * @description Return unique UUID v4
 */
export const uuid = () => {
    let uuid = "";

    for (let i = 0; i < 32; i++) {
        if (i === 8 || i === 20) {
            uuid += "-" + ((Math.random() * 16) | 0).toString(16);
        } else if (i === 12) {
            uuid += "-4";
        } else if (i === 16) {
            uuid += "-" + ((Math.random() * 16) | (0 & 3) | 8).toString(16);
        } else {
            uuid += ((Math.random() * 16) | 0).toString(16);
        }
    }

    return uuid;
};
