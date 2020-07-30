import * as React from "react";
import {IAppBarLayoutProps} from "./AppBarLayout.types";
import "./AppBarLayout.scss";
import {BEM} from "../../libs";
import {AppBarComponent, AvatarComponent, BadgeComponent, ButtonActionsComponent, ButtonIconComponent, DropdownComponent, DropDownMenuWidget, IconComponent, InputSearchComponent, isUndef, NotificationListComponent, ToolbarComponent, TypographyComponent} from "../..";
import useDashboardAppContext from "../../context/useDashboardAppContext";

export function AppBarLayout(props: IAppBarLayoutProps) {
    let use = useDashboardAppContext();
    const bem = new BEM("AppBar-layout", {});
    bem.Append(props.className);

    const toggle = () => {
        use.setToggleSidebar();
    };
    return (
        <AppBarComponent style={props.style} className={bem.toString()}>
            <ToolbarComponent className={bem.Children("toolbar")}>
                <div className={bem.Children("left")}>
                    <a href={props.routeLogo} className={bem.Children("logo")}>
                        <img src={props.logo} alt={props.title}/>
                    </a>
                </div>
                <ButtonIconComponent
                    onClick={toggle}
                    style={{
                        marginLeft: -12,
                        marginRight: 16,
                    }}
                >
                    <IconComponent style={{color: "white"}} icon="menu"/>
                </ButtonIconComponent>
                <TypographyComponent className={bem.Children("title")} color={"text-primary"} variant="h6">{props.title}</TypographyComponent>
                {props.search && (
                    <InputSearchComponent {...props.search} custom className={bem.Children("search")} onChange={props.search.onChange}/>
                )}
                <ButtonActionsComponent>
                    {!isUndef(props.langData) ? (
                        <DropdownComponent
                            className={bem.Children("lang")}
                            value={props.lang}
                            data={props.langData}
                        />
                    ) : null}
                    {!isUndef(props.notifications) ? (
                        <DropdownComponent
                            data={[]}
                            trigger={(
                                <ButtonIconComponent>
                                    <BadgeComponent
                                        badgeContent={4}
                                        theme="secondary"
                                    >
                                        <IconComponent icon="alarm"/>
                                    </BadgeComponent>
                                </ButtonIconComponent>
                            )}
                            menu={e => (
                                <DropDownMenuWidget
                                    textFooter={"View all Notifications"}
                                    title={"Notifications"}
                                >
                                    <NotificationListComponent
                                        data={props.notifications}
                                    />
                                </DropDownMenuWidget>
                            )}
                        />
                    ) : null}
                    {!isUndef(props.messages) ? (
                        <DropdownComponent
                            data={[]}
                            trigger={(
                                <ButtonIconComponent>
                                    <BadgeComponent
                                        badgeContent={4}
                                        theme="secondary"
                                    >
                                        <IconComponent icon="chat"/>
                                    </BadgeComponent>
                                </ButtonIconComponent>
                            )}
                            menu={() => (
                                <DropDownMenuWidget
                                    textFooter={"View all Messages"}
                                    title={"Chat"}
                                >
                                    <NotificationListComponent
                                        data={props.messages}
                                    />
                                </DropDownMenuWidget>
                            )}
                        />
                    ) : null}
                    {props.isLogin ? (
                        <DropdownComponent
                            className={bem.Children("log")}
                            value={2}
                            data={props.menuLogin}
                            onChange={props.login.onChange}
                            trigger={(
                                <AvatarComponent mini user status={props.login.status} src={props.login.avatar}>{props.login.name}</AvatarComponent>
                            )}
                        />
                    ) : null}
                </ButtonActionsComponent>
            </ToolbarComponent>
        </AppBarComponent>
    );
}
