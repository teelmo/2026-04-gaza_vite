import type { NotificationLevel, NotificationType, NotificationVariant } from './BaseNotification.js';
export declare const NotificationBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $level: NotificationLevel;
    $variant: NotificationVariant;
    $notificationType: NotificationType;
}>> & string;
export declare const NotificationGrid: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $notificationType: NotificationType;
    $hasIcon: boolean;
    $hasActions: boolean;
    $hasClose: boolean;
}>> & string;
export declare const NotificationTitle: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isMultiline?: boolean;
    $hasChildren?: boolean;
}>> & string;
export declare const NotificationContent: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const NotificationText: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isMultiline?: boolean;
}>> & string;
export declare const NotificationIcon: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $notificationType: NotificationType;
}>> & string;
export declare const NotificationCloseContainer: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $notificationType: NotificationType;
}>> & string;
export declare const NotificationCloseButton: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("../../../index.js").ButtonDSProps & import("../../../components/Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../../../index.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, {
    $level: NotificationLevel;
    $notificationVariant: NotificationVariant;
    $notificationType: NotificationType;
}>> & string & Omit<import("../../../components/Button/Button.js").ButtonComponent, keyof import("react").Component<any, {}, any>>;
export declare const NotificationActionsContainer: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $level: NotificationLevel;
    $notificationVariant: NotificationVariant;
    $notificationType?: NotificationType;
}>> & string;
