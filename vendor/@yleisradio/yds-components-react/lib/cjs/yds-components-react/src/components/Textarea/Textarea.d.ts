import type { FormElementLabelDSProps } from '../FormElementLabel/FormElementLabel.js';
export interface TextareaDSProps {
    label: string;
    labelOptions?: FormElementLabelDSProps;
    id: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    description?: string;
    errorMessage?: string;
    success?: boolean;
    isDisabled?: boolean;
    characterLimit?: number;
}
export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'defaultValue'> & TextareaDSProps;
/**
 * A textarea component with a label and optional error and description messages.
 * extra params are passed to the underlying textarea component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 *
 * @param {TextareaProps} props
 * */
export declare const Textarea: import("react").ForwardRefExoticComponent<Omit<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, "defaultValue"> & TextareaDSProps & import("react").RefAttributes<HTMLTextAreaElement>>;
