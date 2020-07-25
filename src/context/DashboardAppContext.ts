import * as React from 'react';
import {IDashboardAppState} from "../apps/DashboardApp/DashboardApp.types";

/**
 * @ignore - internal component.
 */
const DashboardAppContext = React.createContext<IDashboardAppState>({miniSidebar: false});
DashboardAppContext.displayName = 'DashboardAppContext';
export default DashboardAppContext;

