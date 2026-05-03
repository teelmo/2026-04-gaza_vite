import { SvgProps } from '../../types.js';
export declare const LogoArenan: ({ title, titleId, width, height, theme, colors, ...props }: SvgProps & {
    theme?: "default" | "light" | "dark";
    colors?: {
        LOGO_BACKGROUND: string;
        LOGO_TEXT: string;
        [key: string]: string;
    };
}) => JSX.Element;
