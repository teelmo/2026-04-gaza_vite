import type { InputControlAlign } from '../../../components/componentTypes';
type CheckboxBaseProps = {
    $isError?: boolean;
    $variant?: 'primary' | 'secondary';
    $hideLabel: boolean;
    $controlAlign?: InputControlAlign;
};
export declare const CheckboxBase: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, CheckboxBaseProps>> & string;
export {};
