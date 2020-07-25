import * as React from 'react';
import DashboardAppContext from "./DashboardAppContext";
import {IDashboardAppState} from "../apps/DashboardApp/DashboardApp.types";

export default function useDashboardAppContext() {
    return React.useContext(DashboardAppContext);
}
