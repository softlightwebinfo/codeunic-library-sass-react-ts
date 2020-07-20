import React from "react";
import {TaskInfoLineComponent} from './TaskInfoLineComponent';

// @ts-ignore
export default {
    title: "Components|TaskInfoLine"
};

export const Default = () => <TaskInfoLineComponent
    date={"Sat 12, 2010"}
    user={"User 1"}
    subject={"added to hospital Administration"}
/>;
