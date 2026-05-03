import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import type { TextInputDSProps } from '../TextInput/TextInput.js';
export type SearchInputDSProps = Omit<TextInputDSProps, 'icon'>;
export type SearchSubmitButtonDSProps = {
    isDisabled?: boolean;
    loading?: boolean;
};
export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & SearchInputDSProps;
export type SearchSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SearchSubmitButtonDSProps;
export declare const SearchSubmitButton: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & SearchSubmitButtonDSProps & import("react").RefAttributes<HTMLButtonElement>>;
/**
 * A generic search component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Uses submitButton prop for submit component, which can be filled with SearchSubmitButton from same package.
 *
 * @param {TextInputProps} props
 * @param {ReactNode} props.submitButton
 * */
export declare const SearchInput: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & SearchInputDSProps & import("react").RefAttributes<HTMLInputElement>>;
