import type { ButtonProps } from '../Button/Button.js';
export interface DropdownMenuGroupButtonDSProps<T> {
    id: string;
    children?: React.ReactNode;
    isSelected: boolean;
    displayValue?: T | T[];
}
export type DropdownMenuGroupButtonProps<T> = ButtonProps<'button'> & DropdownMenuGroupButtonDSProps<T>;
export declare const DropdownMenuGroupButton: import("react").ForwardRefExoticComponent<Omit<DropdownMenuGroupButtonProps<unknown>, "ref"> & import("react").RefAttributes<unknown>>;
