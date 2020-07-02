import React, {useState} from "react";
import {MenuComponent} from './MenuComponent';
import {ButtonComponent, ButtonIconComponent, IconComponent, ListComponent} from "../..";
import {MenuItemComponent} from "../..";
import {ListItemComponent} from "../..";
import {ListItemTextComponent} from "../..";

// @ts-ignore
export default {
    title: "Components|Menu"
};

export const Default = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickClose = () => setOpen(false);
    return (
        <>
            <MenuComponent
                trigger={
                    <ButtonComponent aria-haspopup="true" onClick={handleClick}>
                        Open Menu
                    </ButtonComponent>
                }
                id={"simple-menu"}
                keepMounted
                open={open}
                onClose={handleClickClose}
            >
                <MenuItemComponent onClick={handleClickClose}>Profile</MenuItemComponent>
                <MenuItemComponent onClick={handleClickClose}>My Account</MenuItemComponent>
                <MenuItemComponent onClick={handleClickClose}>Logout</MenuItemComponent>
            </MenuComponent>
        </>
    )
};

export const SelectedMenus = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const options = [
        'Show some love to Material-UI',
        'Show all notification content',
        'Hide sensitive notification content',
        'Hide all notification content',
    ];

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };
    return (
        <div style={{width: 300, backgroundColor: "#424242"}}>
            <ListComponent component="nav" ariaLabel="Device settings">
                <ListItemComponent
                    button
                    ariaHasPopup="true"
                    ariaControl="lock-menu"
                    ariaLabel="when device is locked"
                    onClick={handleClickListItem}
                >
                    <ListItemTextComponent primary="When device is locked" secondary={options[selectedIndex]}/>
                </ListItemComponent>
            </ListComponent>
            <MenuComponent
                keepMounted
                id={"lock-menu"}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItemComponent
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItemComponent>
                ))}
            </MenuComponent>
        </div>
    );
};

export const Composition = () => {
    const options = [
        'Show some love to Material-UI',
        'Show all notification content',
        'Hide sensitive notification content',
        'Hide all notification content',
    ];
    return (
        <MenuComponent
            keepMounted
            id={"lock-menu"}
            open={true}
            onClose={() => false}
        >
            {options.map((option, index) => (
                <MenuItemComponent
                    key={option}
                    onClick={() => false}
                >
                    {option}
                </MenuItemComponent>
            ))}
        </MenuComponent>
    )
};

export const Maxheight = () => {
    const options = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ];
    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ButtonIconComponent
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <IconComponent icon={"more_vert"}/>
            </ButtonIconComponent>
            <MenuComponent
                id="long-menu"
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItemComponent key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItemComponent>
                ))}
            </MenuComponent>
        </div>
    );
};
