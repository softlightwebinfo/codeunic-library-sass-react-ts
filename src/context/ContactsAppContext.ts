import * as React from 'react';
import {IContactsAppState} from "../apps/ContactsApp/ContactsApp.types";

/**
 * @ignore - internal component.
 */
const ContactsAppContext = React.createContext<IContactsAppState>({
    contacts: [],
    goTo(item: any): void {
    }
});
ContactsAppContext.displayName = 'ContactsAppContext';
export default ContactsAppContext;

