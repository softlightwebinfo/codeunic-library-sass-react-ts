import React from "react";
import {ContactsApp} from './ContactsApp';
// @ts-ignore
export default {
    title: "Apps|Contacts"
};

export const Default = () => (
    <ContactsApp
        contacts={
            [...new Array(26)].map((item, index) => ({
                id: index,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                name: String.fromCharCode(index + 97) + `Name - ${index}`,
                subTitle: `Subtitle - ${index}`,
            }))
        }
    />
);
