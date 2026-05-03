import type { InputHTMLAttributes, ReactNode } from 'react';
import type { InputControlAlign } from '../../../components/componentTypes';
export interface BaseCheckboxDSProps {
    isDisabled?: boolean;
    variant?: 'primary' | 'secondary';
    value?: string;
    name: string;
    label: ReactNode;
    error?: boolean;
    hideLabel?: boolean;
    useUnderlay?: boolean;
    controlAlign?: InputControlAlign;
    controlSize?: 'md' | 'sm';
}
export type BaseCheckboxProps = InputHTMLAttributes<HTMLInputElement> & BaseCheckboxDSProps;
export declare const BaseCheckbox: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & BaseCheckboxDSProps & import("react").RefAttributes<HTMLInputElement>>;
