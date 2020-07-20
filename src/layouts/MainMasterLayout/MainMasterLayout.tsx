import * as React from "react";
import {IMainMasterLayoutProps} from "./MainMasterLayout.types";
import "./MainMasterLayout.scss";
import {BEM, GridComponent, GroupWindowLayout} from "../..";
import useResizeHeight from "../../hooks/useResizeHeight";

export function MainMasterLayout(props: IMainMasterLayoutProps) {
    const bem = new BEM("MainMaster-layout", {});
    bem.Append(props.className);
    const {ref, height} = useResizeHeight();
    return (
        <div ref={ref} style={{
            ...props.style,
            minHeight: height
        }} className={bem.toString()}>
            <div className={bem.Children("main")}>
                <GridComponent container className={bem.Children("wrapper")}>
                    <GridComponent item xs={12} lg={7} className={bem.Children("left")}>
                        <GroupWindowLayout {...props.left} header={props.left.header} content={<div className={bem.Children("left-content")}>{props.left.content}</div>} footer={props.left.footer}/>
                    </GridComponent>
                    <GridComponent item xs={12} lg={5} className={bem.Children("right")}>
                        <GroupWindowLayout {...props.left} header={props.right.header} content={props.right.content} footer={props.right.footer}/>
                    </GridComponent>
                </GridComponent>
            </div>
        </div>
    );
}
