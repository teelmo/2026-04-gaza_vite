import type { ActionMenuProps, ActionMenuDSProps } from '../ActionMenu/ActionMenu.js';
export interface DropdownMenuOption<T> {
    text: string;
    value: T;
    type?: 'item';
}
export interface DropdownMenuSeparator {
    type: 'separator';
}
export type DropdownMenuDSProps<T> = Omit<ActionMenuDSProps, 'children' | 'text'> & {
    placeholder: string;
    value: T | undefined;
    onChange: (value: T) => void;
    options: (DropdownMenuOption<T> | DropdownMenuSeparator)[];
};
export type DropdownMenuProps<T> = DropdownMenuDSProps<T> & Omit<ActionMenuProps, 'children' | 'onClick' | 'onChange' | 'text'>;
export declare const isDropdownMenuOption: <T>(option: DropdownMenuOption<T> | DropdownMenuSeparator) => option is DropdownMenuOption<T>;
export declare const isDropdownMenuSeparator: <T>(option: DropdownMenuOption<T> | DropdownMenuSeparator) => option is DropdownMenuSeparator;
export declare const DropdownMenu: <T>({ placeholder, value, options, onChange, ...menuProps }: DropdownMenuProps<T>) => JSX.Element;
