import {IObjectMix} from "../Interfaces/IObject";

export enum ITBem {
    DEFAULT = '-',
    MODIFIER = '--',
    BLOCK = "",
    CHILD = "_"
}

export class BEM {
    private _parent: string;
    private _classNames: IObjectMix;

    constructor(parent: string, classNames: IObjectMix) {
        this._parent = parent;
        this._classNames = classNames;
    }

    toString(): string {
        return Object.entries(this._classNames).reduce((previousValue, currentValue) => {
            if (currentValue[1]) {
                if (typeof currentValue[1] == "string") {
                    previousValue.push(this._parent + ITBem.MODIFIER + currentValue[0] + ITBem.DEFAULT + currentValue[1]);
                } else if (typeof currentValue[1] == "boolean") {
                    previousValue.push(this._parent + ITBem.MODIFIER + currentValue[0]);
                }
            }
            return previousValue;
        }, [this._parent]).join(" ");
    }
}
