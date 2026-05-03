import { type HTMLAttributes } from 'react';
export interface NavigationTabListDSProps {
    align?: 'start' | 'center';
    removePadding?: boolean;
    onTabClick?: (id: string) => void;
    children: React.ReactNode;
}
export type NavigationTabListProps = HTMLAttributes<HTMLDivElement> & NavigationTabListDSProps;
export declare const NavigationTabList: ({ align, removePadding, onTabClick, children, ...rest }: NavigationTabListProps) => import("react/jsx-runtime").JSX.Element;
