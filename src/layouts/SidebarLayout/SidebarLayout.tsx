import * as React from "react";
import {ISidebarLayoutProps} from "./SidebarLayout.types";
import "./SidebarLayout.scss";
import {BEM} from "../../libs";
import {ScrollbarComponent, SidebarComponent, SidebarMenuLayout} from "../..";
import useDashboardAppContext from "../../context/useDashboardAppContext";

export function SidebarLayout(props: ISidebarLayoutProps) {
    const use = useDashboardAppContext();
    const bem = new BEM("Sidebar-layout", {
        miniSidebar: use.miniSidebar,
    });
    bem.Append(props.className);
    const menuSelect = () => {

    };
    return (
        <SidebarComponent style={props.style} className={bem.toString()}>
            <ScrollbarComponent>
                <SidebarMenuLayout/>
            </ScrollbarComponent>
        </SidebarComponent>
    );
}
