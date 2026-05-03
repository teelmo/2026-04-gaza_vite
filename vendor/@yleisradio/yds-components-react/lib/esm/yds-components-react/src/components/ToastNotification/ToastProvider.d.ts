import type { FC, ReactNode } from 'react';
import type { NotificationLevel } from '../../internal/components/BaseNotification/BaseNotification.js';
export type ToastNotificationProps = {
    icon?: ReactNode;
    level: NotificationLevel;
    duration?: number;
    hideCloseButton?: boolean;
    children?: ReactNode;
    hideIcon?: boolean;
};
export type ToastNotificationState = ToastNotificationProps & {
    onToastTransitionEnd?: () => void;
    onClose: () => void;
    isExiting: boolean;
    toastId: number;
};
export declare const ToastProvider: FC<{
    children?: ReactNode;
}>;
