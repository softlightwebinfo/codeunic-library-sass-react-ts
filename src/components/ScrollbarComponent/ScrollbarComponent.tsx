import * as React from "react";
import {ScrollbarProps, ScrollbarState} from "./ScrollbarComponent.types";
//import "./ScrollbarComponent.scss";
import {cnb} from "cnbuilder";
import {DraggableData} from "react-draggable";
import {zoomLevel} from "zoom-level";
import {AXIS_DIRECTION, IElementPropsWithElementRefAndRenderer, ScrollState, TRACK_CLICK_BEHAVIOR} from "../../Interfaces";
import PropTypes from 'prop-types';
import Emittr from "../../libs/Emittr";
import {isNum, isUndef, uuid, getScrollbarWidth, renderDivWithRenderer, calcThumbSize, getInnerHeight, calcThumbOffset, shouldReverseRtlScroll, getInnerWidth, isFun, calcScrollForThumbOffset} from "../../utils";
import defaultStyle from "../../styles/style";
import Loop from "../../libs/Loop";
import {ScrollbarTrackClickParameters, ScrollbarTrackProps} from "./ScrollbarTrackComponent.types";
import {ScrollbarThumbProps} from "./ScrollbarThumbComponent.types";
import {ScrollbarThumbComponent} from "./ScrollbarThumbComponent";
import {ScrollbarTrackComponent} from "./ScrollbarTrackComponent";

declare var global: {
    window?: Window;
};

let pageZoomLevel: number = global.window ? zoomLevel() : 1;
global.window && global.window.addEventListener("resize", () => (pageZoomLevel = zoomLevel()), {passive: true});

export type ScrollbarContextValue = { parentScrollbar: ScrollbarComponent | null };

export const ScrollbarContext: React.Context<ScrollbarContextValue> = React.createContext({
    parentScrollbar: null,
} as ScrollbarContextValue);

export class ScrollbarComponent extends React.Component<ScrollbarProps, ScrollbarState> {
    static contextType = ScrollbarContext;
    static propTypes = {
        createContext: PropTypes.bool,
        rtl: PropTypes.bool,
        native: PropTypes.bool,
        mobileNative: PropTypes.bool,
        momentum: PropTypes.bool,
        noDefaultStyles: PropTypes.bool,

        disableTracksMousewheelScrolling: PropTypes.bool,
        disableTrackXMousewheelScrolling: PropTypes.bool,
        disableTrackYMousewheelScrolling: PropTypes.bool,

        disableTracksWidthCompensation: PropTypes.bool,
        disableTrackXWidthCompensation: PropTypes.bool,
        disableTrackYWidthCompensation: PropTypes.bool,

        minimalThumbSize: PropTypes.number,
        maximalThumbSize: PropTypes.number,
        minimalThumbXSize: PropTypes.number,
        maximalThumbXSize: PropTypes.number,
        minimalThumbYSize: PropTypes.number,
        maximalThumbYSize: PropTypes.number,

        noScrollX: PropTypes.bool,
        noScrollY: PropTypes.bool,
        noScroll: PropTypes.bool,

        permanentTrackX: PropTypes.bool,
        permanentTrackY: PropTypes.bool,
        permanentTracks: PropTypes.bool,

        translateContentSizesToHolder: PropTypes.bool,
        translateContentSizeYToHolder: PropTypes.bool,
        translateContentSizeXToHolder: PropTypes.bool,

        removeTracksWhenNotUsed: PropTypes.bool,
        removeTrackYWhenNotUsed: PropTypes.bool,
        removeTrackXWhenNotUsed: PropTypes.bool,

        scrollbarWidth: PropTypes.number,
        fallbackScrollbarWidth: PropTypes.number,
        scrollDetectionThreshold: PropTypes.number,
        scrollTop: PropTypes.number,
        scrollLeft: PropTypes.number,

        className: PropTypes.string,

        wrapperProps: PropTypes.object,
        contentProps: PropTypes.object,
        trackXProps: PropTypes.object,
        trackYProps: PropTypes.object,
        thumbXProps: PropTypes.object,
        thumbYProps: PropTypes.object,

        onUpdate: PropTypes.func,
        onScroll: PropTypes.func,
        onScrollStart: PropTypes.func,
        onScrollStop: PropTypes.func,
    };
    static defaultProps = {
        momentum: true,

        minimalThumbSize: 30,

        fallbackScrollbarWidth: 20,

        trackClickBehavior: TRACK_CLICK_BEHAVIOR.JUMP,

        scrollDetectionThreshold: 100,

        wrapperProps: {},
        scrollerProps: {},
        contentProps: {},
        trackXProps: {},
        trackYProps: {},
        thumbXProps: {},
        thumbYProps: {},
    };
    /**
     * @description UUID identifying scrollbar instance
     */
    public readonly id: string;
    /**
     * @description Reference to the holder HTMLDivElement or null if it wasn't rendered or <i>native</i> property is true
     */
    public holderElement: HTMLDivElement | null;
    /**
     * @description Reference to the wrapper HTMLDivElement or null if it wasn't rendered or <i>native</i> property is true
     */
    public wrapperElement: HTMLDivElement | null;
    /**
     * @description Reference to the HTMLDivElement that actually has browser's scrollbars
     */
    public scrollerElement: HTMLDivElement | null;
    /**
     * @description Reference to the content HTMLDivElement that contains component's children (and has browser's scrollbars)
     */
    public contentElement: HTMLDivElement | null;
    /**
     * @description Reference to the horizontal track HTMLDivElement or null if it wasn't rendered
     */
    public trackXElement: HTMLDivElement | null;
    /**
     * @description Reference to the vertical track HTMLDivElement or null if it wasn't rendered
     */
    public trackYElement: HTMLDivElement | null;
    /**
     * @description Reference to the horizontal thumb HTMLDivElement or null if it wasn't rendered
     */
    public thumbXElement: HTMLDivElement | null;
    /**
     * @description Reference to the vertical thumb HTMLDivElement or null if it wasn't rendered
     */
    public thumbYElement: HTMLDivElement | null;
    public readonly eventEmitter: Emittr;
    /**
     * @description Current ScrollState (cached)
     */
    private scrollValues: ScrollState;
    private _scrollDetectionTO: number | null;

