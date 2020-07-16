import {DraggableCore, DraggableData, DraggableEvent} from "react-draggable";

import {AXIS_DIRECTION, IElementPropsWithElementRefAndRenderer} from "../../Interfaces/IElementPropsWithElementRefAndRenderer";

export type DragCallbackData = Pick<DraggableData, Exclude<keyof DraggableData, "node">>;

export type ScrollbarThumbProps = IElementPropsWithElementRefAndRenderer & {
    axis: AXIS_DIRECTION;

    onDrag?: (data: DragCallbackData) => void;
    onDragStart?: (data: DragCallbackData) => void;
    onDragEnd?: (data: DragCallbackData) => void;

    ref?: (ref: any | null) => void;
};
