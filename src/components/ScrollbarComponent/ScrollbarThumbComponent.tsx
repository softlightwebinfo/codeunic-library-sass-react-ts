import * as React from "react";
import {DragCallbackData, ScrollbarThumbProps} from "./ScrollbarThumbComponent.types";
//import "./ScrollbarThumbComponent.scss";
import {AXIS_DIRECTION, AXIS_DIRECTION_PROP_TYPE} from "../../Interfaces/IElementPropsWithElementRefAndRenderer";
import PropTypes from 'prop-types';
import {DraggableCore, DraggableData, DraggableEvent} from "react-draggable";
import {cnb} from "cnbuilder";
import {isFun, isUndef, renderDivWithRenderer} from "../../utils";

declare var global: {
    document?: Document;
};

export class ScrollbarThumbComponent extends React.Component<ScrollbarThumbProps, {}> {
    static propTypes = {
        axis: AXIS_DIRECTION_PROP_TYPE,

        onDrag: PropTypes.func,
        onDragStart: PropTypes.func,
        onDragEnd: PropTypes.func,

        elementRef: PropTypes.func,
        renderer: PropTypes.func,
    };
    public initialOffsetX: number = 0;
    public initialOffsetY: number = 0;
    public lastDragData: DragCallbackData = {
        x: 0,
        y: 0,
        deltaX: 0,
        deltaY: 0,
        lastX: 0,
        lastY: 0,
    };
    public element: HTMLDivElement | null = null;
    private prevUserSelect: string;
    private prevOnSelectStart: ((ev: Event) => boolean) | null;

    private static selectStartReplacer = () => false;

    public componentDidMount(): void {
        if (!this.element) {
            this.setState(() => {
                throw new Error(
                    "<ScrollbarThumbComponent> Element was not created. Possibly you haven't provided HTMLDivElement to renderer's `elementRef` function."
                );
            });
            return;
        }
    }

    public componentWillUnmount(): void {
        this.handleOnDragStop();

        this.elementRef(null);
    }

    public handleOnDragStart = (ev: DraggableEvent, data: DraggableData) => {
        if (!this.element) {
            this.handleOnDragStop(ev, data);
            return;
        }

        if (global.document) {
            this.prevUserSelect = global.document.body.style.userSelect;
            global.document.body.style.userSelect = "none";

            this.prevOnSelectStart = global.document.onselectstart;
            global.document.onselectstart = ScrollbarThumbComponent.selectStartReplacer;
        }

        this.props.onDragStart &&
        this.props.onDragStart(
            (this.lastDragData = {
                x: data.x - this.initialOffsetX,
                y: data.y - this.initialOffsetY,
                lastX: data.lastX - this.initialOffsetX,
                lastY: data.lastY - this.initialOffsetY,
                deltaX: data.deltaX,
                deltaY: data.deltaY,
            })
        );

        this.element.classList.add("dragging");
    };

    public handleOnDrag = (ev: DraggableEvent, data: DraggableData) => {
        if (!this.element) {
            this.handleOnDragStop(ev, data);
            return;
        }

        this.props.onDrag &&
        this.props.onDrag(
            (this.lastDragData = {
                x: data.x - this.initialOffsetX,
                y: data.y - this.initialOffsetY,
                lastX: data.lastX - this.initialOffsetX,
                lastY: data.lastY - this.initialOffsetY,
                deltaX: data.deltaX,
                deltaY: data.deltaY,
            })
        );
    };

    public handleOnDragStop = (ev?: DraggableEvent, data?: DraggableData) => {
        const resultData = data
            ? {
                x: data.x - this.initialOffsetX,
                y: data.y - this.initialOffsetY,
                lastX: data.lastX - this.initialOffsetX,
                lastY: data.lastY - this.initialOffsetY,
                deltaX: data.deltaX,
                deltaY: data.deltaY,
            }
            : this.lastDragData;

        this.props.onDragEnd && this.props.onDragEnd(resultData);

        this.element && this.element.classList.remove("dragging");

        if (global.document) {
            global.document.body.style.userSelect = this.prevUserSelect;

            global.document.onselectstart = this.prevOnSelectStart;
            this.prevOnSelectStart = null;
        }

        this.initialOffsetX = 0;
        this.initialOffsetY = 0;
        this.lastDragData = {
            x: 0,
            y: 0,
            deltaX: 0,
            deltaY: 0,
            lastX: 0,
            lastY: 0,
        };
    };

    public handleOnMouseDown = (ev: MouseEvent) => {
        if (!this.element) {
            return;
        }

        ev.preventDefault();
        ev.stopPropagation();

        if (!isUndef(ev.offsetX)) {
            /* istanbul ignore next */
            this.initialOffsetX = ev.offsetX;
            /* istanbul ignore next */
            this.initialOffsetY = ev.offsetY;
        } else {
            const rect: ClientRect = this.element.getBoundingClientRect();
            this.initialOffsetX = (ev.clientX || ((ev as unknown) as TouchEvent).touches[0].clientX) - rect.left;
            this.initialOffsetY = (ev.clientY || ((ev as unknown) as TouchEvent).touches[0].clientY) - rect.top;
        }
    };

    public render(): React.ReactElement<any> | null {
        const {
            elementRef,

            axis,

            onDrag,
            onDragEnd,
            onDragStart,

            ...props
        } = this.props as ScrollbarThumbProps;

        props.className = cnb(
            "ScrollbarsCustom-Thumb",
            axis === AXIS_DIRECTION.X ? "ScrollbarsCustom-ThumbX" : "ScrollbarsCustom-ThumbY",
            props.className
        );

        if (props.renderer) {
            (props as ScrollbarThumbProps).axis = axis;
        }

        return (
            <DraggableCore
                allowAnyClick={false}
                enableUserSelectHack={false}
                onMouseDown={this.handleOnMouseDown}
                onDrag={this.handleOnDrag}
                onStart={this.handleOnDragStart}
                onStop={this.handleOnDragStop}
                // ToDo: Fixit!
                // react-draggable developers did not update typings so there is no appropriate prop
                // @ts-ignore
                nodeRef={this.elementRefHack}
            >
                {renderDivWithRenderer(props, this.elementRef)}
            </DraggableCore>
        );
    }

    private elementRefHack = React.createRef<HTMLElement>();

    private elementRef = (ref: HTMLDivElement | null): void => {
        isFun(this.props.elementRef) && this.props.elementRef(ref);
        this.element = ref;

        // @ts-ignore
        this.elementRefHack["current"] = ref;
    };
}