    constructor(props) {
        super(props);

        this.state = {
            trackXVisible: false,
            trackYVisible: false,
            isRTL: props.rtl,
        };

        this.scrollValues = this.getScrollState(true);

        this.eventEmitter = new Emittr(15);

        props.onUpdate && this.eventEmitter.on("update", props.onUpdate);
        props.onScroll && this.eventEmitter.on("scroll", props.onScroll);
        props.onScrollStart && this.eventEmitter.on("scrollStart", props.onScrollStart);
        props.onScrollStop && this.eventEmitter.on("scrollStop", props.onScrollStop);

        this.id = uuid();
    }


    get scrollTop() {
        if (this.scrollerElement) {
            return this.scrollerElement.scrollTop;
        }

        return 0;
    }

    set scrollTop(top) {
        if (this.scrollerElement) {
            this.scrollerElement.scrollTop = top;
            this.update();
        }
    }

    get scrollLeft() {
        if (this.scrollerElement) {
            return this.scrollerElement.scrollLeft;
        }

        return 0;
    }

    set scrollLeft(left) {
        if (this.scrollerElement) {
            this.scrollerElement.scrollLeft = left;
        }
    }

    get scrollHeight() {
        if (this.scrollerElement) {
            return this.scrollerElement.scrollHeight;
        }

        return 0;
    }

    get scrollWidth() {
        if (this.scrollerElement) {
            return this.scrollerElement.scrollWidth;
        }

        return 0;
    }

    get clientHeight() {
        if (this.scrollerElement) {
            return this.scrollerElement.clientHeight;
        }

        return 0;
    }

    get clientWidth() {
        if (this.scrollerElement) {
            return this.scrollerElement.clientWidth;
        }

        return 0;
    }

    public static calculateStyles(props: ScrollbarProps, state: ScrollbarState, scrollValues, scrollbarWidth: number) {
        const useDefaultStyles = !props.noDefaultStyles;

        return {
            holder: {
                ...(useDefaultStyles && defaultStyle.holder),
                position: "relative",
                ...props.style,
            } as React.CSSProperties,
            wrapper: {
                ...(useDefaultStyles && {
                    ...defaultStyle.wrapper,
                    ...(!props.disableTracksWidthCompensation &&
                        !props.disableTrackYWidthCompensation && {
                            [state.isRTL ? "left" : "right"]: state.trackYVisible ? 10 : 0,
                        }),
                    ...(!props.disableTracksWidthCompensation &&
                        !props.disableTrackXWidthCompensation && {
                            bottom: state.trackXVisible ? 10 : 0,
                        }),
                }),
                ...props.wrapperProps!.style,
                position: "absolute",
                overflow: "hidden",
            } as React.CSSProperties,
            content: {
                ...(useDefaultStyles && defaultStyle.content),
                ...(props.translateContentSizesToHolder ||
                props.translateContentSizeYToHolder ||
                props.translateContentSizeXToHolder
                    ? {
                        display: "table-cell",
                    }
                    : {
                        padding: 0.05, // needed to disable margin collapsing without flexboxes, other possible solutions here: https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing
                    }),
                ...(useDefaultStyles &&
                    !(props.translateContentSizesToHolder || props.translateContentSizeYToHolder) && {
                        minHeight: "100%",
                    }),
                ...(useDefaultStyles &&
                    !(props.translateContentSizesToHolder || props.translateContentSizeXToHolder) && {
                        minWidth: "100%",
                    }),
                ...props.contentProps!.style,
            } as React.CSSProperties,
            scroller: {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,

                paddingBottom: !scrollbarWidth && scrollValues.scrollXPossible ? props.fallbackScrollbarWidth : undefined,

                [state.isRTL ? "paddingLeft" : "paddingRight"]:
                    !scrollbarWidth && scrollValues.scrollYPossible ? props.fallbackScrollbarWidth : undefined,

                ...props.scrollerProps!.style,

                ...(!isUndef(props.rtl) && {
                    direction: props.rtl ? "rtl" : "ltr",
                }),

                ...(props.momentum && {WebkitOverflowScrolling: "touch"}),

                overflowY: scrollValues.scrollYPossible ? "scroll" : "hidden",
                overflowX: scrollValues.scrollXPossible ? "scroll" : "hidden",

                marginBottom: scrollValues.scrollXPossible
                    ? -(scrollbarWidth || props.fallbackScrollbarWidth!) - Number(scrollValues.zoomLevel !== 1)
                    : undefined,
                [state.isRTL ? "marginLeft" : "marginRight"]: scrollValues.scrollYPossible
                    ? -(scrollbarWidth || props.fallbackScrollbarWidth!) - Number(scrollValues.zoomLevel !== 1)
                    : undefined,
            } as React.CSSProperties,
            trackX: {
                ...(useDefaultStyles && defaultStyle.track.common),
                ...(useDefaultStyles && defaultStyle.track.x),
                ...props.trackXProps!.style,
                ...(!state.trackXVisible && {display: "none"}),
            } as React.CSSProperties,
            trackY: {
                ...(useDefaultStyles && defaultStyle.track.common),
                ...(useDefaultStyles && defaultStyle.track.y),
                ...(useDefaultStyles && {[state.isRTL ? "left" : "right"]: 0}),
                ...props.trackYProps!.style,
                ...(!state.trackYVisible && {display: "none"}),
            } as React.CSSProperties,
            thumbX: {
                ...(useDefaultStyles && defaultStyle.thumb.common),
                ...(useDefaultStyles && defaultStyle.thumb.x),
                ...props.thumbXProps!.style,
            } as React.CSSProperties,
            thumbY: {
                ...(useDefaultStyles && defaultStyle.thumb.common),
                ...(useDefaultStyles && defaultStyle.thumb.y),
                ...props.thumbYProps!.style,
            } as React.CSSProperties,
        };
    }

