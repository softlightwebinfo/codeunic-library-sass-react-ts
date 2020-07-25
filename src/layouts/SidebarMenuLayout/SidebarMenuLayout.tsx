import * as React from "react";
import {ISidebarMenuLayoutProps, ISidebarMenuLayoutPropsMenu} from "./SidebarMenuLayout.types";
import "./SidebarMenuLayout.scss";
import {BEM} from "../../libs";
import useDashboardAppContext from "../../context/useDashboardAppContext";
import {ListComponent} from "../..";
import {SidebarMenuItemComponent} from "../../components/SidebarMenuComponent/SidebarMenuItemComponent";

export function SidebarMenuLayout(props: ISidebarMenuLayoutProps) {
    const bem = new BEM("SidebarMenu-layout", {});
    bem.Append(props.className);
    const use = useDashboardAppContext();

    const Menu = (menu: ISidebarMenuLayoutPropsMenu[]) => {
        return menu.map((value, index) => (
            <ListComponent component={"ul"} padding={false} key={index}>
                <SidebarMenuItemComponent
                    {...value}
                    name={value.name}
                    arrow={!!value.menu.length}
                    onClick={() => {
                        if (value.menu.length) {
                            value.active = !value.active;
                            use.setToggleItemMenu();
                        }
                    }}
                />
                {value.menu && <div className={bem.Modifier("sublist", "active", value.active)}>{Menu(value.menu)}</div>}
            </ListComponent>
        ));
    };
    return (
        <div style={props.style} className={bem.toString()}>
            {Menu(use.menu)}
        </div>
    );
}
