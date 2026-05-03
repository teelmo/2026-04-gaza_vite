import React from 'react';
import type { ChoiceContainerStatus } from '../../internal/components/ChoiceContainer/ChoiceContainer.js';
import type { RadioProps } from '../Radio/Radio.js';
import type { ChoiceContainerSize, ChoiceHTMLInputAttributes, InputControlAlign } from '../componentTypes';
export interface ChoiceButtonDSProps {
    status?: ChoiceContainerStatus;
    controlAlign?: InputControlAlign;
    containerSize?: ChoiceContainerSize;
    icon?: React.ReactNode;
    content?: React.ReactNode;
}
export type RadioPropsNoError = Omit<RadioProps, 'error'>;
export type ChoiceButtonProps = ChoiceHTMLInputAttributes & ChoiceButtonDSProps & RadioPropsNoError;
export declare const ChoiceButton: React.ForwardRefExoticComponent<ChoiceHTMLInputAttributes & ChoiceButtonDSProps & RadioPropsNoError & React.RefAttributes<HTMLInputElement>>;
