import type { ComponentType, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import type { ThemeProp } from '../../../components/componentTypes.js';
export type NotificationType = 'inline' | 'toast' | 'banner';
export type NotificationLevel = 'info' | 'success' | 'warning' | 'error';
export type NotificationVariant = 'primary' | 'secondary' | 'text';
export declare const getIcon: (level: NotificationLevel) => import("react/jsx-runtime").JSX.Element;
export interface BaseNotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    icon: ReactNode;
    closeIcon?: ReactNode;
    closeText?: string;
    closeButtonAccessibleText?: string;
    children?: ReactNode;
    title?: ReactNode;
    level?: NotificationLevel;
    variant?: NotificationVariant;
    hideIcon?: boolean;
    isMultiline?: boolean;
    onClose?: () => void;
    actions?: ReactNode;
    ydsTheme?: ThemeProp;
    notificationType: NotificationType;
    contentContainer?: ComponentType<PropsWithChildren>;
}
export declare const BaseNotification: React.ForwardRefExoticComponent<BaseNotificationProps & React.RefAttributes<HTMLDivElement>>;
