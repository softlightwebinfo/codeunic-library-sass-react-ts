import React from "react";
import {ItemDotLayout} from './ItemDotLayout';
import {BoxxComponent} from "../..";

// @ts-ignore
export default {
    title: "Layouts|ItemDot"
};

export const Default = () => (
    <BoxxComponent style={{backgroundColor: "white"}}>
        <ItemDotLayout
            data={[
                {title: "Completed Tasks", subTitle: "166", color: "success"},
                {title: "Completed Tasks", subTitle: "115", color: "gray"},
                {title: "Completed Tasks", subTitle: "31", color: "info"},
                {title: "Completed Tasks", subTitle: "47", color: "warning"},
                {title: "Completed Tasks", subTitle: "5", color: "danger"},
            ]}
        />
    </BoxxComponent>
);
