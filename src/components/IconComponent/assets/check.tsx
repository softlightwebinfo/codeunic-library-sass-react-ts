import React from "react";
import {IIconAsset} from "../../../Interfaces/IIconAsset";

export default (props: IIconAsset) => (
    <svg xlinkTitle={props.title} style={props.style} className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24">
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
);
