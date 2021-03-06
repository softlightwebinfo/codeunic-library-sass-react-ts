import {AXIS_DIRECTION, IElementPropsWithElementRefAndRenderer} from "../../Interfaces/IElementPropsWithElementRefAndRenderer";

export interface ScrollbarTrackClickParameters {
    axis: AXIS_DIRECTION;
    offset: number;
}

export type ScrollbarTrackProps = IElementPropsWithElementRefAndRenderer & {
    axis: AXIS_DIRECTION;

    onClick?: (ev: MouseEvent, values: ScrollbarTrackClickParameters) => void;

    ref?: (ref: any | null) => void;
};
