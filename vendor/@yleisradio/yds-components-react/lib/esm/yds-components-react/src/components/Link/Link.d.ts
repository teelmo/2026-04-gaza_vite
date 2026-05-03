import type { AnchorHTMLAttributes } from 'react';
import React from 'react';
export interface LinkDSProps {
    /**
     * If true, displays an external link icon next to the text
     */
    isExternal?: boolean;
    /**
     * Set external link icon before or after the link text
     */
    externalLinkIconPosition?: 'after' | 'before';
    /**
     * Children content of the link
     */
    children?: React.ReactNode;
}
export type LinkProps = LinkDSProps & AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * A styled link component that provides consistent styling for anchor tags.
 *
 * @param {LinkProps} props
 */
export declare const Link: React.ForwardRefExoticComponent<LinkDSProps & AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
