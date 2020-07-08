import * as React from "react";
import {IEditorComponentProps} from "./EditorComponent.types";
import "./EditorComponent.scss";
import "./EditorNewComponent.scss";
import {BEM} from "../../libs";
import {Editor, EditorContext} from "../../models";
import {ButtonComponent, DialogActionsComponent, DialogComponent, DialogContentComponent, DialogTitleComponent, MenuComponent, TextFieldComponent} from "../..";
import {EditorDataEnum} from "../../models";
import {DialogContentTextComponent} from "../..";

export class EditorComponent extends React.Component<IEditorComponentProps> {
    constructor(props) {
        super(props);
    }

    public state = {
        text: "",
        isEditor: this.props.isEditor,
        editor: new Editor(this.props.data, {
            isEditor: this.props.isEditor,
            onInput: (e, type) => {
                if (type == EditorDataEnum.HEADER || type == EditorDataEnum.PARAGRAPH) {
                    this.state.editor.setText(e.currentTarget.innerHTML);
                } else if (type == EditorDataEnum.LIST) {
                    this.state.editor.setList(e);
                } else if (type == EditorDataEnum.IMAGE) {
                    this.setState({
                        openModalImage: true,
                    });
                }
                this.setState({
                    editor: this.state.editor,
                })
            }
        }),
        onInput: (ee, type: EditorDataEnum) => {
            switch (type) {
                case EditorDataEnum.LINK: {
                    this.state.editor.setText(ee.currentTarget.innerHTML);
                    break;
                }
            }
            this.setState({
                editor: this.state.editor,
            })
        },
        openMenu: false,
        openMenuPlus: false,
        openModalImage: false,
        onClick: (e, obj) => {
            if (!this.props.isEditor) {
                return;
            }
            this.state.editor.setFocus(e);
            this.state.editor.setFocusTop(obj.top);
            this.setState({
                editor: this.state.editor,
                openMenu: false,
            })
        }
    };

    private onClickAction = (e: EditorDataEnum) => {
        this.state.editor.addNewElement(Number(e));
        this.setState({
            editor: this.state.editor,
        })
    };

    componentDidMount(): void {
        this.state.editor.componentDidMount(() => {
            this.state.editor.setFocus(null);
            this.state.editor.setFocusTop(0);
            this.setState({
                editor: this.state.editor,
                openMenu: false,
            });
        });
    }

    componentWillUnmount(): void {
        this.state.editor.componentWillUnmount();
    }

    plus(direction: "right" | "left") {
        return (
            <div className={"Editor-component__add"}>
                <div className="ce-toolbar__plus">
                    <MenuComponent
                        style={{
                            maxWidth: "auto"
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: "white",
                                [direction]: 0,
                                minWidth: 114,
                                maxWidth: 'initial'
                            }
                        }}
                        keepMounted
                        id={"menu"}
                        open={this.state.openMenuPlus}
                        trigger={this.state.editor.actionPlus(() => {
                            this.setState({
                                openMenuPlus: true,
                            });
                        })}
                        onClose={() => {
                            this.setState({
                                openMenuPlus: false,
                            });
                        }}
                    >
                        {this.state.editor.actionsPlus(e => {
                            if (direction == "left") {
                                this.state.editor.setFocus(null);
                            }
                            this.onClickAction(e);
                        })}
                    </MenuComponent>
                </div>
            </div>
        )
    }

    handleClose = () => this.setState({openModalImage: false});

    render() {
        const bm = new BEM("Editor-component", {});
        return (
            <EditorContext.Provider value={this.state}>
                <div
                    className={bm.toString()}
                >
                    <div className="Editor-component__redactor">
                        {this.state.editor.render()}
                        {this.props.isEditor && (
                            <>
                                {this.plus("left")}
                                <div className={"Editor-component__actions"}>
                                    <ButtonComponent onClick={() => this.props.onSave(this.state.editor)}>Save</ButtonComponent>
                                </div>
                            </>
                        )}
                    </div>
                    {this.props.isEditor && (
                        <div
                            className={`Editor-component__icon ${this.state.editor.getFocus() != null && "Editor-component__icon--open"}`}
                            style={{
                                top: this.state.editor.getFocusTop(),
                            }}
                        >
                        <span>
                            {this.plus("right")}
                            <MenuComponent
                                PaperProps={{
                                    style: {
                                        backgroundColor: "white",
                                        right: 0,
                                        minWidth: 114,
                                    }
                                }}
                                keepMounted
                                id={"menu"}
                                open={this.state.openMenu}
                                trigger={this.state.editor.button(() => {
                                    this.setState({
                                        openMenu: true,
                                    })
                                })}
                                onClose={() => {
                                    this.setState({
                                        openMenu: false,
                                    });
                                }}
                            >
                                {this.state.editor.actions({
                                    down: () => {
                                        this.state.editor.down();
                                        this.setState({
                                            editor: this.state.editor,
                                            openMenu: false,
                                        })
                                    },
                                    close: () => {
                                        this.state.editor.close();
                                        this.setState({
                                            editor: this.state.editor,
                                            openMenu: false,
                                        })
                                    },
                                    up: () => {
                                        this.state.editor.up();
                                        this.setState({
                                            editor: this.state.editor,
                                            openMenu: false,
                                        })
                                    }
                                })}
                            </MenuComponent>
                        </span>
                        </div>
                    )}
                    {this.props.isEditor && (
                        <DialogComponent open={this.state.openModalImage} onClose={this.handleClose} portal={true}>
                            <DialogTitleComponent>Image settings</DialogTitleComponent>
                            <DialogContentComponent>
                                <DialogContentTextComponent>
                                    To subscribe to this website, please enter your email address here. We will send updates
                                    occasionally.
                                </DialogContentTextComponent>
                                <TextFieldComponent placeholder={"Url image"} id={"eedit"} value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
                            </DialogContentComponent>
                            <DialogActionsComponent>
                                <ButtonComponent
                                    variant={"color"}
                                    onClick={this.handleClose}
                                    theme="primary">
                                    Cancel
                                </ButtonComponent>
                                <ButtonComponent
                                    variant={"color"}
                                    onClick={() => {
                                        this.state.editor.setImage(this.state.text);
                                        this.setState({text: "", editor: this.state.editor});
                                        this.handleClose();
                                    }}
                                    theme="primary"
                                >
                                    Save
                                </ButtonComponent>
                            </DialogActionsComponent>
                        </DialogComponent>
                    )};
                </div>
            </EditorContext.Provider>
        );
    }
}
