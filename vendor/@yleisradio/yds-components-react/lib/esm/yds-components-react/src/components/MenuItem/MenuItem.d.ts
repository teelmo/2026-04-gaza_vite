import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
export interface MenuItemDSProps {
    icon?: ReactElement | null;
    iconHighlight?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
    closeMenuOnClick?: boolean;
    onSelect?: () => void;
    role?: string;
    children: ReactNode;
    itemVariant?: 'default' | 'radio' | 'checkbox';
}
export type MenuItemProps = MenuItemDSProps & HTMLAttributes<HTMLLIElement>;
export declare const MenuItem: ({ icon, iconHighlight, isDisabled, isSelected, onSelect, closeMenuOnClick, role, children, onClick, onKeyDown, itemVariant, ...other }: MenuItemProps) => JSX.Element;
export declare const MenuSeparator: () => JSX.Element;
