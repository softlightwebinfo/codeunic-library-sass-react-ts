import * as React from "react";
import {IChatBubbleComponentProps} from "./ChatBubbleComponent.types";
import "./ChatBubbleComponent.scss";
import {BEM} from "../../libs";
import {AvatarComponent, IconComponent, ListComponent, TypographyComponent} from "../..";

export function ChatBubbleComponent(props: IChatBubbleComponentProps) {
    const bm = new BEM("ChatBubble-component", {});
    bm.Append(props.className);
    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <AvatarComponent className={bm.Children("avatar")} src={props.avatar}>{props.name}</AvatarComponent>
            <div className={bm.Children("body")}>
                <div className={bm.Children("bubble")}>
                    <div className={bm.Children("content")}>
                        <span className={bm.Children("name")}>{props.name}</span>
                        {props.files.length > 0 && (
                            <span className={bm.Children("attach")}>
                                attached {props.files.length} files
                                <IconComponent icon={"attachment"}/>
                            </span>
                        )}
                        <span className={bm.Children("time")}>{props.date}</span>
                        {props.description && (<TypographyComponent className={bm.Children("description")} component={"p"}>{props.description}</TypographyComponent>)}
                        <ListComponent component={"ul"} className={bm.Children("list")}>
                            {props.files.map((item, index) => (
                                <li className={bm.Children("item")} key={index}>
                                    <IconComponent icon={"file"}/>
                                    <a>{item.name}</a>
                                </li>
                            ))}
                        </ListComponent>
                        <ListComponent component={"ul"} className={bm.Children("images")}>
                            {props.images.map((item, index) => (
                                <li key={index}>
                                    <img src={item} alt={props.name}/>
                                </li>
                            ))}
                        </ListComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}
