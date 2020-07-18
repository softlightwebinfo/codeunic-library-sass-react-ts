import * as React from 'react';
import {IContactsAppState} from "../apps/ContactsApp/ContactsApp.types";

/**
 * @ignore - internal component.
 */
const ContactsAppContext = React.createContext<IContactsAppState>({
    contacts: [],
});
ContactsAppContext.displayName = 'ContactsAppContext';
export default ContactsAppContext;

