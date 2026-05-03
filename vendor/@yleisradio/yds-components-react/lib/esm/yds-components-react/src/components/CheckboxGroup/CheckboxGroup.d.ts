import type { ReactNode } from 'react';
import React from 'react';
import { type FormGroupLabelProps } from '../FormGroupLabel/FormGroupLabel.js';
export interface CheckboxGroupDSProps {
    id: string;
    name: string;
    selectedValue: string[];
    errorMessage?: string;
    label?: string;
    labelOptions?: FormGroupLabelProps;
    description?: string;
    children: ReactNode;
    onValueChange: (value: string[]) => void;
}
export type CheckboxGroupProps = CheckboxGroupDSProps;
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupDSProps & React.RefAttributes<HTMLDivElement>>;
