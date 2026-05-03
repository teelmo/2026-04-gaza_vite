import type { ToastNotificationProps, ToastNotificationState } from './ToastProvider';
export declare const ToastContext: import("react").Context<{
    notifications: ToastNotificationState[];
    toast: (notification: ToastNotificationProps) => void;
}>;
export declare const useToast: () => (notification: ToastNotificationProps) => void;
