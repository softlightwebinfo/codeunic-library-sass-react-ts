import * as React from "react";
import {IProfileSidebarLayoutProps} from "./ProfileSidebarLayout.types";
import "./ProfileSidebarLayout.scss";
import {BEM, ListInfoComponent, ProfileImageComponent} from "../..";

export function ProfileSidebarLayout(props: IProfileSidebarLayoutProps) {
    const bem = new BEM("ProfileSidebar-layout", {});
    bem.Append(props.className);
    return (
        <div style={props.style} className={bem.toString()}>
            <ProfileImageComponent
                avatar={props.avatar}
                title={props.title}
                subTitle={props.subTitle}
            />
            <div className={bem.Children("info")}>
               <ListInfoComponent data={props.data}/>
            </div>
        </div>
    );
}

