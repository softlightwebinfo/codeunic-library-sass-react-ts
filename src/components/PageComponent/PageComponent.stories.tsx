import React from "react";
import {PageLayoutComponent} from './AppBarComponent';
import {BadgeComponent, ButtonComponent, ButtonIconComponent, IconComponent, InputSearchComponent, ToolbarComponent, TypographyComponent} from "../..";
import {FlexGrowComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|AppBar"
};

export const Default = () => (
    <PageLayoutComponent position={"static"}>
        <div style={{height: 60}}/>
    </PageLayoutComponent>
);
export const Simple = () => (
    <PageLayoutComponent position={"static"}>
        <ToolbarComponent>
            <ButtonIconComponent style={{marginRight: 16}}>
                <IconComponent icon={"menu"}/>
            </ButtonIconComponent>
            <TypographyComponent style={{flexGrow: 1}} variant="h6">
                News
            </TypographyComponent>
            <ButtonComponent theme={"inherit"}>Login</ButtonComponent>
        </ToolbarComponent>
    </PageLayoutComponent>
);
export const Search = () => (
    <PageLayoutComponent position={"static"}>
        <ToolbarComponent>
            <ButtonIconComponent style={{marginRight: 16,marginLeft:-12}}>
                <IconComponent icon={"menu"}/>
            </ButtonIconComponent>
            <TypographyComponent variant="h6">
                News
            </TypographyComponent>
            <InputSearchComponent onChange={() => console.log("Hello")}/>
            <FlexGrowComponent/>
            <ButtonComponent theme={"inherit"}>Login</ButtonComponent>
        </ToolbarComponent>
    </PageLayoutComponent>
);
export const Badges = () => (
    <PageLayoutComponent position={"static"}>
        <ToolbarComponent>
            <ButtonIconComponent style={{marginRight: 16,marginLeft:-12}}>
                <IconComponent icon={"menu"}/>
            </ButtonIconComponent>
            <TypographyComponent variant="h6">
                News
            </TypographyComponent>
            <InputSearchComponent onChange={() => console.log("Hello")}/>
            <FlexGrowComponent/>
            <ButtonIconComponent>
                <BadgeComponent badgeContent={4} theme="secondary">
                    <IconComponent icon={"alarm"}/>
                </BadgeComponent>
            </ButtonIconComponent>
            <ButtonIconComponent>
                <BadgeComponent badgeContent={10} theme="secondary">
                    <IconComponent icon={"menu"}/>
                </BadgeComponent>
            </ButtonIconComponent>
            <ButtonComponent theme={"inherit"}>Login</ButtonComponent>
        </ToolbarComponent>
    </PageLayoutComponent>
);
export const Dense = () => (
    <PageLayoutComponent position={"static"}>
        <ToolbarComponent regular={false}>
            <ButtonIconComponent style={{marginRight: 16}}>
                <IconComponent icon={"menu"}/>
            </ButtonIconComponent>
            <TypographyComponent style={{flexGrow: 1}} variant="h6">
                News
            </TypographyComponent>
            <ButtonComponent theme={"inherit"}>Login</ButtonComponent>
        </ToolbarComponent>
    </PageLayoutComponent>
);
