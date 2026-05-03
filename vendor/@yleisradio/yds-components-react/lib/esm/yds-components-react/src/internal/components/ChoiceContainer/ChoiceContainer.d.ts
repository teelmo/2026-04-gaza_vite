import React from 'react';
import type { InputControlAlign, ChoiceContainerSize } from '../../../components/componentTypes';
export type ChoiceContainerStatus = 'success' | 'error';
export interface ChoiceContainerProps {
    status?: ChoiceContainerStatus;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    containerSize: ChoiceContainerSize;
    controlAlign: InputControlAlign;
    children: React.ReactNode;
}
export declare const ChoiceContainer: ({ status, icon, content, containerSize, controlAlign, children, }: ChoiceContainerProps) => JSX.Element;
