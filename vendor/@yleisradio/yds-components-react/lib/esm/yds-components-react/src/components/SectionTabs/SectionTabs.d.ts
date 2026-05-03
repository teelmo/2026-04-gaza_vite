import { type HTMLAttributes } from 'react';
import React from 'react';
export interface TabChangeEvent {
    previousTab: number;
    currentTab: number;
}
export interface SectionTabsDSProps {
    children: React.ReactNode;
    defaultTab?: number;
    tab?: number;
    onTabChange?: (event: TabChangeEvent) => void;
}
export type SectionTabsProps = HTMLAttributes<HTMLDivElement> & SectionTabsDSProps;
export declare const SectionTabs: React.FC<SectionTabsProps>;
