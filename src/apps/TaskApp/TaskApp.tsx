import * as React from "react";
import {ITaskAppProps, ITaskAppState} from "./TaskApp.types";
import "./TaskApp.scss"
import {BEM} from "../../libs";
import TaskAppContext from "../../context/TaskAppContext";
import {ButtonComponent, ButtonIconComponent, ChatFooterLayout, DetailCommentTaskLayout, DropdownComponent, FollowerComponent, IconComponent, MainMasterLayout, NavbarToolbarComponent, ScrollbarComponent, TaskListLayout} from "../..";
import {IDropdownDataComponent} from "../../components/DropdownComponent/DropdownComponent.types";


export class TaskApp extends React.Component<ITaskAppProps, ITaskAppState> {
    public state: ITaskAppState = {
        filter: 3,
        tasks: this.props.tasks || [],
        openAddTask: false,
        taskSelected: 0,
        toggleAddTask: () => {
            this.setState(e => ({openAddTask: !e.openAddTask}));
        },
        onChangeFilter: (e: IDropdownDataComponent) => {
            this.setState({filter: e.value});
        },
        toggleCheckTask: (id: number) => {
            this.setState(e => {
                let tasks = e.tasks;
                let task = tasks.find(i => i.id == id);
                task.check = !task.check;
                return {
                    tasks
                };
            })
        },
        assignUser: (id: number) => {
            this.props.onAssignUser(id, () => {

            });
        },
        deleteTrack: (id: number) => {
            this.props.onDeleteTrack(id, () => {
                this.setState(e => {
                    let tracks = e.tasks;
                    tracks = tracks.filter(i => i.id != id);
                    return {
                        ...e,
                        tasks: tracks,
                        taskSelected: this.state.taskSelected == id ? null : e.taskSelected,
                    }
                })
            });
        },
        onChangeTitle: (id: number, textContent: string) => {
            this.props.onChangeTitle(id, () => {
                this.setState(e => {
                    let tasks = e.tasks;
                    let task = tasks.find(i => i.id == id);
                    task.title = textContent;

                    return {
                        tasks,
                    }
                })
            })
        },
        selectedTask: (id: number) => {
            this.setState({
                taskSelected: id,
            });
        },
        openFollower: () => {

        },
        toggleMaskComplete: (): void => {
            this.setState(e => {
                let tasks = e.tasks;
                let task = tasks.find(i => i.id == e.taskSelected);
                task.check = !task.check;
                return {
                    tasks
                };
            })
        },
        onChangeSetting: (e: IDropdownDataComponent): void => {
            switch (e.value) {
                case 1: {
                    this.state.deleteTrack(this.state.taskSelected);
                    break;
                }
                case 2: {
                    break;
                }
            }
        },
        getSelected: () => {
            if (this.state.taskSelected != null) {
                return this.state.tasks.find(i => i.id == this.state.taskSelected);
            }
            return null;
        },
        onChangeDescription: (taskSelected: number, value: string): void => {
            this.props.onChangeDescription(taskSelected, value, () => {
                this.setState(e => {
                    let tasks = e.tasks;
                    let task = tasks.find(i => i.id == taskSelected);
                    task.description = value;
                    return {
                        tasks: this.state.tasks,
                    }
                })
            })
        }
    };


    public avatars = () => {
        if (this.state.taskSelected != null) {
            return this.state.getSelected().followers || [];
        }
        return [];
    };

    render() {
        const {
            dropdownFilter = [
                {label: "Pending Tasks", value: 1, icon: <i/>},
                {label: "Completed Tasks", value: 2, icon: <i/>},
                {label: "All Tasks", value: 3, icon: <i/>},
            ],
            dropdownTask = [
                {label: "Delete Task", value: 1, icon: <i/>},
                {label: "Settings", value: 2, icon: <i/>},
            ],
            labels = {
                followers: "Followers",
                placeholder: "Type Message",
            }
        } = this.props;
        const bm = new BEM('Task-app', {});
        return (
            <TaskAppContext.Provider value={this.state}>
                <MainMasterLayout
                    className={bm.toString()}
                    left={{
                        header: (
                            <NavbarToolbarComponent
                                left={(
                                    <ButtonComponent onClick={this.state.toggleAddTask} grouped>{this.props.button && this.props.button.addTask || "Add Task"}</ButtonComponent>
                                )}
                                right={(
                                    <DropdownComponent
                                        onChange={this.state.onChangeFilter}
                                        trigger={(
                                            <ButtonIconComponent hover>
                                                <IconComponent icon={"setting"}/>
                                            </ButtonIconComponent>
                                        )}
                                        data={dropdownFilter}
                                    />
                                )}
                            />
                        ),
                        content: (
                            <ScrollbarComponent>
                                <TaskListLayout/>
                            </ScrollbarComponent>
                        ),
                        footer: null,
                    }}
                    right={this.state.taskSelected != null ? (
                        {
                            header: (
                                <NavbarToolbarComponent
                                    left={(
                                        <ButtonComponent theme={this.state.getSelected().check ? "success" : null} onClick={this.state.toggleMaskComplete} grouped>
                                            <IconComponent style={{width: 15, height: 15}} icon={"tick"}/>
                                            {this.props.button && this.props.button.maskComplete || "Mask Complete"}
                                        </ButtonComponent>
                                    )}
                                    right={(
                                        <DropdownComponent
                                            onChange={this.state.onChangeSetting}
                                            trigger={(
                                                <ButtonIconComponent style={{color: "gray", height: 44, width: 44}} hover>
                                                    <IconComponent icon={"more_vert"}/>
                                                </ButtonIconComponent>
                                            )}
                                            data={dropdownTask}
                                        />
                                    )}
                                />
                            ),
                            content: (
                                <DetailCommentTaskLayout/>
                            ),
                            footer: (
                                <>
                                    <ChatFooterLayout
                                        placeholder={labels.placeholder}
                                    />
                                    <FollowerComponent
                                        className={bm.Children("follower")}
                                        onClick={this.state.openFollower}
                                        label={labels.followers}
                                        avatars={this.avatars()}
                                    />
                                </>
                            ),
                        }
                    ) : {header: null, content: null, footer: null}}
                />
            </TaskAppContext.Provider>
        );
    }
}
