import React from "react";
import {IIconAsset} from "../../../Interfaces/IIconAsset";

export default (props: IIconAsset) => (
    <svg style={props.style} className={props.className} width={props.width} height={props.height} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </svg>
);
