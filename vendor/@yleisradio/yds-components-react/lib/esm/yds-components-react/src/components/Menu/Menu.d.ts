import type { ReactNode, RefObject } from 'react';
export interface MenuProps {
    id: string;
    rootElement: HTMLElement | null;
    autofocus?: boolean;
    close?: () => void;
    buttonRef: RefObject<HTMLButtonElement>;
    navigateAway?: () => void;
    align?: 'left' | 'right';
    children: ReactNode;
}
export declare const Menu: import("react").ForwardRefExoticComponent<MenuProps & import("react").RefAttributes<HTMLUListElement>>;
