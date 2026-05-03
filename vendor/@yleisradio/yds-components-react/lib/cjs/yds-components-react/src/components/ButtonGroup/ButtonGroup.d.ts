import React from 'react';
import { ButtonGroupButton } from './ButtonGroupButton.js';
export interface ButtonGroupDSProps {
    children: React.ReactNode;
    multiple?: boolean;
    defaultValue?: string | string[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    variant?: 'primary' | 'secondary';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    showIcon?: boolean;
}
export type ButtonGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & ButtonGroupDSProps;
export declare const ButtonGroup: React.FC<ButtonGroupProps> & {
    Button: typeof ButtonGroupButton;
};
