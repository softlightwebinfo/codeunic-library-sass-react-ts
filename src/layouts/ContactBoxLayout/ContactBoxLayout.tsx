import * as React from "react";
import {IContactBoxLayoutProps} from "./ContactBoxLayout.types";
import "./ContactBoxLayout.scss";
import {AlphapetsListComponent, BEM, ButtonComponent, GridComponent, IconComponent, ListMenuComponent} from "../..";
import useContactsAppContext from "../../context/useContactsAppContext";
import {ContactListLayout} from "../..";

export function ContactBoxLayout(props: IContactBoxLayoutProps) {
    const bem = new BEM("ContactBox-layout", {});
    bem.Append(props.className);

    const use = useContactsAppContext();
    console.log(use);
    return (
        <div style={props.style} className={bem.toString()}>
            <GridComponent container>
                <GridComponent item xs={12} lg={3} sm={4}>
                    <ButtonComponent block theme={"orange"}>
                        <IconComponent icon={"plus"}/>
                        Add Contact
                    </ButtonComponent>
                    <ListMenuComponent
                        active={0}
                        className={bem.Children("listMenu")}
                        data={[
                            {label: "All"},
                            {label: "Company"},
                            {label: "Client"},
                            {label: "Staff"},
                        ]}
                    />
                </GridComponent>
                <GridComponent item xs={12} sm={8} lg={9}>
                    <div className={bem.Children("contactList")}>
                        <ContactListLayout/>
                    </div>
                </GridComponent>
            </GridComponent>
            <AlphapetsListComponent/>
        </div>
    );
}
