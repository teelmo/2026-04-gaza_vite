import { type NotificationLevel } from '../../internal/components/BaseNotification/BaseNotification.js';
export declare const ToastNotificationContainer: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ToastMotion: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $height: number;
}>> & string;
export declare const StyledNotification: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("../../internal/components/BaseNotification/BaseNotification.js").BaseNotificationProps & import("react").RefAttributes<HTMLDivElement>, {
    $hasTimer: boolean;
    $hasAction: boolean;
    $level: NotificationLevel;
}>> & string & Omit<import("react").ForwardRefExoticComponent<import("../../internal/components/BaseNotification/BaseNotification.js").BaseNotificationProps & import("react").RefAttributes<HTMLDivElement>>, keyof import("react").Component<any, {}, any>>;
export declare const ProgressContainer: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Progress: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $level: NotificationLevel;
}>> & string;
