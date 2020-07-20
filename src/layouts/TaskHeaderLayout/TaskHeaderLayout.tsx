import * as React from "react";
import {ITaskHeaderLayoutProps} from "./TaskHeaderLayout.types";
import "./TaskHeaderLayout.scss";
import {BEM} from "../../libs";
import {TaskHeaderComponent} from "../..";

export function TaskHeaderLayout(props: ITaskHeaderLayoutProps) {
    const bem = new BEM("TaskHeader-layout", {});
    bem.Append(props.className);
    return (
        <div style={props.style} className={bem.toString()}>
            {props.tasks.map((item, index) => (
                <TaskHeaderComponent
                    {...item}
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    subTitle={item.subTitle}
                    onClick={() => props.onClick(item)}
                    onDelete={() => props.onDelete(item)}
                />
            ))}
        </div>
    );
}
