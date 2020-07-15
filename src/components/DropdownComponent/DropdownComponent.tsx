import * as React from "react";
import {IDropdownComponentProps} from "./DropdownComponent.types";
import "./DropdownComponent.scss";
import {BEM} from "../../libs";
import {DropdownMenuComponent} from "../..";
import useComponentVisible from "../../hooks/useComponentVisible";

export function DropdownComponent(props: IDropdownComponentProps) {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);


    const bm = new BEM("Dropdown-component", {
        open: open,
    });

    const onClick = (e) => {
        setIsComponentVisible(!isComponentVisible);
    };

    const onSelected = (e) => {
        setIsComponentVisible(false);
        props.onChange && props.onChange(e);
    };

    const getValue = () => {
        let value = props.data.find(i => i.value == props.value);
        if (value) {
            return (
                <>
                    {
                        // @ts-ignore
                        React.cloneElement(value.icon, {
                            className: bm.Children("icon"),
                        })
                    }
                    {value.label}
                </>
            );
        }
        return "-- Select --"
    };
    return (
        <div
            ref={ref}
            style={props.style}
            className={bm.toString()}
        >
            {!props.trigger && (
                <span className={bm.Children("trigger")} onClick={onClick}>
                    {getValue()}
                </span>
            )}
            {props.trigger && (
                <span className={bm.Children("trigger-custom")} onClick={onClick}>{props.trigger}</span>
            )}
            <DropdownMenuComponent onClick={onSelected} className={bm.Children("menu")} open={isComponentVisible} data={props.data}/>
        </div>
    );
}
