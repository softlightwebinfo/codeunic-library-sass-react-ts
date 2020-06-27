import React from "react";
import {ButtonComponent} from './ButtonComponent';

// @ts-ignore
export default {
    title: "Buttons|Button"
};

export const Default = () => <ButtonComponent>Click para enviar</ButtonComponent>;
export const Primary = () => <ButtonComponent theme={"primary"}>Click para enviar</ButtonComponent>;
export const Secondary = () => <ButtonComponent theme={"secondary"}>Click para enviar</ButtonComponent>;
export const Info = () => <ButtonComponent theme={"info"}>Click para enviar</ButtonComponent>;
export const Success = () => <ButtonComponent theme={"success"}>Click para enviar</ButtonComponent>;
export const Danger = () => <ButtonComponent theme={"danger"}>Click para enviar</ButtonComponent>;
export const Warning = () => <ButtonComponent theme={"warning"}>Click para enviar</ButtonComponent>;
export const Error = () => <ButtonComponent theme={"error"}>Click para enviar</ButtonComponent>;
export const Disabled = () => <ButtonComponent isDisabled>Disabled</ButtonComponent>;
export const BorderOutline = () => (
    <>
        <ButtonComponent variant={"outlined"} theme={"primary"}>Border outline</ButtonComponent>
        <ButtonComponent variant={"outlined"} theme={"info"}>Border outline</ButtonComponent>
        <ButtonComponent variant={"outlined"} theme={"secondary"}>Border outline</ButtonComponent>
    </>
);