    public componentDidMount(): void {
        if (!this.scrollerElement) {
            this.setState(() => {
                throw new Error(
                    "scroller element was not created. Possibly you haven't provided HTMLDivElement to renderer's `elementRef` function."
                );
            });
            return;
        }

        if (!this.contentElement) {
            this.setState(() => {
                throw new Error(
                    "content element was not created. Possibly you haven't provided HTMLDivElement to renderer's `elementRef` function."
                );
            });
            return;
        }

        const props = this.props;

        if (!props.native && !props.mobileNative) {
            //ToDo: move native state to the state so it can be synchronized
            if (!this.holderElement) {
                this.setState(() => {
                    throw new Error(
                        "holder element was not created. Possibly you haven't provided HTMLDivElement to renderer's `elementRef` function."
                    );
                });
                return;
            }

            if (!this.wrapperElement) {
                this.setState(() => {
                    throw new Error(
                        "wrapper element was not created. Possibly you haven't provided HTMLDivElement to renderer's `elementRef` function."
                    );
                });
                return;
            }
        }

        Loop.addTarget(this);

        if (!isUndef(props.scrollTop)) {
            this.scrollerElement.scrollTop = props.scrollTop!;
        }

        if (!isUndef(props.scrollLeft)) {
            this.scrollerElement.scrollLeft = props.scrollLeft!;
        }

        this.update(true);
    }

    public componentWillUnmount(): void {
        Loop.removeTarget(this);
    }

    public componentDidUpdate(prevProps: Readonly<ScrollbarProps>, prevState: Readonly<ScrollbarState>): void {
        if (!this.scrollerElement) {
            return;
        }

        const props = this.props;

        if (props.rtl !== prevProps.rtl && props.rtl !== this.state.isRTL) {
            this.setState({isRTL: props.rtl});
        }

        if (this.state.isRTL !== prevState.isRTL) {
            this.update();
        }

        if (!isUndef(props.scrollTop) && props.scrollTop !== this.scrollerElement.scrollTop) {
            this.scrollerElement.scrollTop = props.scrollTop!;
        }

        if (!isUndef(props.scrollLeft) && props.scrollLeft !== this.scrollerElement.scrollLeft) {
            this.scrollerElement.scrollLeft = props.scrollLeft!;
        }

        if (prevProps.onUpdate !== props.onUpdate) {
            prevProps.onUpdate && this.eventEmitter.off("update", prevProps.onUpdate);
            props.onUpdate && this.eventEmitter.on("update", props.onUpdate);
        }

        if (prevProps.onScroll !== props.onScroll) {
            prevProps.onScroll && this.eventEmitter.off("scroll", prevProps.onScroll);
            props.onScroll && this.eventEmitter.on("scroll", props.onScroll);
        }

        if (prevProps.onScrollStart !== props.onScrollStart) {
            prevProps.onScrollStart && this.eventEmitter.off("scrollStart", prevProps.onScrollStart);
            props.onScrollStart && this.eventEmitter.on("scrollStart", props.onScrollStart);
        }

        if (prevProps.onScrollStop !== props.onScrollStop) {
            prevProps.onScrollStop && this.eventEmitter.off("scrollStop", prevProps.onScrollStop);
            props.onScrollStop && this.eventEmitter.on("scrollStop", props.onScrollStop);
        }
    }

    /**
     * @description Get current scroll-related values.<br/>
     * If <i>force</i> if truthy - will recalculate them instead of returning cached values.
     *
     * @return ScrollState
     */
    public getScrollState = (force: boolean = false): ScrollState => {
        if (this.scrollValues && !force) {
            return {...this.scrollValues};
        }

        let scrollState: ScrollState = {
            clientHeight: 0,
            clientWidth: 0,
            contentScrollHeight: 0,
            contentScrollWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
            scrollYBlocked: false,
            scrollXBlocked: false,
            scrollYPossible: false,
            scrollXPossible: false,
            trackYVisible: false,
            trackXVisible: false,
            zoomLevel: pageZoomLevel * 1,
            isRTL: undefined,
        };

        const props = this.props;

        scrollState.isRTL = this.state.isRTL;

        scrollState.scrollYBlocked = props.noScroll! || props.noScrollY!;
        scrollState.scrollXBlocked = props.noScroll! || props.noScrollX!;

        if (this.scrollerElement) {
            scrollState.clientHeight = this.scrollerElement.clientHeight;
            scrollState.clientWidth = this.scrollerElement.clientWidth;

            scrollState.scrollHeight = this.scrollerElement.scrollHeight;
            scrollState.scrollWidth = this.scrollerElement.scrollWidth;
            scrollState.scrollTop = this.scrollerElement.scrollTop;
            scrollState.scrollLeft = this.scrollerElement.scrollLeft;

            scrollState.scrollYPossible = !scrollState.scrollYBlocked && scrollState.scrollHeight > scrollState.clientHeight;
            scrollState.scrollXPossible = !scrollState.scrollXBlocked && scrollState.scrollWidth > scrollState.clientWidth;

            scrollState.trackYVisible = scrollState.scrollYPossible || props.permanentTracks! || props.permanentTrackY!;
            scrollState.trackXVisible = scrollState.scrollXPossible || props.permanentTracks! || props.permanentTrackX!;
        }

        if (this.contentElement) {
            scrollState.contentScrollHeight = this.contentElement.scrollHeight;
            scrollState.contentScrollWidth = this.contentElement.scrollWidth;
        }

        return scrollState;
    };

