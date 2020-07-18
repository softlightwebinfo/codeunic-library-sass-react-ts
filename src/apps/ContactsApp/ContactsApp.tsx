import * as React from "react";
import {IContactsAppProps, IContactsAppState} from "./ContactsApp.types";
import "./ContactsApp.scss";
import ContactsAppContext from "../../context/ContactsAppContext";
import {ContactsAppContent} from "./ContactsAppContent";
import {ContactBoxLayout, ContentToolbarComponent, HeaderToolbarComponent, IconComponent, ScrollbarComponent} from "../..";

export class ContactsApp extends React.Component<IContactsAppProps, IContactsAppState> {
    public state: IContactsAppState = {
        contacts: this.props.contacts,
        goTo: (item: any): void => {
            let id = 'contact-list-layout';
            let doc = document.getElementById(id);
            doc.childNodes.forEach((value, key) => {
                // @ts-ignore
                let name = value.getAttribute("data-name");
                if (name[0] == item) {
                    // @ts-ignore
                    value.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            })
        }
    };

    render() {
        return (
            <ContactsAppContext.Provider value={this.state}>
                <ContactsAppContent>
                    <HeaderToolbarComponent
                        onClick={(_, index) => console.log(index)}
                        title={"Contacts"}
                        search={{
                            value: "",
                            onChange: (e) => console.log(e),
                            placeholder: "Search"
                        }}
                        icons={[
                            <IconComponent icon={"setting"}/>,
                        ]}
                    />
                    <ContentToolbarComponent>
                        <ScrollbarComponent>
                            <ContactBoxLayout/>
                        </ScrollbarComponent>
                    </ContentToolbarComponent>
                </ContactsAppContent>
            </ContactsAppContext.Provider>
        );
    }
}
