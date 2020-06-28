import React from "react";
import {GridComponent} from './GridComponent';
import {BoxxComponent, PaperComponent} from "../..";
import {IStyle} from "../../Interfaces/IStyle";

// @ts-ignore
export default {
    title: "Components|Grid"
};

export const Default = () => (
    <BoxxComponent>
        <GridComponent container spacing={2}>
            <GridComponent item xs={12}>
                <GridComponent container justify="center" spacing={2}>
                    {[0, 1, 2].map((value) => (
                        <GridComponent key={value} item>
                            <PaperComponent style={{
                                height: 140,
                                width: 100,
                            }}/>
                        </GridComponent>
                    ))}
                </GridComponent>
            </GridComponent>
        </GridComponent>
    </BoxxComponent>
);
export const Direction = () => (
    <BoxxComponent>
        <GridComponent container spacing={2} direction={"column"}>
            {[0, 1, 2].map((value) => (
                <GridComponent key={value} item>
                    <div>
                        <PaperComponent style={{
                            height: 140,
                            //width: 100,
                        }}/>
                    </div>
                </GridComponent>
            ))}
        </GridComponent>
    </BoxxComponent>
);
export const Grid = () => (
    <BoxxComponent>
        <GridComponent container spacing={2}>
            {[...new Array(32)].map((value) => (
                <GridComponent key={value} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <div>
                        <PaperComponent style={{
                            height: 140,
                            //width: 100,
                        }}/>
                    </div>
                </GridComponent>
            ))}
        </GridComponent>
    </BoxxComponent>
);
const st: IStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
    textAlign: 'center',
};
export const AutoLayout = () => (
    <BoxxComponent>
        <div style={{width: '100%', display: 'block'}}>
            <GridComponent container spacing={3}>
                <GridComponent item xs>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
                <GridComponent item xs>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
                <GridComponent item xs>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
            </GridComponent>
            <GridComponent container spacing={3}>
                <GridComponent item xs>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
                <GridComponent item xs={6}>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
                <GridComponent item xs>
                    <PaperComponent style={st}>xs</PaperComponent>
                </GridComponent>
            </GridComponent>
        </div>
    </BoxxComponent>
);
