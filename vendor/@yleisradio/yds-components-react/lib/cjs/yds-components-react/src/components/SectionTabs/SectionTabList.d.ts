import React, { type HTMLAttributes } from 'react';
export interface SectionTabListDSProps {
    children: React.ReactNode;
    /**
     * Controls whether transitions should be enabled.
     * - When undefined (default), transitions are disabled on initial render and enabled afterwards
     * - When true, transitions are always enabled
     * - When false, transitions are always disabled
     */
    enableTransitions?: boolean;
}
export type SectionTabListProps = HTMLAttributes<HTMLDivElement> & SectionTabListDSProps;
export declare const SectionTabList: React.FC<SectionTabListProps>;
