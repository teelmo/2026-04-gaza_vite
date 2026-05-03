import React from 'react';
import { DropdownMenuGroupDropdownMenuMultiSelect, DropdownMenuGroupDropdownMenuSingleSelect } from './DropdownMenuGroupDropdownMenu.js';
export interface DropdownMenuGroupDSProps {
    children: React.ReactNode;
    variant?: 'primary' | 'text';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    menuSize?: 'sm' | 'md';
}
export type DropdownMenuGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & DropdownMenuGroupDSProps;
export declare const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> & {
    DropdownMenu: typeof DropdownMenuGroupDropdownMenuSingleSelect;
    DropdownMenuMultiSelect: typeof DropdownMenuGroupDropdownMenuMultiSelect;
};
