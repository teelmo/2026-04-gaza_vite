import type { ReactNode, InputHTMLAttributes, SVGProps, ButtonHTMLAttributes } from 'react';
import type { FormElementLabelProps } from '../FormElementLabel/FormElementLabel.js';
export type InputIconProps = {
    componentFn: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    ariaLabel: string;
    onClick?: () => void;
    props?: ButtonHTMLAttributes<HTMLButtonElement>;
};
export type TextInputDSProps = {
    label: string;
    labelOptions?: FormElementLabelProps;
    id?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    description?: string;
    errorMessage?: string;
    autocomplete?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search';
    success?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    children?: ReactNode;
    icon?: InputIconProps;
    submitButton?: ReactNode;
    iconBefore?: InputIconProps;
    iconClear?: InputIconProps;
    showLoadingIndicator?: boolean;
};
export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & TextInputDSProps;
/**
 * A generic input component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`. Note that
 * the `props.icon.componentFn` is a function, not a component argument, i.e. `componentFn: Eye` instead of `componentFn: <Eye />`.
 *
 * @param {TextInputProps} props
 * @param {Object} props.icon
 * @param {Function} props.icon.componentFn - A render function of a component, instead of an already rendered component,
 *   i.e. `componentFn: Eye` instead of `componentFn: <Eye />`.
 * */
export declare const TextInput: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & TextInputDSProps & import("react").RefAttributes<HTMLInputElement>>;