    /**
     * @description Scroll to top border
     */
    public scrollToTop = (): this => {
        if (this.scrollerElement) {
            this.scrollerElement.scrollTop = 0;
        }

        return this;
    };

    /**
     * @description Scroll to left border
     */
    public scrollToLeft = (): this => {
        if (this.scrollerElement) {
            this.scrollerElement.scrollLeft = 0;
        }

        return this;
    };

    /**
     * @description Scroll to bottom border
     */
    public scrollToBottom = (): this => {
        if (this.scrollerElement) {
            this.scrollerElement.scrollTop = this.scrollerElement.scrollHeight - this.scrollerElement.clientHeight;
        }

        return this;
    };

    /**
     * @description Scroll to right border
     */
    public scrollToRight = (): this => {
        if (this.scrollerElement) {
            this.scrollerElement.scrollLeft = this.scrollerElement.scrollWidth - this.scrollerElement.clientWidth;
        }

        return this;
    };

    /**
     * @description Set the scrolls at given coordinates.<br/>
     * If coordinate is undefined - current scroll value will persist.
     */
    public scrollTo = (x?: number, y?: number): this => {
        if (this.scrollerElement) {
            isNum(x) && (this.scrollerElement.scrollLeft = x!);
            isNum(y) && (this.scrollerElement.scrollTop = y!);
        }

        return this;
    };

    /**
     * @description Center the viewport at given coordinates.<br/>
     * If coordinate is undefined - current scroll value will persist.
     */
    public centerAt = (x?: number, y?: number): this => {
        if (this.scrollerElement) {
            isNum(x) && (this.scrollerElement.scrollLeft = x! - this.scrollerElement.clientWidth / 2);
            isNum(y) && (this.scrollerElement.scrollTop = y! - this.scrollerElement.clientHeight / 2);
        }

        return this;
    };

    public update = (force = false): ScrollState | void => {
        if (!this.scrollerElement) {
            return;
        }

        // autodetect direction if not defined
        if (isUndef(this.state.isRTL)) {
            this.setState({
                isRTL: getComputedStyle(this.scrollerElement).direction === "rtl",
            });

            return this.getScrollState();
        }

        const scrollState: ScrollState = this.getScrollState(true);
        const prevScrollState: ScrollState = {...this.scrollValues};
        const props = this.props;

        let bitmask: number = 0;

        if (!force) {
            prevScrollState.clientHeight !== scrollState.clientHeight && (bitmask |= 1 << 0);
            prevScrollState.clientWidth !== scrollState.clientWidth && (bitmask |= 1 << 1);
            prevScrollState.scrollHeight !== scrollState.scrollHeight && (bitmask |= 1 << 2);
            prevScrollState.scrollWidth !== scrollState.scrollWidth && (bitmask |= 1 << 3);
            prevScrollState.scrollTop !== scrollState.scrollTop && (bitmask |= 1 << 4);
            prevScrollState.scrollLeft !== scrollState.scrollLeft && (bitmask |= 1 << 5);
            prevScrollState.scrollYBlocked !== scrollState.scrollYBlocked && (bitmask |= 1 << 6);
            prevScrollState.scrollXBlocked !== scrollState.scrollXBlocked && (bitmask |= 1 << 7);
            prevScrollState.scrollYPossible !== scrollState.scrollYPossible && (bitmask |= 1 << 8);
            prevScrollState.scrollXPossible !== scrollState.scrollXPossible && (bitmask |= 1 << 9);
            prevScrollState.trackYVisible !== scrollState.trackYVisible && (bitmask |= 1 << 10);
            prevScrollState.trackXVisible !== scrollState.trackXVisible && (bitmask |= 1 << 11);
            prevScrollState.isRTL !== scrollState.isRTL && (bitmask |= 1 << 12);

            prevScrollState.contentScrollHeight !== scrollState.contentScrollHeight && (bitmask |= 1 << 13);
            prevScrollState.contentScrollWidth !== scrollState.contentScrollWidth && (bitmask |= 1 << 14);

            prevScrollState.zoomLevel !== scrollState.zoomLevel && (bitmask |= 1 << 15);

            // if not forced and nothing has changed - skip this update
            if (bitmask === 0) {
                return prevScrollState;
            }
        } else {
            bitmask = 0b111111111111111;
        }

        if (!props.native && this.holderElement) {
            if (bitmask & (1 << 13) && (props.translateContentSizesToHolder || props.translateContentSizeYToHolder)) {
                this.holderElement.style.height = scrollState.contentScrollHeight + "px";
            }

            if (bitmask & (1 << 14) && (props.translateContentSizesToHolder || props.translateContentSizeXToHolder)) {
                this.holderElement.style.width = scrollState.contentScrollWidth + "px";
            }

            if (
                props.translateContentSizesToHolder ||
                props.translateContentSizeYToHolder ||
                props.translateContentSizeXToHolder
            ) {
                if (
                    (!scrollState.clientHeight && scrollState.contentScrollHeight) ||
                    (!scrollState.clientWidth && scrollState.contentScrollWidth)
                ) {
                    return;
                }
            }
        }

        // if scrollbars visibility has changed
        if (bitmask & (1 << 10) || bitmask & (1 << 11)) {
            prevScrollState.scrollYBlocked = scrollState.scrollYBlocked;
            prevScrollState.scrollXBlocked = scrollState.scrollXBlocked;
            prevScrollState.scrollYPossible = scrollState.scrollYPossible;
            prevScrollState.scrollXPossible = scrollState.scrollXPossible;

            if (this.trackYElement && bitmask & (1 << 10)) {
                this.trackYElement.style.display = scrollState.trackYVisible ? "" : "none";
            }

            if (this.trackXElement && bitmask & (1 << 11)) {
                this.trackXElement.style.display = scrollState.trackXVisible ? "" : "none";
            }

            this.scrollValues = prevScrollState;
            this.setState({
                trackYVisible: (this.scrollValues.trackYVisible = scrollState.trackYVisible)!,
                trackXVisible: (this.scrollValues.trackXVisible = scrollState.trackXVisible)!,
            });

            return;
        }

        (props.native ? this.updaterNative : this.updaterCustom)(bitmask, scrollState);

        this.scrollValues = scrollState;

        if (!props.native && bitmask & (1 << 15)) {
            getScrollbarWidth(true);
            this.forceUpdate();
        }

        this.eventEmitter.emit("update", {...scrollState}, prevScrollState);

        (bitmask & (1 << 4) || bitmask & (1 << 5)) && this.eventEmitter.emit("scroll", {...scrollState}, prevScrollState);

        return this.scrollValues;
    };

