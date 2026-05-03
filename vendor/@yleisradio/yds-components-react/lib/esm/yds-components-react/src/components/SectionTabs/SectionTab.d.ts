import type { HTMLAttributes } from 'react';
import React from 'react';
export interface SectionTabDSProps {
    children: React.ReactNode;
    index: number;
    disabled?: boolean;
    isActiveUncontrolled?: boolean;
    onClick?: (index: number) => void;
}
export type SectionTabProps = Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> & SectionTabDSProps;
export declare const SectionTab: React.FC<SectionTabProps>;
