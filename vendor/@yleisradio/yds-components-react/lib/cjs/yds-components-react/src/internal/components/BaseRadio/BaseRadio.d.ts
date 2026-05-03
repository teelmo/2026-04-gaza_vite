import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import type { InputControlAlign } from '../../../components/componentTypes.js';
export type VariantType = 'primary' | 'secondary';
export interface BaseRadioDSProps {
    variant?: VariantType;
    isDisabled?: boolean;
    error?: boolean;
    label: ReactNode;
    /** Provide a name if component isn't wrapped with RadioGroup */
    name?: string;
    hideLabel?: boolean;
    useUnderlay?: boolean;
    /** Provide onChange callback if component isn't wrapped with RadioGroup */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    controlAlign?: InputControlAlign;
    controlSize?: 'md' | 'sm';
}
export type BaseRadioProps = InputHTMLAttributes<HTMLInputElement> & BaseRadioDSProps;
export declare const BaseRadio: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & BaseRadioDSProps & import("react").RefAttributes<HTMLInputElement>>;