    public render(): React.ReactNode {
        const {
            createContext,
            rtl,
            native,
            mobileNative,
            momentum,
            noDefaultStyles,

            disableTracksMousewheelScrolling,
            disableTrackXMousewheelScrolling,
            disableTrackYMousewheelScrolling,

            disableTracksWidthCompensation,
            disableTrackXWidthCompensation,
            disableTrackYWidthCompensation,

            noScrollX,
            noScrollY,
            noScroll,

            permanentTrackX,
            permanentTrackY,
            permanentTracks,

            removeTracksWhenNotUsed,
            removeTrackYWhenNotUsed,
            removeTrackXWhenNotUsed,

            minimalThumbSize,
            maximalThumbSize,
            minimalThumbXSize,
            maximalThumbXSize,
            minimalThumbYSize,
            maximalThumbYSize,

            fallbackScrollbarWidth,

            scrollTop,
            scrollLeft,

            trackClickBehavior,

            scrollDetectionThreshold,

            wrapperProps: propsWrapperProps,
            scrollerProps: propsScrollerProps,
            contentProps: propsContentProps,
            trackXProps: propsTrackXProps,
            trackYProps: propsTrackYProps,
            thumbXProps: propsThumbXProps,
            thumbYProps: propsThumbYProps,

            scrollbarWidth: propsScrollbarWidth,

            elementRef,

            onUpdate,
            onScroll,
            onScrollStart,
            onScrollStop,

            translateContentSizesToHolder,
            translateContentSizeYToHolder,
            translateContentSizeXToHolder,

            children,

            ...propsHolderProps
        } = this.props as ScrollbarProps;

        const scrollbarWidth = !isUndef(propsScrollbarWidth) ? propsScrollbarWidth! : getScrollbarWidth() || 0;

        if (native || (!scrollbarWidth && mobileNative)) {
            this.elementRefHolder(null);
            this.elementRefWrapper(null);
            this.elementRefTrackX(null);
            this.elementRefTrackY(null);
            this.elementRefThumbX(null);
            this.elementRefThumbY(null);

            const contentProps = {
                ...propsContentProps,
                key: "ScrollbarsCustom-Content",
                className: cnb("ScrollbarsCustom-Content", propsContentProps!.className),
                children,
            } as IElementPropsWithElementRefAndRenderer;

            const scrollerProps = {
                ...propsHolderProps,
                className: cnb(
                    "ScrollbarsCustom native",
                    this.state.trackYVisible && "trackYVisible",
                    this.state.trackXVisible && "trackXVisible",
                    this.state.isRTL && "rtl",
                    propsHolderProps.className
                ),
                style: {
                    ...propsHolderProps.style,
                    ...(!isUndef(rtl) && {
                        direction: rtl ? "rtl" : "ltr",
                    }),

                    ...(momentum && {WebkitOverflowScrolling: "touch"}),
                    overflowX: noScroll || noScrollX ? "hidden" : permanentTracks || permanentTrackX ? "scroll" : "auto",
                    overflowY: noScroll || noScrollY ? "hidden" : permanentTracks || permanentTrackY ? "scroll" : "auto",
                },
                onScroll: this.handleScrollerScroll,
                children: renderDivWithRenderer(contentProps, this.elementRefContent),
                renderer: propsScrollerProps!.renderer,
                elementRef: propsScrollerProps!.elementRef,
            } as IElementPropsWithElementRefAndRenderer;

            return renderDivWithRenderer(scrollerProps, this.elementRefScroller);
        }

        const styles = ScrollbarComponent.calculateStyles(this.props, this.state, this.scrollValues, scrollbarWidth);

        const holderChildren = [] as Array<React.ReactNode>;

        const contentProps = {
            ...propsContentProps,
            key: "ScrollbarsCustom-Content",
            className: cnb("ScrollbarsCustom-Content", propsContentProps!.className),
            style: styles.content,
            children: createContext ? (
                <ScrollbarContext.Provider value={{parentScrollbar: this}} children={children}/>
            ) : (
                children
            ),
        } as IElementPropsWithElementRefAndRenderer;

        const scrollerProps = {
            ...propsScrollerProps,
            key: "ScrollbarsCustom-Scroller",
            className: cnb("ScrollbarsCustom-Scroller", propsScrollerProps!.className),
            style: styles.scroller,
            children: renderDivWithRenderer(contentProps, this.elementRefContent),
            onScroll: this.handleScrollerScroll,
        } as IElementPropsWithElementRefAndRenderer;

        const wrapperProps = {
            ...propsWrapperProps,
            key: "ScrollbarsCustom-Wrapper",
            className: cnb("ScrollbarsCustom-Wrapper", propsWrapperProps!.className),
            style: styles.wrapper,
            children: renderDivWithRenderer(scrollerProps, this.elementRefScroller),
        } as IElementPropsWithElementRefAndRenderer;

        holderChildren.push(renderDivWithRenderer(wrapperProps, this.elementRefWrapper));

        if (this.state.trackYVisible || (!removeTracksWhenNotUsed && !removeTrackYWhenNotUsed)) {
            const thumbYProps = {
                ...propsThumbYProps,
                key: "ScrollbarsCustom-ThumbY",
                style: styles.thumbY,
                elementRef: this.elementRefThumbY,
                onDrag: this.handleThumbYDrag,
                onDragEnd: this.handleThumbYDragEnd,
                axis: AXIS_DIRECTION.Y,
            } as ScrollbarThumbProps;

            const trackYProps = {
                ...propsTrackYProps,
                key: "ScrollbarsCustom-TrackY",
                style: styles.trackY,
                elementRef: this.elementRefTrackY,
                onClick: this.handleTrackYClick,
                ...((disableTracksMousewheelScrolling || disableTrackYMousewheelScrolling) && {
                    onWheel: this.handleTrackYMouseWheel,
                }),
                axis: AXIS_DIRECTION.Y,
            } as ScrollbarTrackProps;

            trackYProps.children = <ScrollbarThumbComponent {...thumbYProps} />;
            holderChildren.push(<ScrollbarTrackComponent {...trackYProps} />);
        } else {
            this.elementRefTrackY(null);
            this.elementRefThumbY(null);
        }

        if (this.state.trackXVisible || (!removeTracksWhenNotUsed && !removeTrackXWhenNotUsed)) {
            const thumbXProps = {
                ...propsThumbXProps,
                key: "ScrollbarsCustom-ThumbX",
                style: styles.thumbX,
                elementRef: this.elementRefThumbX,
                onDrag: this.handleThumbXDrag,
                onDragEnd: this.handleThumbXDragEnd,
                axis: AXIS_DIRECTION.X,
            } as ScrollbarThumbProps;

            const trackXProps = {
                ...propsTrackXProps,
                key: "ScrollbarsCustom-TrackX",
                style: styles.trackX,
                elementRef: this.elementRefTrackX,
                onClick: this.handleTrackXClick,
                ...((disableTracksMousewheelScrolling || disableTrackXMousewheelScrolling) && {
                    onWheel: this.handleTrackXMouseWheel,
                }),
                axis: AXIS_DIRECTION.X,
            } as ScrollbarTrackProps;

            trackXProps.children = <ScrollbarThumbComponent {...thumbXProps} />;
            holderChildren.push(<ScrollbarTrackComponent {...trackXProps} />);
        } else {
            this.elementRefTrackX(null);
            this.elementRefThumbX(null);
        }

        const holderProps = {
            ...propsHolderProps,
            className: cnb(
                "ScrollbarsCustom",
                this.state.trackYVisible && "trackYVisible",
                this.state.trackXVisible && "trackXVisible",
                this.state.isRTL && "rtl",
                propsHolderProps.className
            ),
            style: styles.holder,
            children: holderChildren,
        } as IElementPropsWithElementRefAndRenderer;

        return renderDivWithRenderer(holderProps, this.elementRefHolder);
    }

