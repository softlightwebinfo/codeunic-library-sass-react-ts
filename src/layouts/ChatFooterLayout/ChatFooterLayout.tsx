import * as React from "react";
import {IChatFooterLayoutProps} from "./ChatFooterLayout.types";
import "./ChatFooterLayout.scss";
import {BEM, ButtonComponent, ButtonIconComponent, IconComponent} from "../..";

export function ChatFooterLayout(props: IChatFooterLayoutProps) {
    const bem = new BEM("ChatFooter-layout", {});
    bem.Append(props.className);
    return (
        <footer className={bem.toString()} style={props.style}>
            <div className={bem.Children("inner")}>
                <ButtonIconComponent onClick={props.onClickAttach}>
                    <IconComponent icon={"attachment"}/>
                </ButtonIconComponent>
                <div className={bem.Children("group")}>
                    <div className={bem.Children("input-group")}>
                        <textarea  placeholder={props.placeholder} name="message" cols={30} rows={2} onChange={props.onChange}/>
                        <ButtonComponent onClick={props.onClickSend}>
                            <IconComponent icon={"send"}/>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </footer>
    );
}
