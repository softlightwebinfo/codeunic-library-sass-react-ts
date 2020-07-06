export class EditorData {
    type: EditorDataEnum;
    data: EditorDataType;

    constructor(type: EditorDataEnum, data: EditorDataType) {
        this.type = type;
        this.data = data;
    }

}

export type EditorDataType = EditorDataImage | EditorDataData | EditorDataList | EditorDataTable | {};

export class EditorDataImage {
    file: { url: string; };
    caption: string;
    stretched: boolean;
    withBackground: boolean;
    withBorder: boolean;

    constructor(url: string, caption: string = "") {
        this.file = {url: url};
        this.caption = caption;
        this.stretched = true;
        this.withBackground = false;
        this.withBorder = false;
    }
}

export class EditorDataData {
    text: string;
    level?: number;
}

export type EditorDataList_Enum = "unordered" | "ordered";

export class EditorDataList {
    style: EditorDataList_Enum;
    items: string[];
}

export class EditorDataTable {

}

export enum EditorDataEnum {
    PARAGRAPH,
    HEADER,
    //TABLE,
    LIST,
    DELIMITER,
    IMAGE,
}
