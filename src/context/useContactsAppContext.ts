import * as React from 'react';
import ContactsAppContext from "./ContactsAppContext";

export default function useContactsAppContext() {
    return React.useContext(ContactsAppContext);
}
