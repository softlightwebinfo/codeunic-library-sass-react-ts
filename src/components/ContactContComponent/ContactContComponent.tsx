import * as React from "react";
import {IContactContComponentProps} from "./ContactContComponent.types";
import "./ContactContComponent.scss";
import {BEM} from "../../libs";
import {ButtonIconComponent, DropdownComponent, IconComponent, MessageAvatarComponent} from "../..";

export function ContactContComponent(props: IContactContComponentProps) {
    const bm = new BEM("ContactCont-component", {
        card: props.card,
    });
    bm.Append(props.className);
    const Component = props.component || "div";
    return (
        // @ts-ignore
        <Component
            data-name={props.name}
            style={props.style}
            className={bm.toString()}
        >
            <MessageAvatarComponent
                src={props.avatar}
                name={props.name}
                title={props.name}
                subTitle={props.subTitle}
            />
            <DropdownComponent
                data={[
                    {label: "Edit", value: "edit", icon: <i/>},
                    {label: "Delete", value: "delete", icon: <i/>},
                ]}
                trigger={(
                    <ButtonIconComponent>
                        <IconComponent style={{color: "gray"}} icon={"more_vert"}/>
                    </ButtonIconComponent>
                )}
            />
        </Component>
    );
}
