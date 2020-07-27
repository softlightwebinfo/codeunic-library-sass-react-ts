import * as React from 'react';
import FormLayoutContext from "./FormLayoutContext";

export default function useFormLayout() {
    return React.useContext(FormLayoutContext);
}
