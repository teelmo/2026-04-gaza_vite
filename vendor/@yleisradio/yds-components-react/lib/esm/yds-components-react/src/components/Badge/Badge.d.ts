import type { HTMLAttributes } from 'react';
import React from 'react';
export type BadgeSizeProp = 'xl' | 'lg' | 'md' | 'sm';
export type BadgeColorProp = 'default' | 'negative' | 'highlight';
export type BadgeVariantProp = 'primary' | 'secondary';
export interface BadgeDSProps {
    size?: BadgeSizeProp;
    children?: React.ReactNode;
    color?: BadgeColorProp;
    variant?: BadgeVariantProp;
}
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & BadgeDSProps;
/**
 * A Badge component with a text label with various presentation options.
 * Used to convey short keywords in noticeable manner.
 *
 * @param {BadgeProps} props
 * @param {BadgeSizeProp} [props.size='md'] - Size of the Badge
 * @param {BadgeColorProp} [props.color='default'] - Color of the Badge
 * @param {BadgeVariantProp} [props.variant='primary'] - Visual presentation of the Badge
 * */
export declare const Badge: ({ size, color, variant, children, ...other }: BadgeProps) => JSX.Element;
