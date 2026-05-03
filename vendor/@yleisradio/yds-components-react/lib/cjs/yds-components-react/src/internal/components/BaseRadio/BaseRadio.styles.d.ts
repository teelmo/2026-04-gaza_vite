import type { InputControlAlign, RadioGroupDirection } from '../../../components/componentTypes.js';
type RadioBaseProps = {
    $error?: boolean;
    $variant?: 'primary' | 'secondary';
    $hideLabel: boolean;
    $controlAlign?: InputControlAlign;
    $direction?: RadioGroupDirection;
};
export declare const RadioLabelText: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $direction?: RadioGroupDirection;
    $controlSize: "md" | "sm";
}>> & string;
export declare const RadioBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, RadioBaseProps>> & string;
export {};