    private updaterNative = (): boolean => {
        // just for future
        return true;
    };

    private updaterCustom = (bitmask: number, scrollValues: ScrollState): boolean => {
        const props = this.props;

        if (this.trackYElement) {
            if (
                this.thumbYElement &&
                (bitmask & (1 << 0) || bitmask & (1 << 2) || bitmask & (1 << 4) || bitmask & (1 << 6) || bitmask & (1 << 8))
            ) {
                if (scrollValues.scrollYPossible) {
                    const trackInnerSize = getInnerHeight(this.trackYElement);
                    const thumbSize = calcThumbSize(
                        scrollValues.scrollHeight,
                        scrollValues.clientHeight,
                        trackInnerSize,
                        props.minimalThumbYSize || props.minimalThumbSize,
                        props.maximalThumbYSize || props.maximalThumbSize
                    );
                    const thumbOffset = calcThumbOffset(
                        scrollValues.scrollHeight,
                        scrollValues.clientHeight,
                        trackInnerSize,
                        thumbSize,
                        scrollValues.scrollTop
                    );

                    this.thumbYElement.style.transform = `translateY(${thumbOffset}px)`;
                    this.thumbYElement.style.height = thumbSize + "px";
                    this.thumbYElement.style.display = "";
                } else {
                    this.thumbYElement.style.transform = "";
                    this.thumbYElement.style.height = "0px";
                    this.thumbYElement.style.display = "none";
                }
            }
        }

        if (this.trackXElement) {
            if (
                this.thumbXElement &&
                (bitmask & (1 << 1) ||
                    bitmask & (1 << 3) ||
                    bitmask & (1 << 5) ||
                    bitmask & (1 << 7) ||
                    bitmask & (1 << 9) ||
                    bitmask & (1 << 12))
            ) {
                if (scrollValues.scrollXPossible) {
                    const trackInnerSize = getInnerWidth(this.trackXElement);
                    const thumbSize = calcThumbSize(
                        scrollValues.scrollWidth,
                        scrollValues.clientWidth,
                        trackInnerSize,
                        props.minimalThumbXSize || props.minimalThumbSize,
                        props.maximalThumbXSize || props.maximalThumbSize
                    );
                    let thumbOffset = calcThumbOffset(
                        scrollValues.scrollWidth,
                        scrollValues.clientWidth,
                        trackInnerSize,
                        thumbSize,
                        scrollValues.scrollLeft
                    );

                    if (this.state.isRTL && shouldReverseRtlScroll()) {
                        thumbOffset += trackInnerSize - thumbSize;
                    }

                    this.thumbXElement.style.transform = `translateX(${thumbOffset}px)`;
                    this.thumbXElement.style.width = thumbSize + "px";
                    this.thumbXElement.style.display = "";
                } else {
                    this.thumbXElement.style.transform = "";
                    this.thumbXElement.style.width = "0px";
                    this.thumbXElement.style.display = "none";
                }
            }
        }

        return true;
    };

