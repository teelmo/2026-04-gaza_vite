import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import type { InputControlAlign } from '../componentTypes.js';
export type VariantType = 'primary' | 'secondary';
export interface RadioDSProps {
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
}
export type RadioProps = InputHTMLAttributes<HTMLInputElement> & RadioDSProps;
export declare const Radio: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & RadioDSProps & import("react").RefAttributes<HTMLInputElement>>;
