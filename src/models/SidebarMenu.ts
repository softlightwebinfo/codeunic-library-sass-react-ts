export class SidebarMenuItemHeader implements ISidebarMenu {
    public name: string;
    public icon: string;

    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
    }
}

export class SidebarMenuItemTitle implements ISidebarMenu {
    public name: string;
    public onClick: () => any;
    public icon: string;

    constructor(name: string, onClick) {
        this.name = name;
        this.onClick = onClick;
    }
}

export interface ISidebarMenu {
    name: string;
    icon: string;
}

export class SidebarMenuItemGroup implements ISidebarMenu {
    icon: string;
    name: string;

    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
    }
}

export type TOnline = "online" | "away" | "offline";

export class SidebarMenuItemChat implements ISidebarMenu {
    icon: string;
    name: string;
    online: TOnline;
    number: number;
    active: boolean;

    constructor(name: string, icon: string, online: TOnline, number: number, active: boolean = false) {
        this.name = name;
        this.icon = icon;
        this.online = online;
        this.number = number;
        this.active = active;
    }
}
