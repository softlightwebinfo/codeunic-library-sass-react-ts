import React from "react";
import {GridListComponent} from './GridListComponent';
import {GridListTileComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|GridList"
};
const tileData = {
    img: "https://material-ui.com/static/images/grid-list/star.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
};
const tileDatas = [
    tileData,
    {...tileData, cols: 1},
    {...tileData, cols: 1},
    {...tileData, cols: 4},
    tileData,
    tileData,
    tileData,
    tileData,
];
export const Default = () => (
    <GridListComponent
        cellHeight={160}
        cols={4}
        style={{
            width: 500,
            //height: 450,
        }}
    >
        {tileDatas.map((tile, inde) => (
            <GridListTileComponent key={inde} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title}/>
            </GridListTileComponent>
        ))}
    </GridListComponent>
);
