import * as React from 'react';
import {IFormLayoutState} from "../layouts/FormLayout/FormLayout.types";

/**
 * @ignore - internal component.
 */
const FormLayoutContext = React.createContext<IFormLayoutState>({

});
FormLayoutContext.displayName = 'FormLayoutContext';
export default FormLayoutContext;

