import * as React from "react";
import {ICallSidebarLayoutProps} from "./CallSidebarLayout.types";
import "./CallSidebarLayout.scss";
import {BEM, ChatCallComponent, SeparatorComponent} from "../..";

export function CallSidebarLayout(props: ICallSidebarLayoutProps) {
    const bem = new BEM("CallSidebar-layout", {});
    bem.Append(props.className);
    return (
        <div style={props.style} className={bem.toString()}>
            {props.data.map((item, index) => {
                if (item.line) {
                    return (
                        <SeparatorComponent key={index} data={item.date}/>
                    );
                }
                return (
                    <ChatCallComponent
                        key={index}
                        avatar={item.src}
                        icon={item.icon}
                        name={item.name}
                        message={item.message}
                        date={item.date}
                    />
                )
            })}
        </div>
    );
}
