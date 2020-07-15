import * as React from "react";
import {ICardStadisticLayoutProps} from "./CardStadisticLayout.types";
import "./CardStadisticLayout.scss";
import {BEM, GridComponent, ItemDotLayout, ProgressComponent, StatBoxComponent} from "../..";
import {CardLayout} from "../..";

export function CardStadisticLayout(props: ICardStadisticLayoutProps) {
    const {stadistics = []} = props;
    const bem = new BEM("CardStadistic-layout", {});
    bem.Append(props.className);
    return (
        <CardLayout title={props.title} className={bem.toString()} style={props.style}>
            <GridComponent container spacing={2}>
                {stadistics.map((item, index) => (
                    <GridComponent key={index} item xs={12} sm={6}>
                        <StatBoxComponent {...item} title={item.title} value={item.value}/>
                    </GridComponent>
                ))}
            </GridComponent>
            <ProgressComponent
                data={props.progress}
            />
            <ItemDotLayout data={props.data}/>
        </CardLayout>
    );
}
