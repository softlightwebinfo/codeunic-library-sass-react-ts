import * as React from "react";
import {IMenuComponentProps} from "./MenuComponent.types";
import "./MenuComponent.scss";
import {BEM} from "../../libs";
import {MenuListComponent} from "../..";

export class MenuComponent extends React.Component<IMenuComponentProps> {
    private wrapperRef;

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    componentDidMount(): void {
        document.addEventListener("mousedown", this.onClickOutside)
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.onClickOutside);
    }

    onClickOutside = (e) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
            this.props.onClose();
        }
    };

    render() {
        const bm = new BEM("Menu-component", {
            open: this.props.open,
            close: !this.props.open,
            static: this.props.static,
            absolute: !this.props.static,
        });
        if (!this.props.keepMounted) {
            if (!this.props.open) return null;
        }

        return (
            <div className={"Menu-parent-component"} ref={this.wrapperRef} style={this.props.style}>
                {this.props.trigger}
                <div
                    style={this.props.PaperProps && this.props.PaperProps.style}
                    className={bm.toString()}
                >
                    <MenuListComponent padding>
                        {this.props.children}
                    </MenuListComponent>
                </div>
            </div>
        );
    }
}
