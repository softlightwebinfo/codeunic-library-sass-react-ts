import React from "react";
import {TaskCommentsLayout} from './TaskCommentsLayout';

// @ts-ignore
export default {
    title: "Layouts|AvatarList"
};

export const Default = () => (
    <TaskCommentsLayout
        data={[
            {
                id: 1,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                name: "name",
                date: "2020-10-20 10:20",
                description: "'m just looking around. Will you tell me something about yourself?",
                files: [
                    {name: "project_document.avi"},
                    {name: "video_conferencing.psd"},
                    {name: "landing_page.psd"},
                ],
                images: [
                    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                ]
            },
            {
                id: 2,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                name: "name",
                date: "2020-10-20 10:20",
                description: "'m just looking around. Will you tell me something about yourself?",
                files: [],
                images: []
            },
            {
                id: 3,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                name: "name",
                date: "2020-10-20 10:20",
                description: "",
                files: [
                    {name: "project_document.avi"},
                ],
                images: []
            },
            {
                id: 4,
                avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                name: "name",
                date: "2020-10-20 10:20",
                description: "",
                files: [],
                images: [
                    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                ]
            }
        ]}
    />
);
