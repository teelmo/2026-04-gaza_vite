import { ReactNode, SVGProps } from 'react';
export interface SvgProps extends SVGProps<SVGSVGElement> {
    title?: string;
    titleId?: string;
    children?: ReactNode;
}