    private elementRefHolder = (ref: HTMLDivElement | null) => {
        this.holderElement = ref;
        isFun(this.props.elementRef) && this.props.elementRef!(ref);
    };

    private elementRefWrapper = (ref: HTMLDivElement | null) => {
        this.wrapperElement = ref;
        isFun(this.props.wrapperProps!.elementRef) && this.props.wrapperProps!.elementRef!(ref);
    };

    private elementRefScroller = (ref: HTMLDivElement | null) => {
        this.scrollerElement = ref;
        isFun(this.props.scrollerProps!.elementRef) && this.props.scrollerProps!.elementRef!(ref);
    };

    private elementRefContent = (ref: HTMLDivElement | null) => {
        this.contentElement = ref;
        isFun(this.props.contentProps!.elementRef) && this.props.contentProps!.elementRef!(ref);
    };

    private elementRefTrackX = (ref: HTMLDivElement | null) => {
        this.trackXElement = ref;
        isFun(this.props.trackXProps!.elementRef) && this.props.trackXProps!.elementRef!(ref);
    };

    private elementRefTrackY = (ref: HTMLDivElement | null) => {
        this.trackYElement = ref;
        isFun(this.props.trackYProps!.elementRef) && this.props.trackYProps!.elementRef!(ref);
    };

    private elementRefThumbX = (ref: HTMLDivElement | null) => {
        this.thumbXElement = ref;
        isFun(this.props.thumbXProps!.elementRef) && this.props.thumbXProps!.elementRef!(ref);
    };

    private elementRefThumbY = (ref: HTMLDivElement | null) => {
        this.thumbYElement = ref;
        isFun(this.props.thumbYProps!.elementRef) && this.props.thumbYProps!.elementRef!(ref);
    };

    private handleTrackXClick = (ev: MouseEvent, values: ScrollbarTrackClickParameters): void => {
        this.props.trackXProps!.onClick && this.props.trackXProps!.onClick!(ev, values);

        if (
            !this.scrollerElement ||
            !this.trackXElement ||
            !this.thumbXElement ||
            !this.scrollValues ||
            !this.scrollValues.scrollXPossible
        ) {
            return;
        }

        this._scrollDetection();

        const thumbSize = this.thumbXElement.clientWidth;
        const trackInnerSize = getInnerWidth(this.trackXElement);
        const thumbOffset =
            (this.scrollValues.isRTL && shouldReverseRtlScroll()
                ? values.offset + thumbSize / 2 - trackInnerSize
                : values.offset - thumbSize / 2) -
            //@ts-ignore
            (parseFloat(getComputedStyle(this.trackXElement).paddingLeft) || 0);

        let target = calcScrollForThumbOffset(
            this.scrollValues.scrollWidth,
            this.scrollValues.clientWidth,
            trackInnerSize,
            thumbSize,
            thumbOffset
        );

        if (this.props.trackClickBehavior === TRACK_CLICK_BEHAVIOR.STEP) {
            target = (this.scrollValues.isRTL ? this.scrollValues.scrollLeft > target : this.scrollValues.scrollLeft < target)
                ? this.scrollValues.scrollLeft + this.scrollValues.clientWidth
                : this.scrollValues.scrollLeft - this.scrollValues.clientWidth;
        }

        this.scrollerElement.scrollLeft = target;
    };

