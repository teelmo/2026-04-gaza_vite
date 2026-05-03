import type { SelectHTMLAttributes } from 'react';
import type { FormElementLabelDSProps } from '../FormElementLabel/FormElementLabel.js';
interface Option {
    value?: string;
    label: string;
    disabled?: boolean;
}
export interface SelectDSProps {
    label: string;
    labelOptions?: FormElementLabelDSProps;
    name: string;
    id: string;
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    description?: string;
    errorMessage?: string;
    success?: boolean;
    isDisabled?: boolean;
    items: Option[];
}
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & SelectDSProps;
/**
 * A native web select component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Dropdown option selection UI and behavior determined by browser.
 *
 * @param {SelectProps} props
 * */
export declare const Select: import("react").ForwardRefExoticComponent<SelectHTMLAttributes<HTMLSelectElement> & SelectDSProps & import("react").RefAttributes<HTMLSelectElement>>;
export {};
