import type { HTMLAttributes, MouseEvent } from 'react';
export type TagFilterDSProps = {
    size: 'md' | 'lg';
    onClose: (e: MouseEvent<HTMLButtonElement>) => void;
    text: string;
    closeText?: string;
};
export type TagFilterProps = HTMLAttributes<HTMLDivElement> & TagFilterDSProps;
export declare const TagFilter: ({ size, onClose, text, closeText, ...rest }: TagFilterProps) => import("react/jsx-runtime").JSX.Element;
