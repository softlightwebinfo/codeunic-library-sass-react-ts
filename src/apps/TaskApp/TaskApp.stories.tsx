import React from "react";
import {TaskApp} from './TaskApp';
import {randIncluded} from "../../utils";
import moment from "moment";
// @ts-ignore
export default {
    title: "Apps|Task"
};

export const Default = () => {
    return (
        <TaskApp
            onAssignUser={(id, callback) => {
                callback();
            }}
            onDeleteTrack={(id, callback) => {
                callback();
            }}
            onChangeTitle={(id, callback) => {
                callback();
            }}
            onChangeDescription={(id, value, callback) => {
                callback();
            }}
            tasks={[...new Array(20)].map((_, index) => ({
                id: index,
                check: !!randIncluded(0, 1),
                title: `Patient and Doctor video conferencing ${index}`,
                followers: [...new Array(randIncluded(0, 5))].map(() => ({
                    src: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    children: "Av",
                })),
                description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia",
                date: moment(`${randIncluded(2010, 2020)}-${randIncluded(1, 12)}-${randIncluded(1, 28)}`).format("YYYY-MM-DD"),
                info: [...new Array(randIncluded(0, 10))].map((_, index) => ({
                    user: `User ${index}`,
                    subject: `added to Hospital Administration ${index}`,
                    date: moment().format("ddd DD, YYYY"),
                })) || [],
                comments: [
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
                ],
            }))}
        />
    );
};
