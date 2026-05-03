import type { ButtonProps } from '../Button/Button.js';
export interface NavigationTabDSProps {
    removePadding?: boolean;
    onTabClick?: (id: string) => void;
    selected?: boolean;
    badge?: boolean;
    children?: React.ReactNode;
}
export type NavigationTabProps<T extends React.ElementType> = ButtonProps<T> & NavigationTabDSProps;
export declare const NavigationTab: <T extends React.ElementType>({ id, removePadding, onTabClick, selected, children, badge, ...rest }: NavigationTabProps<T>) => import("react/jsx-runtime").JSX.Element;
