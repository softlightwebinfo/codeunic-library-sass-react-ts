import * as React from "react";
import {IGridListComponentProps} from "./GridListComponent.types";
import "./GridListComponent.scss";
import {BEM} from "../../libs";

export function GridListComponent(props: IGridListComponentProps) {
    const cellHeight = props.cellHeight || 180;
    const cols = props.cols || 2;
    const Component = props.component || "ul";
    const spacing = props.spacing || 4;
    const bm = new BEM("GridList-component", {});

    return (
        // @ts-ignore
        <Component
            style={{margin: -spacing / 2, ...props.style}}
            className={bm.toString()}
        >
            {React.Children.map(props.children, (child) => {
                if (!React.isValidElement(child)) {
                    return null;
                }

                const childCols = child.props.cols || 1;
                const childRows = child.props.rows || 1;

                return React.cloneElement(child, {
                    style: {
                        width: `${(100 / cols) * childCols}%`,
                        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
                        padding: spacing / 2,
                        ...child.props.style,
                    },
                });
            })}
        </Component>
    );
}
