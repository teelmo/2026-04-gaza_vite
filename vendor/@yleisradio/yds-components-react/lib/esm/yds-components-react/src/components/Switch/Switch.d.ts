import type { InputHTMLAttributes } from 'react';
import type { FormElementLabelDSProps } from '../FormElementLabel/FormElementLabel.js';
export interface SwitchDSProps {
    isDisabled?: boolean;
    name: string;
    label: string;
    labelOptions?: FormElementLabelDSProps;
}
export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & SwitchDSProps;
/**
 * Switch (or Toggle, Toggle button, Toggle switch) is a on-off selection component with a label.
 * Extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled`. Label text and Switch are linked together through component `id`.
 * Switch should be used in situation when user changing the value causes instant and persistent change -
 * for on/off selections that need to be submitted separately, use `Checkbox` component.
 *
 * @param {SwitchProps} props
 * */
export declare const Switch: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & SwitchDSProps & import("react").RefAttributes<HTMLInputElement>>;
