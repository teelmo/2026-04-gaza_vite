import type { ComponentType, HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { type NotificationLevel } from '../../internal/components/BaseNotification/BaseNotification.js';
export interface BannerNotificationDSProps {
    children?: React.ReactNode;
    title?: React.ReactNode;
    level?: NotificationLevel;
    hideIcon?: boolean;
    onClose?: () => void;
    actions?: React.ReactNode;
    contentContainer?: ComponentType<PropsWithChildren>;
}
export type BannerNotificationProps = Omit<HTMLAttributes<HTMLDivElement>, keyof BannerNotificationDSProps> & BannerNotificationDSProps;
export declare const BannerNotification: React.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, keyof BannerNotificationDSProps> & BannerNotificationDSProps & React.RefAttributes<HTMLDivElement>>;