    private handleTrackYClick = (ev: MouseEvent, values: ScrollbarTrackClickParameters): void => {
        this.props.trackYProps!.onClick && this.props.trackYProps!.onClick!(ev, values);

        if (
            !this.scrollerElement ||
            !this.trackYElement ||
            !this.thumbYElement ||
            !this.scrollValues ||
            !this.scrollValues.scrollYPossible
        ) {
            return;
        }

        this._scrollDetection();

        const thumbSize = this.thumbYElement!.clientHeight;
        let target =
            calcScrollForThumbOffset(
                this.scrollValues.scrollHeight,
                this.scrollValues.clientHeight,
                getInnerHeight(this.trackYElement),
                thumbSize,
                values.offset - thumbSize / 2
            ) -
            //@ts-ignore
            (parseFloat(getComputedStyle(this.trackYElement).paddingTop) || 0);

        if (this.props.trackClickBehavior === TRACK_CLICK_BEHAVIOR.JUMP) {
            this.scrollerElement.scrollTop = target;
        } else {
            this.scrollerElement.scrollTop =
                this.scrollValues.scrollTop < target
                    ? this.scrollValues.scrollTop + this.scrollValues.clientHeight
                    : this.scrollValues.scrollTop - this.scrollValues.clientHeight;
        }
    };

    private handleTrackYMouseWheel = (ev: React.WheelEvent<HTMLDivElement>) => {
        const props = this.props;

        props.trackYProps && props.trackYProps.onWheel && props.trackYProps.onWheel(ev);

        if (props.disableTracksMousewheelScrolling || props.disableTrackYMousewheelScrolling) {
            return;
        }

        this._scrollDetection();

        if (!this.scrollerElement || this.scrollValues.scrollYBlocked) {
            return;
        }

        this.scrollTop += ev.deltaY;
    };

    private handleTrackXMouseWheel = (ev: React.WheelEvent<HTMLDivElement>) => {
        const props = this.props;

        props.trackXProps && props.trackXProps.onWheel && props.trackXProps.onWheel(ev);

        if (props.disableTracksMousewheelScrolling || props.disableTrackXMousewheelScrolling) {
            return;
        }

        this._scrollDetection();

        if (!this.scrollerElement || this.scrollValues.scrollXBlocked) {
            return;
        }

        this.scrollLeft += ev.deltaX;
    };

    private handleThumbXDrag = (data: DraggableData): void => {
        if (
            !this.trackXElement ||
            !this.thumbXElement ||
            !this.scrollerElement ||
            !this.scrollValues ||
            !this.scrollValues.scrollXPossible
        ) {
            return;
        }
        this._scrollDetection();

        const trackRect: ClientRect = this.trackXElement.getBoundingClientRect();
        const styles: CSSStyleDeclaration = getComputedStyle(this.trackXElement);
        const paddingLeft: number = parseFloat(styles.paddingLeft) || 0;
        const paddingRight: number = parseFloat(styles.paddingRight) || 0;
        const trackInnerSize = trackRect.width - paddingLeft - paddingRight;
        const thumbSize = this.thumbXElement.clientWidth;
        const offset =
            this.scrollValues.isRTL && shouldReverseRtlScroll()
                ? data.x + thumbSize - trackInnerSize + paddingLeft
                : data.lastX - paddingLeft;

        this.scrollerElement.scrollLeft = calcScrollForThumbOffset(
            this.scrollValues.scrollWidth,
            this.scrollValues.clientWidth,
            trackInnerSize,
            thumbSize,
            offset
        );

        if (this.props.thumbXProps?.onDrag) {
            this.props.thumbXProps.onDrag(data);
        }
    };

    private handleThumbXDragEnd = (data: DraggableData): void => {
        this.handleThumbXDrag(data);

        if (this.props.thumbXProps?.onDragEnd) {
            this.props.thumbXProps.onDragEnd(data);
        }
    };

    private handleThumbYDrag = (data: DraggableData): void => {
        if (
            !this.scrollerElement ||
            !this.trackYElement ||
            !this.thumbYElement ||
            !this.scrollValues ||
            !this.scrollValues.scrollYPossible
        ) {
            return;
        }
        this._scrollDetection();

        const trackRect: ClientRect = this.trackYElement.getBoundingClientRect();
        const styles: CSSStyleDeclaration = getComputedStyle(this.trackYElement);
        const paddingTop: number = parseFloat(styles.paddingTop) || 0;
        const paddingBottom: number = parseFloat(styles.paddingBottom) || 0;
        const trackInnerSize = trackRect.height - paddingTop - paddingBottom;
        const thumbSize = this.thumbYElement.clientHeight;
        const offset = data.y - paddingTop;

        this.scrollerElement.scrollTop = calcScrollForThumbOffset(
            this.scrollValues.scrollHeight,
            this.scrollValues.clientHeight,
            trackInnerSize,
            thumbSize,
            offset
        );

        if (this.props.thumbYProps?.onDrag) {
            this.props.thumbYProps.onDrag(data);
        }
    };

    private handleThumbYDragEnd = (data: DraggableData): void => {
        this.handleThumbYDrag(data);

        if (this.props.thumbYProps?.onDragEnd) {
            this.props.thumbYProps.onDragEnd(data);
        }
    };

    private handleScrollerScroll = () => {
        this._scrollDetection();
    };

    private _scrollDetection = () => {
        !this._scrollDetectionTO && this.eventEmitter.emit("scrollStart", this.getScrollState());

        this._scrollDetectionTO && global.window && global.window.clearTimeout(this._scrollDetectionTO);

        this._scrollDetectionTO = global.window
            ? global.window.setTimeout(this._scrollDetectionCallback, this.props.scrollDetectionThreshold || 0)
            : null;
    };

    private _scrollDetectionCallback = () => {
        this._scrollDetectionTO = null;
        this.eventEmitter.emit("scrollStop", this.getScrollState());
    };
}
