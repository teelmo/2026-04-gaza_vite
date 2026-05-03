import type { ReactNode } from 'react';
import type { ButtonProps } from '../Button/Button.js';
export interface ActionMenuDSProps {
    text: string;
    id: string;
    menuId: string;
    children: ReactNode;
    dropdown?: boolean;
    openMenuOnClick?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    menuSize?: 'md' | 'sm';
    alignMenu?: 'left' | 'right';
}
export type ActionMenuProps = ActionMenuDSProps & Omit<ButtonProps<'button'>, 'as' | 'onClick'>;
export declare const ActionMenu: ({ text, id, menuId, children, variant, dropdown, fullWidth, openMenuOnClick, onClose, onOpen, menuSize, alignMenu, ...buttonProps }: ActionMenuProps) => JSX.Element;
