import type { InputHTMLAttributes, ReactNode } from 'react';
import type { InputControlAlign } from '../componentTypes';
export interface CheckboxDSProps {
    isDisabled?: boolean;
    variant?: 'primary' | 'secondary';
    value?: string;
    name: string;
    label: ReactNode;
    error?: boolean;
    hideLabel?: boolean;
    useUnderlay?: boolean;
    controlAlign?: InputControlAlign;
}
export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & CheckboxDSProps;
export declare const Checkbox: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & CheckboxDSProps & import("react").RefAttributes<HTMLInputElement>>;
