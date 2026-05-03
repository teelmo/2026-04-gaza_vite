export interface FormGroupLabelDSProps {
    label?: string;
    optionalLabel?: string;
    isHidden?: boolean;
    isRequired?: boolean;
    children?: React.ReactNode;
}
export type FormGroupLabelProps = React.HTMLAttributes<HTMLLegendElement> & FormGroupLabelDSProps;
export declare const FormGroupLabel: ({ isHidden, isRequired, label, optionalLabel, children, ...other }: FormGroupLabelProps) => JSX.Element;
