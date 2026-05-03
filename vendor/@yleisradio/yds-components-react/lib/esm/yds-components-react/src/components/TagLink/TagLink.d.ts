import type { AnchorHTMLAttributes } from 'react';
import React from 'react';
import type { TagLinkVariant } from '../componentTypes.js';
export interface TagLinkDSProps {
    variant?: TagLinkVariant;
    children?: React.ReactNode;
    removePadding?: boolean;
    numberOfLines?: number;
}
export type TagLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & TagLinkDSProps;
/**
 * An interactive keyword link that provides context for the title.
 * Tag links are used as a group at the end of the article.
 *
 * @param {TagLinkProps} props
 * */
export declare const TagLink: ({ variant, removePadding, children, numberOfLines, ...other }: TagLinkProps) => import("react/jsx-runtime").JSX.Element;
