import * as React from "react";
import {IProjectWidgetProps} from "./ProjectWidget.types";
import "./ProjectWidget.scss";
import {BEM} from "../../libs";
import {GroupSmallComponent} from "../../components/GroupSmallComponent/GroupSmallComponent";
import {ButtonIconComponent, DropdownComponent, GroupTitleComponent, IconComponent, ProgressComponent, ProgressLabelComponent, TypographyComponent} from "../..";

export function ProjectWidget(props: IProjectWidgetProps) {
    const bem = new BEM("Project-widget", {});
    bem.Append(props.className);
    return (
        <div className={bem.toString()}>
            <GroupSmallComponent
                name={props.title}
                data={props.subTitleData}
            />
            <DropdownComponent
                className={bem.Children("settings")}
                onChange={props.onChange}
                trigger={<ButtonIconComponent hover className={bem.Children("trigger")}><IconComponent icon={"more_vert"}/></ButtonIconComponent>}
                data={[
                    {label: "Edit", icon: <IconComponent style={{width: 15, height: 15}} icon={"pencil"}/>, value: "1"},
                    {label: "Delete", icon: <IconComponent style={{width: 15, height: 15}} icon={"trash"}/>, value: "2"},
                ]}
            />
            <TypographyComponent className={bem.Children("description")} variant={"body2"} component={"p"} color={"gray"}>{props.description}</TypographyComponent>
            {props.group.map((item, index) => (
                <GroupTitleComponent className={bem.Children("group")} key={index} title={item.title} content={item.content}/>
            ))}
            <ProgressLabelComponent className={bem.Children("progress")}>
                <ProgressComponent color={"success"} label={props.progressLabel} value={props.progress}/>
            </ProgressLabelComponent>
        </div>
    );
}
