import React from "react";
import {FollowerComponent} from './FollowerComponent';
import {randIncluded} from "../../utils";

// @ts-ignore
export default {
    title: "Components|Follower"
};

export const Default = () => (
    <FollowerComponent
        onClick={() => console.log()}
        label={"Followers"}
        avatars={[...new Array(randIncluded(0, 5))].map(() => ({
            src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
            children: "Av",
        }))}
    />
);
