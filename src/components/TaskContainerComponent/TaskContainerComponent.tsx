import * as React from "react";
import {ITaskContainerComponentProps} from "./TaskContainerComponent.types";
import "./TaskContainerComponent.scss";
import {BEM} from "../../libs";
import {ButtonIconComponent, CheckComponent, IconComponent, TypographyComponent} from "../..";
import useTaskAppContext from "../../context/useTaskAppContext";

export function TaskContainerComponent(props: ITaskContainerComponentProps) {
    let check = props.check;
    const bm = new BEM("TaskContainer-component", {
        check: check,
        selected: props.selected,
    });
    const use = useTaskAppContext();

    const onClick = () => {
        if (use != undefined) {
            use.toggleCheckTask(props.id);
        }
        props.onClick && props.onClick(props);
    };
    bm.Append(props.className);
    const Component = props.component || "div";

    const onClickAction = (action: number) => {
        switch (action) {
            case 1: {
                if (use) {
                    use.assignUser(props.id);
                }
                props.onAssignUser && props.onAssignUser(props.id);
                return;
            }
            case 2: {
                if (use) {
                    use.deleteTrack(props.id);
                }
                props.onDeleteTrack && props.onDeleteTrack(props.id);
                return;
            }
            case 3: {
                if (use) {
                    use.selectedTask(props.id);
                }
                props.onSelectedTask && props.onSelectedTask(props.id);
                return;
            }
        }
    };

    const onBlurTitle = (textContent: string) => {
        if (use) {
            use.onChangeTitle(props.id, textContent);
        }
        props.onChangeTitle && props.onChangeTitle(props.id, textContent);
    };

    return (
        // @ts-ignore
        <Component
            style={props.style}
            className={bm.toString()}
        >
            <CheckComponent check={check} onClick={onClick} className={bm.Children("check")}/>
            <TypographyComponent variant={"body2"} component={"span"} className={bm.Children("title")}>
                <span contentEditable suppressContentEditableWarning onBlur={(e) => onBlurTitle(e.target.textContent)}>{props.title}</span>
            </TypographyComponent>
            <div className={bm.Children("actions")}>
                <ButtonIconComponent onClick={() => onClickAction(3)} action style={{color: "black"}}>
                    <IconComponent icon={"eye"}/>
                </ButtonIconComponent>
                <ButtonIconComponent onClick={() => onClickAction(1)} action style={{color: "black"}}>
                    <IconComponent icon={"user"}/>
                </ButtonIconComponent>
                <ButtonIconComponent onClick={() => onClickAction(2)} action style={{color: "black"}}>
                    <IconComponent icon={"trash"}/>
                </ButtonIconComponent>
            </div>
        </Component>
    );
}
