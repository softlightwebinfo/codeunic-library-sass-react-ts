import React from "react";
import {IIconAsset} from "../../../Interfaces/IIconAsset";

export default (props: IIconAsset) => (
    <svg style={props.style} className={props.className} height={props.height} viewBox="0 0 48 48" width={props.width} xmlns="http://www.w3.org/2000/svg">
        <path d="M28 34h-20v4h20v-4zm12-16h-32v4h32v-4zm-32 12h32v-4h-32v4zm0-20v4h32v-4h-32z"/>
        <path d="M0 0h48v48h-48z" fill="none"/>
    </svg>
);
