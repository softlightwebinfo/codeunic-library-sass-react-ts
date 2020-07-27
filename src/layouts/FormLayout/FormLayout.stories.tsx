import React from "react";
import {FormLayout} from './FormLayout';
import {Form} from "../../models/Form";

// @ts-ignore
export default {
    title: "Layouts|Form"
};

export const Default = () => {
    const form = new Form("form-layout", {
        card: true,
    });
    const component = form.Component();
    form
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Pages"}))
                .Add(component.Select({
                    id: "page",
                    options: [
                        {value: "-", label: "Select page"},
                        {value: "home", label: "Home"},
                        {value: "services", label: "Services"},
                    ],
                }))
        )
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Title"}))
                .Add(component.Input({
                    id: "Title", outline: true,
                    placeholder: "Title"
                }))
        )
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Subtitle"}))
                .Add(component.Input({
                    id: "Subtitle", outline: true,
                    placeholder: "Subtitle",
                }))
        )
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Route"}))
                .Add(component.Input({
                    id: "Route", outline: true,
                    placeholder: "Route",
                }))
        )
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Button"}))
                .Add(component.Input({
                    id: "Button", outline: true,
                    placeholder: "Button",
                }))
        )
        .Add(
            form.Group({form: true})
                .Add(component.FormLabel({children: "Image"}))
                .Add(component.Input({
                    id: "File",
                    outline: true,
                    type: "file"
                }))
        )
        .Add(
            component.Button({children: "Submit", style: {width: 'min-content'}, type: "submit"})
        );
    return (
        <FormLayout
            form={form}
            onSubmit={values => {
                console.log("onSubmit", values);
            }}
            onChange={(id, value, values) => {
                console.log("Change", id, value, values);
            }}
        />
    );
};
