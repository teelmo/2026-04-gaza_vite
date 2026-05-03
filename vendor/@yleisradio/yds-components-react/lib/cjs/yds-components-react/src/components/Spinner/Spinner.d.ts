import type { HTMLAttributes } from 'react';
export declare const spinnerSizes: readonly ["sm", "md", "lg"];
export declare const spinnerVariants: readonly ["default", "highlight", "default-negative", "highlight-negative"];
interface colors {
    spinner?: string;
    background?: string;
}
export type SpinnerDSProps = {
    size?: (typeof spinnerSizes)[number];
    variant?: (typeof spinnerVariants)[number];
    hasBackground?: boolean;
    label?: string;
    colors?: colors;
};
export type SpinnerProps = SpinnerDSProps & HTMLAttributes<HTMLDivElement>;
export declare const Spinner: ({ size, variant, hasBackground, label, colors, ...other }: SpinnerProps) => JSX.Element;
export {};
