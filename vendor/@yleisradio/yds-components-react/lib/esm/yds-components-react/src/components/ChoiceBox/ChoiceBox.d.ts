import React from 'react';
import type { ChoiceContainerStatus } from '../../internal/components/ChoiceContainer/ChoiceContainer.js';
import type { CheckboxProps } from '../Checkbox/Checkbox.js';
import type { ChoiceContainerSize, ChoiceHTMLInputAttributes, InputControlAlign } from '../componentTypes';
export interface ChoiceBoxDSProps {
    status?: ChoiceContainerStatus;
    controlAlign?: InputControlAlign;
    containerSize?: ChoiceContainerSize;
    icon?: React.ReactNode;
    content?: React.ReactNode;
}
export type CheckboxPropsNoError = Omit<CheckboxProps, 'error'>;
export type ChoiceBoxProps = ChoiceHTMLInputAttributes & ChoiceBoxDSProps & CheckboxPropsNoError;
export declare const ChoiceBox: React.ForwardRefExoticComponent<ChoiceHTMLInputAttributes & ChoiceBoxDSProps & CheckboxPropsNoError & React.RefAttributes<HTMLInputElement>>;
