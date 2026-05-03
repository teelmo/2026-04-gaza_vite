import type { HTMLAttributes } from 'react';
import React from 'react';
export type ArticleSemantic = 'h1' | 'h2' | 'h3' | 'h4';
export type ArticleHeadingSize = 'lg' | 'md' | 'sm' | 'xs';
export type ArticleHeadingWeight = 'black' | 'bold';
interface HeadingLGProps {
    size: 'lg';
    weight?: 'black';
}
interface HeadingMDProps {
    size: 'md';
    weight?: 'black';
}
interface HeadingSMProps {
    size: 'sm';
    weight: 'black' | 'bold';
}
interface HeadingXSProps {
    size: 'xs';
    weight: 'black' | 'bold';
}
interface CommonProps {
    as: ArticleSemantic;
    noMargin?: boolean;
}
export type ArticleHeadingDSProps = CommonProps & (HeadingLGProps | HeadingMDProps | HeadingSMProps | HeadingXSProps);
export type ArticleHeadingProps = HTMLAttributes<HTMLHeadingElement> & ArticleHeadingDSProps;
export declare const ArticleHeading: React.ForwardRefExoticComponent<ArticleHeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export {};
