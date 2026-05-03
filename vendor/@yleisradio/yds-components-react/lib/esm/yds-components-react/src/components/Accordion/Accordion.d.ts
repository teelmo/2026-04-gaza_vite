import React, { type HTMLAttributes } from 'react';
import { type AccordionSize, type Padding } from '../componentTypes.js';
export interface AccordionContentDSProps {
    padding?: Padding;
}
export interface AccordionItemDSProps {
    id?: string;
    variant?: 'default' | 'noBorder';
    title: React.ReactNode;
    size?: AccordionSize;
    defaultOpen?: boolean;
    isDisabled?: boolean;
    contentProps?: AccordionContentDSProps;
    children?: React.ReactNode;
    removePadding?: boolean;
    iconAlign?: 'start' | 'end';
}
export interface AccordionDSProps {
    children?: React.ReactNode;
}
export type AccordionProps = HTMLAttributes<HTMLDivElement> & AccordionDSProps;
export type AccordionItemProps = Omit<HTMLAttributes<HTMLSpanElement>, 'title'> & AccordionItemDSProps;
export declare const AccordionItem: ({ id, variant, size, title, defaultOpen, isDisabled, children, contentProps, removePadding, iconAlign, ...other }: AccordionItemProps) => JSX.Element;
export declare const Accordion: ({ children, ...other }: AccordionProps) => JSX.Element;
