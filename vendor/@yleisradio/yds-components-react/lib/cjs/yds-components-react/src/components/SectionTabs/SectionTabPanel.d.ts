import type { HTMLAttributes } from 'react';
import React from 'react';
export interface SectionTabPanelDSProps {
    children: React.ReactNode;
    index: number;
}
export type SectionTabPanelProps = HTMLAttributes<HTMLDivElement> & SectionTabPanelDSProps;
export declare const SectionTabPanel: React.FC<SectionTabPanelProps>;
