import * as React from 'react';
import TaskAppContext from "./TaskAppContext";

export default function useTaskAppContext() {
    return React.useContext(TaskAppContext);
}
