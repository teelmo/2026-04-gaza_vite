import type { MenuSize } from '../componentTypes.js';
export interface MenuInterface {
    closeMenu?: () => void;
    menuSize: MenuSize;
}
export declare const MenuContext: import("react").Context<MenuInterface>;
