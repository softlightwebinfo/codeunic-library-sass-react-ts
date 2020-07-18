import * as React from "react";
import {IListAppProps, IListAppState} from "./ListApp.types";
import "./ListApp.scss";
import {BEM} from "../../libs";
import {ButtonIconComponent, GridComponent, IconComponent, TitleRowComponent} from "../..";
import {IOnClick} from "../../Interfaces/IOnClick";
import {ProfileWidget} from "../..";
import {TableLayout} from "../../layouts/TableLayout/TableLayout";

export class ListApp extends React.Component<IListAppProps, IListAppState> {
    public state: IListAppState = {
        list: false
    };

    render() {
        const bm = new BEM("List-app", {});
        bm.Append(this.props.className);
        return (
            <div className={bm.toString()}>
                <TitleRowComponent
                    className={bm.Children("title-row")}
                    breadcrumb={this.props.breadcrumb}
                    title={this.props.title}
                    button={{
                        icon: "plus",
                        label: "New Employee",
                        onClick(e: IOnClick): any {

                        }
                    }}
                    extra={(
                        <>
                            <ButtonIconComponent style={{backgroundColor: !this.state.list && "gainsboro"}} hover onClick={() => this.setState({list: false})}>
                                <IconComponent icon={"grid"}/>
                            </ButtonIconComponent>
                            <ButtonIconComponent style={{backgroundColor: this.state.list && "gainsboro"}} hover onClick={() => this.setState({list: true})}>
                                <IconComponent icon={"menu"}/>
                            </ButtonIconComponent>
                        </>
                    )}
                />
                {!this.state.list && (
                    <GridComponent spacing={2} container>
                        {this.props.rows.map((row) => (
                            <GridComponent item xs={12} sm={3} key={row.id}>
                                <ProfileWidget
                                    avatar={row.avatar}
                                    name={row.name}
                                    category={row.category}
                                />
                            </GridComponent>
                        ))}
                    </GridComponent>
                )}
                {this.state.list && (
                    <TableLayout
                        data={this.props.tableData}
                        columns={this.props.columns || []}
                        rows={this.props.rows}
                    />
                )}
            </div>
        );
    }
}
