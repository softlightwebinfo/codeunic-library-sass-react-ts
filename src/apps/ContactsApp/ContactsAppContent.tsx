import * as React from "react";
import {BEM} from "../../libs";
import {IContactsAppPropsContent} from "./ContactsApp.types";
import useResizeHeight from "../../hooks/useResizeHeight";

export function ContactsAppContent(props: IContactsAppPropsContent) {
    const bem = new BEM("Contacts-app", {});
    bem.Append(props.className);
    let {ref, height} = useResizeHeight();
    return (
        <div className={bem.toString()} style={{
            ...props.style,
            height: height,
        }}>
            <div className={bem.Children("wrapper")}>
                <div className={bem.Children("view")}>
                    <div className={bem.Children("window")}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
