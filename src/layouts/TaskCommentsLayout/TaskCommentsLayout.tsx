import * as React from "react";
import {ITaskCommentsLayoutProps} from "./TaskCommentsLayout.types";
import "./TaskCommentsLayout.scss";
import {BEM} from "../../libs";
import {ChatBubbleComponent} from "../..";

export function TaskCommentsLayout(props: ITaskCommentsLayoutProps) {
    const bem = new BEM("TaskComments-layout", {});
    bem.Append(props.className);
    return (
        <div style={props.style} className={bem.toString()}>
            {props.data.map((item) => (
                <ChatBubbleComponent
                    {...item}
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    description={item.description}
                    name={item.name}
                    avatar={item.avatar}
                    files={item.files}
                    images={item.images}
                />
            ))}
        </div>
    );
}
