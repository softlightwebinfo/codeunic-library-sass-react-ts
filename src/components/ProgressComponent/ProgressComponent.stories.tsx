import React from "react";
import {ProgressComponent} from './ProgressComponent';

// @ts-ignore
export default {
    title: "Components|Progress"
};

export const Default = () => <ProgressComponent value={40}/>;
export const Multiple = () => (
    <ProgressComponent
        data={[
            {value: 10, color: "success"},
            {value: 40, color: "primary"},
            {value: 20, color: "secondary"},
            {value: 5, color: "gray"},
            {value: 25, color: "success"},
        ]}
    />
);
