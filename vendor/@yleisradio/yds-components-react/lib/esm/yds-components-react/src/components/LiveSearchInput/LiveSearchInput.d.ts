import type { InputHTMLAttributes } from 'react';
import type { TextInputDSProps } from '../TextInput/TextInput';
export type LiveSearchInputDSProps = Omit<TextInputDSProps, 'icon' | 'submitButton'> & {
    hideIcon?: boolean;
    iconBeforeAriaLabel: string;
    iconClearAriaLabel: string;
};
export type LiveSearchInputProps = InputHTMLAttributes<HTMLInputElement> & LiveSearchInputDSProps;
export declare const LiveSearchInput: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & Omit<TextInputDSProps, "icon" | "submitButton"> & {
    hideIcon?: boolean;
    iconBeforeAriaLabel: string;
    iconClearAriaLabel: string;
} & import("react").RefAttributes<HTMLInputElement>>;
