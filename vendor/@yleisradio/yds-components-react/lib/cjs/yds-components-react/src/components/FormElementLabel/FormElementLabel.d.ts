export interface FormElementLabelDSProps {
    label?: string;
    optionalLabel?: string;
    isHidden?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    hasMarginBottom?: boolean;
    children?: React.ReactNode;
}
export type FormElementLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & FormElementLabelDSProps;
export declare const FormElementLabel: ({ isDisabled, isHidden, isRequired, hasMarginBottom, label, optionalLabel, children, ...other }: FormElementLabelProps) => JSX.Element;
