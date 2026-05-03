import type { HTMLAttributes } from 'react';
export declare const progressBarStatuses: readonly ["active", "success", "error"];
export declare const progressBarVariants: readonly ["determinate", "indeterminate"];
export type ProgressBarStatus = (typeof progressBarStatuses)[number];
export type ProgressBarVariant = (typeof progressBarVariants)[number];
export interface ProgressBarDSProps {
    value?: number;
    max?: number;
    variant?: ProgressBarVariant;
    status?: ProgressBarStatus;
    label?: string;
    description?: string;
}
export type ProgressBarProps = ProgressBarDSProps & HTMLAttributes<HTMLDivElement>;
export declare const ProgressBar: ({ value, max, variant, status, label, description, ...other }: ProgressBarProps) => JSX.Element;
