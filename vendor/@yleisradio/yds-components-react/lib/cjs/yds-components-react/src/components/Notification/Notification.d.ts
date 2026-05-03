import type { HTMLAttributes } from 'react';
import React from 'react';
import { type NotificationLevel, type NotificationVariant } from '../../internal/components/BaseNotification/BaseNotification.js';
export interface NotificationDSProps {
    children?: React.ReactNode;
    title?: React.ReactNode;
    level?: NotificationLevel;
    variant?: NotificationVariant;
    hideIcon?: boolean;
    isMultiline?: boolean;
    onClose?: () => void;
    actions?: React.ReactNode;
}
export type NotificationProps = Omit<HTMLAttributes<HTMLDivElement>, keyof NotificationDSProps> & NotificationDSProps;
export declare const Notification: React.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, keyof NotificationDSProps> & NotificationDSProps & React.RefAttributes<HTMLDivElement>>;
