import {IChildren} from "../../Interfaces/IChildren";
import {ReactElement} from "react";
import {IProp} from "../../Interfaces/IProp";
import {IElementPropsWithElementRefAndRenderer, ScrollState, TRACK_CLICK_BEHAVIOR} from "../../Interfaces/IElementPropsWithElementRefAndRenderer";
import {ScrollbarTrackProps} from "./ScrollbarTrackComponent.types";
import {ScrollbarThumbProps} from "./ScrollbarThumbComponent.types";

export interface IScrollbarComponentProps extends IProp {
    children: IChildren | ReactElement[];
}

export type ScrollbarProps = IElementPropsWithElementRefAndRenderer & {
    createContext?: boolean;

    rtl?: boolean;

    momentum?: boolean;
    native?: boolean;
    mobileNative?: boolean;

    noScrollX?: boolean;
    noScrollY?: boolean;
    noScroll?: boolean;

    permanentTrackX?: boolean;
    permanentTrackY?: boolean;
    permanentTracks?: boolean;

    removeTracksWhenNotUsed?: boolean;
    removeTrackYWhenNotUsed?: boolean;
    removeTrackXWhenNotUsed?: boolean;

    minimalThumbSize?: number;
    maximalThumbSize?: number;
    minimalThumbXSize?: number;
    maximalThumbXSize?: number;
    minimalThumbYSize?: number;
    maximalThumbYSize?: number;

    scrollbarWidth?: number;
    fallbackScrollbarWidth?: number;

    scrollTop?: number;
    scrollLeft?: number;
    scrollDetectionThreshold?: number;

    translateContentSizesToHolder?: boolean;
    translateContentSizeYToHolder?: boolean;
    translateContentSizeXToHolder?: boolean;

    noDefaultStyles?: boolean;

    disableTracksMousewheelScrolling?: boolean;
    disableTrackXMousewheelScrolling?: boolean;
    disableTrackYMousewheelScrolling?: boolean;

    disableTracksWidthCompensation?: boolean;
    disableTrackXWidthCompensation?: boolean;
    disableTrackYWidthCompensation?: boolean;

    trackClickBehavior?: TRACK_CLICK_BEHAVIOR;

    wrapperProps?: IElementPropsWithElementRefAndRenderer;
    scrollerProps?: IElementPropsWithElementRefAndRenderer;
    contentProps?: IElementPropsWithElementRefAndRenderer;

    trackXProps?: Pick<ScrollbarTrackProps, Exclude<keyof ScrollbarTrackProps, "axis">>;
    trackYProps?: Pick<ScrollbarTrackProps, Exclude<keyof ScrollbarTrackProps, "axis">>;

    thumbXProps?: Pick<ScrollbarThumbProps, Exclude<keyof ScrollbarThumbProps, "axis">>;
    thumbYProps?: Pick<ScrollbarThumbProps, Exclude<keyof ScrollbarThumbProps, "axis">>;

    onUpdate?: (scrollValues: ScrollState, prevScrollState: ScrollState) => void;
    onScroll?: (scrollValues: ScrollState, prevScrollState: ScrollState) => void;
    onScrollStart?: (scrollValues: ScrollState) => void;
    onScrollStop?: (scrollValues: ScrollState) => void;
};

export type ScrollbarState = {
    trackXVisible: boolean;
    trackYVisible: boolean;
    isRTL?: boolean;
};
