import React from "react";
import {ContactListLayout} from './ContactListLayout';
// @ts-ignore
export default {
    title: "Layouts|ContactList"
};

export const Default = () => (
    <ContactListLayout
        title={"Titulo"}
    >
        Title
    </ContactListLayout>
);
