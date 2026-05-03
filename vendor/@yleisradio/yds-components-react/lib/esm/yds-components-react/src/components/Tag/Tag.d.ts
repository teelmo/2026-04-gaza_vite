import type { HTMLAttributes } from 'react';
import React from 'react';
export type TagSizeProp = 'md' | 'sm';
export type TagVariant = 'default' | 'neutral' | 'live' | 'chat' | 'rightnow' | 'online' | 'opinion' | 'ylecorporate';
export type TagVariantProp = TagVariant;
export interface TagDSProps {
    size?: TagSizeProp;
    children?: React.ReactNode;
    variant?: TagVariantProp;
    preventTransformUppercase?: boolean;
    animate?: boolean;
}
export type TagProps = HTMLAttributes<HTMLSpanElement> & TagDSProps;
/**
 * A tag component with a text label with various presentation options.
 * Used to convey short keywords in noticeable manner.
 *
 * @param {TagProps} props
 * @param {TagSizeProp} [props.size='md'] - Size of the tag
 * */
export declare const Tag: ({ size, variant, preventTransformUppercase, animate, children, ...other }: TagProps) => JSX.Element;
