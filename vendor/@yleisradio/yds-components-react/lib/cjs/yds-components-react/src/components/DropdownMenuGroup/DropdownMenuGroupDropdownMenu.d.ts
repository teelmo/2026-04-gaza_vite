import { type DropdownMenuGroupButtonProps } from './DropdownMenuGroupButton.js';
import type { DropdownMenuOption, DropdownMenuSeparator } from '../DropdownMenu/DropdownMenu.js';
interface DropdownMenuGroupDropdownMenuInternalDSProps<T> {
    options?: (DropdownMenuOption<T> | DropdownMenuSeparator)[];
    onChange?: (value: T | T[], id: string) => void;
    onClose?: () => void;
    onOpen?: () => void;
    openMenuOnClick?: boolean;
    value?: T | T[];
    defaultValue?: T | T[];
    isMultiSelect?: boolean;
    alignMenu?: 'left' | 'right';
    menuItemVariant?: 'default' | 'radio' | 'checkbox';
}
type DropdownMenuGroupDropdownMenuInternalProps<T> = Omit<DropdownMenuGroupButtonProps<T>, 'onChange' | 'iconAfter' | 'isSelected' | 'defaultValue' | 'value'> & DropdownMenuGroupDropdownMenuInternalDSProps<T>;
export type DropdownMenuGroupDropdownMenuSingleSelectProps<T> = Omit<DropdownMenuGroupDropdownMenuInternalProps<T>, 'onChange' | 'value' | 'defaultValue' | 'isMultiSelect'> & {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, id: string) => void;
    menuItemVariant?: 'default' | 'radio';
};
export declare const DropdownMenuGroupDropdownMenuSingleSelect: <T>({ onChange, ...props }: DropdownMenuGroupDropdownMenuSingleSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export type DropdownMenuGroupDropdownMenuMultiSelectProps<T> = Omit<DropdownMenuGroupDropdownMenuInternalProps<T>, 'onChange' | 'value' | 'defaultValue' | 'isMultiSelect'> & {
    value?: T[];
    defaultValue?: T[];
    onChange?: (value: T[], id: string) => void;
    menuItemVariant?: 'default' | 'checkbox';
};
export declare const DropdownMenuGroupDropdownMenuMultiSelect: <T>({ onChange, ...props }: DropdownMenuGroupDropdownMenuMultiSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
