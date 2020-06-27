import * as React from "react";
import {ITestComponentProps} from "./TestComponent.types";
import "./TestComponent.scss";

export const TestComponent: React.FC<ITestComponentProps> = ({theme}: ITestComponentProps) => (
    <div
        data-testid="test-component"
        className={`test-component test-component-${theme}`}
    >
        <h1 className="heading">I'm the test component</h1>
        <h2>Made with love by Harvey</h2>
    </div>
);
