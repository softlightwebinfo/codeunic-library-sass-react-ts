import * as React from "react";
import {IGridListTileComponentProps} from "./GridListTileComponent.types";
import "./GridListTileComponent.scss";
import {BEM} from "../../libs";

export function GridListTileComponent(props: IGridListTileComponentProps) {
    const bm = new BEM("GridListTile-component", {});
    let Component = props.component || "li";
    let cols = props.cols || 1;
    let rows = props.rows || 1;
    const classes: any = {
        root: {
            boxSizing: 'border-box',
            flexShrink: 0,
        },
        /* Styles applied to the `div` element that wraps the children. */
        tile: {
            position: 'relative',
            display: 'block', // In case it's not rendered with a div.
            height: '100%',
            overflow: 'hidden',
        },
        /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
        imgFullHeight: {
            height: '100%',
            transform: 'translateX(-50%)',
            position: 'relative',
            left: '50%',
        },
        /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
        imgFullWidth: {
            width: '100%',
            position: 'relative',
            transform: 'translateY(-50%)',
            top: '50%',
        },
    };
    return (
        <Component className={bm.toString()} style={props.style}>
            <div style={classes.tile}>
                {React.Children.map(props.children, (child) => {
                    if (!React.isValidElement(child)) {
                        return null;
                    }

                    if (child.type === 'img') {
                        return React.cloneElement(child, {
                            className: "GridListTile-component__image",
                        });
                    }

                    return child;
                })}
            </div>
        </Component>
    );
}
