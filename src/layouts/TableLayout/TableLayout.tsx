import * as React from "react";
import {ITableLayoutProps} from "./TableLayout.types";
import "./TableLayout.scss";
import {BEM, DotComponent, DropdownComponent, IconComponent, LabelComponent, MessageAvatarComponent, ProgressComponent, TableColComponent, TableComponent, TableLabel, TableRowComponent} from "../..";
import {ETableColumnType, ITableColumn, ITableRow} from "../../Interfaces/ITable";
import {IMessageAvatarComponentProps} from "../../components/MessageAvatarComponent/MessageAvatarComponent.types";
import {GroupSmallComponent} from "../../components/GroupSmallComponent/GroupSmallComponent";
import {IGroupSmallComponentProps} from "../../components/GroupSmallComponent/GroupSmallComponent.types";
import {IProgressComponentProps} from "../../components/ProgressComponent/ProgressComponent.types";
import moment from 'moment';

export function TableLayout(props: ITableLayoutProps) {
    const bem = new BEM("TableLayout-layout", {});
    bem.Append(props.className);
    const contentData = (item: ITableRow, col: ITableColumn) => {
        switch (col.type) {
            case ETableColumnType.LABEL:
                let _dataItem = item[col.key] as TableLabel;
                return <LabelComponent theme={_dataItem.theme} name={_dataItem.name}/>;
            case ETableColumnType.GROUP_SMALL:
                const dataItem = item[col.key] as IGroupSmallComponentProps;
                return (
                    <GroupSmallComponent
                        name={dataItem.name}
                        data={dataItem.data}
                    />
                );
            case ETableColumnType.PROGRESS:
                const dataItemProgress = item[col.key] as IProgressComponentProps;
                return (
                    <ProgressComponent
                        color={dataItemProgress.color}
                        value={dataItemProgress.value}
                    />
                );
            case ETableColumnType.STATUS:
                return (
                    <DropdownComponent
                        onChange={e => props.onChange && props.onChange(e)}
                        value={item[col.key]}
                        data={[
                            {icon: <DotComponent color={"success"}/>, label: "Active", value: true},
                            {icon: <DotComponent color={"danger"}/>, label: "Inactive", value: false},
                        ]}
                    />
                );
            case ETableColumnType.ACTION:
                return (
                    <DropdownComponent
                        onChange={e => props.onChange && props.onChange(e)}
                        value={item[col.key]}
                        trigger={<IconComponent icon={"more_vert"}/>}
                        data={[
                            {icon: <IconComponent icon={""}/>, label: "Edit"},
                            {icon: <IconComponent icon={""}/>, label: "Delete"},
                        ]}
                    />
                );

            case ETableColumnType.COMPONENT:
                return item[col.key];
            case ETableColumnType.STRING:
                return item[col.key];
            case ETableColumnType.NUMBER:
                return item[col.key];
            case ETableColumnType.DATE:
                return moment(item[col.key]).format(col.format || "DD-MM-YYYY HH:mm:ss");
            case ETableColumnType.MESSAGE_AVATAR:
                const data = item[col.key] as IMessageAvatarComponentProps;
                return (
                    <MessageAvatarComponent
                        name={data.name}
                        title={data.title}
                        subTitle={data.subTitle}
                        src={data.src}
                    />
                );
            default: {
                return null;
            }
        }
    };
    const content = () => {
        return props.rows.map((item, index) => {
            const itemData = props.data != undefined ? props.data(item) : item;
            return (
                <TableRowComponent key={index}>
                    {props.columns.map((col, colIndex) => (
                        <TableColComponent align={col.align} key={colIndex}>
                            {contentData(itemData, col)}
                        </TableColComponent>
                    ))}
                </TableRowComponent>
            );
        });
    };

    return (
        <TableComponent className={bem.toString()} style={props.style}>
            <TableRowComponent header>
                {props.columns.map((item, index) => (
                    <TableColComponent align={item.align} key={index}>{item.data}</TableColComponent>
                ))}
            </TableRowComponent>
            {content()}
        </TableComponent>
    );
}
