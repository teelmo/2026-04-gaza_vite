import { type HTMLAttributes } from 'react';
export type PageIndicatorContainerProps = HTMLAttributes<HTMLDivElement>;
export interface PageIndicatorDSProps {
    isActive?: boolean;
}
export type PageIndicatorProps = HTMLAttributes<HTMLButtonElement> & PageIndicatorDSProps;
export declare const PageIndicatorContainer: React.FC<PageIndicatorContainerProps>;
export declare const PageIndicator: React.FC<PageIndicatorProps>;
