import * as React from "react";
import {IContactListLayoutProps} from "./ContactListLayout.types";
import "./ContactListLayout.scss";
import {BEM, ContactContComponent, ListComponent} from "../..";
import useContactsAppContext from "../../context/useContactsAppContext";

export function ContactListLayout(props: IContactListLayoutProps) {
    const bem = new BEM("ContactList-layout", {});
    bem.Append(props.className);
    const use = useContactsAppContext();
    return (
        <ListComponent style={props.style} className={bem.toString()} id={"contact-list-layout"}>
            {use.contacts.map((item) => {
                return (
                    <ContactContComponent
                        key={item.id}
                        card
                        component={"li"}
                        id={item.id}
                        name={item.name}
                        subTitle={item.subTitle}
                        avatar={item.avatar}
                    />
                );
            })}
        </ListComponent>
    );
}
