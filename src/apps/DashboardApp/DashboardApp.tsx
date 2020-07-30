import * as React from "react";
import {IDashboardAppProps, IDashboardAppState} from "./DashboardApp.types";
import "./DashboardApp.scss";
import DashboardAppContext from "../../context/DashboardAppContext";
import {BEM} from "../../libs";
import {AppBarLayout, SidebarLayout, TitleRowComponent} from "../..";
import useResizeHeight from "../../hooks/useResizeHeight";
import {ISidebarMenuLayoutPropsMenu} from "../../layouts/SidebarMenuLayout/SidebarMenuLayout.types";

export const Content = ({className, children}) => {
    let height = useResizeHeight();

    return (
        <div style={{minHeight: height.height}} className={className}>
            {children}
        </div>
    )
};

export class DashboardApp extends React.Component<IDashboardAppProps, IDashboardAppState> {
    public state: IDashboardAppState = {
        miniSidebar: false,
        setToggleSidebar: (): void => {
            this.setState(e => ({miniSidebar: !e.miniSidebar}));
        },
        searchValue: "",
        menu: this.props.menu,
        setToggleItemMenu: (): void => {
            this.setState({menu: this.state.menu});
        },
        onClickItemSidebar: (value: ISidebarMenuLayoutPropsMenu): void => {
            this.props.onClickItemSidebar && this.props.onClickItemSidebar(value);
        }
    };

    render() {
        const bm = new BEM('Dashboard-app', {});
        return (
            <DashboardAppContext.Provider value={this.state}>
                <div className={bm.toString()}>
                    <AppBarLayout
                        title={this.props.header.title}
                        logo={this.props.header.logo}
                        routeLogo={this.props.header.routeLogo}
                        search={this.props.header.search ? {
                            placeholder: this.props.header.search.placeholder,
                            value: this.state.searchValue,
                            onChange: (e) => {
                                this.setState({searchValue: e.target.value});
                            }
                        } : undefined}
                        notifications={this.props.header.notifications}
                        messages={this.props.header.messages}
                        langData={this.props.header.langData}
                        menuLogin={this.props.header.menuLogin}
                        isLogin={this.props.header.isLogin}
                        login={this.props.header.login}
                        lang={this.props.header.lang}
                    />
                    <SidebarLayout/>
                    <Content className={bm.Modifier("wrapper", "miniSidebar", this.state.miniSidebar)}>
                        {this.props.title && (
                            <TitleRowComponent
                                className={bm.Children("title")}
                                breadcrumb={this.props.title.breadcrumb}
                                title={this.props.title.title}
                                extra={this.props.title.extra}
                            />
                        )}
                        {this.props.children}
                    </Content>
                </div>
            </DashboardAppContext.Provider>
        );
    }
}
