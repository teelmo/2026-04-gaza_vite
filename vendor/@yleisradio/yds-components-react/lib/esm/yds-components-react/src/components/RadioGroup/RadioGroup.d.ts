import type { ChangeEvent, ReactNode } from 'react';
import React from 'react';
import { type FormGroupLabelProps } from '../FormGroupLabel/FormGroupLabel.js';
import type { RadioGroupDirection } from '../componentTypes.js';
export interface RadioGroupProps {
    id: string;
    name: string;
    selectedValue?: string;
    errorMessage?: string;
    label?: string;
    labelOptions?: FormGroupLabelProps;
    description?: string;
    children: ReactNode;
    direction?: RadioGroupDirection;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export type RenderRadioGroupProps = {
    children: ReactNode;
    label: string;
    direction?: RadioGroupDirection;
};
export interface RadioGroupBaseProps extends RadioGroupProps {
    renderRadioGroup: (props: RenderRadioGroupProps) => JSX.Element;
}
export declare const getDescId: (id: string, description?: string) => string;
export declare const RadioGroupBase: ({ children, name, selectedValue: valueProp, id: idProp, errorMessage, label, labelOptions, description, direction, onChange, renderRadioGroup, ...rest }: RadioGroupBaseProps) => import("react/jsx-runtime").JSX.Element;
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
