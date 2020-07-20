import * as React from 'react';
import {ITaskAppState} from "../apps/TaskApp/TaskApp.types";

/**
 * @ignore - internal component.
 */
const TaskAppContext = React.createContext<ITaskAppState>({

});
TaskAppContext.displayName = 'TaskAppContext';
export default TaskAppContext;

