import * as React from "react";
import {IChatHeaderLayoutProps} from "./ChatHeaderLayout.types";
import "./ChatHeaderLayout.scss";
import {BEM, ButtonIconComponent, IconComponent, InputSearchComponent, ListComponent, MessageAvatarComponent} from "../..";

export function ChatHeaderLayout(props: IChatHeaderLayoutProps) {
    const bem = new BEM("ChatHeader-layout", {});
    bem.Append(props.className);
    return (
        <header className={bem.toString()} style={props.style}>
            <MessageAvatarComponent
                className={bem.Children("avatar")}
                src={props.src}
                name={props.name}
                title={props.title}
                subTitle={props.subTitle}
            />
            <InputSearchComponent className={bem.Children("search")} onChange={props.onSearch} value={props.searchValue} placeholder={props.searchPlaceholder}/>
            <ListComponent horizontal className={bem.Children("list")}>
                <ButtonIconComponent onClick={props.onClickPhone}>
                    <IconComponent icon={"phone"}/>
                </ButtonIconComponent>
                <ButtonIconComponent onClick={props.onClickCamera}>
                    <IconComponent icon={"camera"}/>
                </ButtonIconComponent>
                <ButtonIconComponent onClick={props.onClickSetting}>
                    <IconComponent icon={"setting"}/>
                </ButtonIconComponent>
            </ListComponent>
        </header>
    );
}
