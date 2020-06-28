import React from "react";
import {TestComponent} from './TestComponent';

// @ts-ignore
export default {
    title: "Components|Test"
};

export const Primary = () => <TestComponent theme="primary"/>;

export const Secondary = () => <TestComponent theme="secondary"/>;
