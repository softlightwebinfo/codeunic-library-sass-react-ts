import * as React from "react";
import {ITaskListLayoutProps} from "./TaskListLayout.types";
import "./TaskListLayout.scss";
import {BEM} from "../../libs";
import {ListComponent, TaskContainerComponent} from "../..";
import useTaskAppContext from "../../context/useTaskAppContext";

export function TaskListLayout(props: ITaskListLayoutProps) {
    const bem = new BEM("TaskList-layout", {});
    bem.Append(props.className);
    const use = useTaskAppContext();
    let tasks = props.tasks;
    let selected = null;
    if (use != undefined) {
        tasks = use.tasks;
        selected = use.taskSelected;
    }
    return (
        <div style={props.style} className={bem.toString()}>
            <ListComponent className={bem.Children("list")} component={"ul"}>
                {tasks.map((item, index) => {
                    if (use.filter != 3) {
                        if (use.filter == 1 && item.check) return null;
                        if (use.filter == 2 && !item.check) return null;
                    }
                    let selectedItem = selected == item.id;
                    return (
                        <TaskContainerComponent
                            {...item}
                            selected={selectedItem}
                            component={"li"}
                            key={index}
                            id={item.id}
                            check={item.check}
                        />
                    )
                })}
            </ListComponent>
        </div>
    );
}
