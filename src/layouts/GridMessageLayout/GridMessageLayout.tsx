import * as React from "react";
import {IGridMessageLayoutProps} from "./GridMessageLayout.types";
import "./GridMessageLayout.scss";
import {GridComponent, PaperComponent, TypographyComponent} from "../..";
import {AvatarComponent} from "../../components/AvatarComponent/AvatarComponent";

export function GridMessageLayout(props: IGridMessageLayoutProps) {
    const classes = {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: 15,
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    };
    return (
        <div style={classes.root}>
            <PaperComponent elevation={1} style={classes.paper}>
                <GridComponent container wrap="nowrap" spacing={2}>
                    <GridComponent item>
                        <AvatarComponent>{props.avatarText}</AvatarComponent>
                    </GridComponent>
                    <GridComponent item xs zeroMinWidth>
                        <TypographyComponent noWrap={false}>{props.message}</TypographyComponent>
                    </GridComponent>
                </GridComponent>
            </PaperComponent>
        </div>
    );
}
