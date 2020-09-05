import * as React from "react";
import { IHeaderToolbarComponentProps } from "./HeaderToolbarComponent.types";
import "./HeaderToolbarComponent.scss";
import { BEM } from "../../libs";
import { ButtonIconComponent, InputSearchComponent, ListComponent, TypographyComponent } from "../..";

export function HeaderToolbarComponent(props: IHeaderToolbarComponentProps) {
    const bm = new BEM("HeaderToolbar-component", {});
    bm.Append(props.className);

    const onClick = (item, index) => {
        props.onClick && props.onClick(item, index);
    };

    return (
        <div
            style={props.style}
            className={bm.toString()}
        >
            <div className={bm.Children("left")}>
                {props.title && (
                    <TypographyComponent
                        component={"h4"}
                        variant={"h5"}
                        className={bm.Children("title")}
                    >
                        {props.title}
                    </TypographyComponent>
                )}
            </div>
            <div className={bm.Children("nav")}>
                {props.search && (
                    <InputSearchComponent
                        outlined
                        onChange={props.search.onChange}
                        placeholder={props.search.placeholder}
                        value={props.search.value}
                    />
                )}
                <ListComponent horizontal>
                    {props.icons.map((item, index) => (
                        <ButtonIconComponent hover key={index} onClick={() => onClick(item, index)}>
                            {item}
                        </ButtonIconComponent>
                    ))}
                </ListComponent>
            </div>
        </div>
    );
}
