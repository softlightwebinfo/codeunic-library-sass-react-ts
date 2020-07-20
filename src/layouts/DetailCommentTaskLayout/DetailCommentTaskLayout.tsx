import * as React from "react";
import {IDetailCommentTaskLayoutProps} from "./DetailCommentTaskLayout.types";
import "./DetailCommentTaskLayout.scss";
import {AvatarComponent, BEM, ButtonIconComponent, GroupIconComponent, IconComponent, ScrollbarComponent, SeparatorComponent, TaskCommentsLayout, TaskHeaderLayout, TaskInfoLineComponent, TextFieldComponent, TypographyComponent} from "../..";
import useTaskAppContext from "../../context/useTaskAppContext";
import {ITaskAppTasks} from "../../apps/TaskApp/TaskApp.types";
import moment from "moment";
import {useEffect, useState} from "react";

export function DetailCommentTaskLayout(props: IDetailCommentTaskLayoutProps) {
    const bem = new BEM("DetailCommentTask-layout", {});
    bem.Append(props.className);
    const use = useTaskAppContext();
    let selected: ITaskAppTasks;
    selected = use.getSelected();
    const [description, setDescription] = useState(selected.description);
    const onChange = (e) => {
        setDescription(e.target.value);
    };
    useEffect(() => {
        setDescription(selected.description);
    }, [selected.description]);
    console.log(selected);
    return (
        <ScrollbarComponent style={props.style} className={bem.toString()}>
            <div className={bem.Children("chats")}>
                <TypographyComponent component={"h4"}>{selected.title}</TypographyComponent>
                <TaskHeaderLayout
                    onClick={item => {

                    }}
                    onDelete={item => {

                    }}
                    tasks={[
                        {title: "Assigned To", subTitle: "John Doe", icon: <AvatarComponent mini src={""}>AV</AvatarComponent>},
                        {title: "Due Date", subTitle: moment(selected.date).format("ddd DD, YYYY"), icon: <ButtonIconComponent action><IconComponent icon={"calendar"}/></ButtonIconComponent>},
                    ]}
                />
                <SeparatorComponent data={"Description"}/>
                <GroupIconComponent
                    icon={<IconComponent icon={"subject"}/>}
                    content={<TextFieldComponent onChange={onChange} value={description} placeholder={"Description"} id={"description"} onBlur={(e) => {
                        use.onChangeDescription(use.taskSelected, e.target.value);
                    }} multiline/>}
                />
                <SeparatorComponent data={"Records"}/>
                {selected.info.map((item, index) => (
                    <TaskInfoLineComponent
                        {...item}
                        key={index}
                        subject={item.subject}
                        user={item.user}
                        date={item.date}
                    />
                ))}
                <SeparatorComponent data={"Comments"}/>
                <TaskCommentsLayout
                    data={selected.comments}
                />
            </div>
        </ScrollbarComponent>
    );
}
