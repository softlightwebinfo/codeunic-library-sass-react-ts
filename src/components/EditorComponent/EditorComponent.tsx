import * as React from "react";
import {IEditorComponentProps} from "./EditorComponent.types";
import "./EditorComponent.scss";
import "./EditorNewComponent.scss";
import {BEM} from "../../libs";
import {Editor, EditorContext} from "../../models/Editor";
import {MenuComponent, MenuItemComponent, MenuListComponent} from "../..";

export class EditorComponent extends React.Component<IEditorComponentProps> {
    constructor(props) {
        super(props);
    }

    public state = {
        editor: new Editor(this.props.data),
        openMenu: false,
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

    render() {
        const bm = new BEM("Editor-component", {});
        return (
            <EditorContext.Provider value={this.state}>
                <div
                    className={bm.toString()}
                >
                    <div className="Editor-component__redactor">
                        {this.state.editor.render()}
                    </div>
                    <div
                        className={`Editor-component__icon ${this.state.editor.getFocus() != null && "Editor-component__icon--open"}`}
                        style={{
                            top: this.state.editor.getFocusTop(),
                        }}
                    >
                        <span>
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
                </div>
            </EditorContext.Provider>
        );
    }
}
