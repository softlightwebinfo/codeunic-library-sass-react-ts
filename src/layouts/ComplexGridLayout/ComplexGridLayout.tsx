import * as React from "react";
import {IComplexGriLayoutProps} from "./ComplexGridLayout.types";
import "./ComplexGridLayout.scss";
import {GridComponent, PaperComponent, TypographyComponent} from "../..";
import {ButtonBaseComponent} from "../..";

export function ComplexGridLayout(props: IComplexGriLayoutProps) {
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
            <PaperComponent style={classes.paper}>
                <GridComponent container spacing={2}>
                    <GridComponent item>
                        <ButtonBaseComponent style={classes.image}>
                            <img style={classes.img} alt="complex" src="https://material-ui.com/static/images/grid/complex.jpg"/>
                        </ButtonBaseComponent>
                    </GridComponent>
                    <GridComponent item xs={12} sm container>
                        <GridComponent item xs container direction="column" spacing={2}>
                            <GridComponent item xs>
                                <TypographyComponent gutterBottom variant="subtitle1">
                                    {props.title}
                                </TypographyComponent>
                                <TypographyComponent variant="body2" gutterBottom>
                                    {props.subtitle}
                                </TypographyComponent>
                                <TypographyComponent variant="body2" color="text-secondary">
                                    {props.secondary}
                                </TypographyComponent>
                            </GridComponent>
                            <GridComponent item>
                                <TypographyComponent onClick={props.onClickButton} variant="body2" style={{cursor: 'pointer'}}>
                                    {props.buttonText}
                                </TypographyComponent>
                            </GridComponent>
                        </GridComponent>
                        <GridComponent item>
                            <TypographyComponent variant="subtitle1">$19.00</TypographyComponent>
                        </GridComponent>
                    </GridComponent>
                </GridComponent>
            </PaperComponent>
        </div>
    );
}
