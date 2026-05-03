import { SvgProps } from '../../types.js';
export declare const LogoArenanStripe: ({ title, titleId, width, height, theme, colors, ...props }: SvgProps & {
    theme?: "default" | "light" | "dark";
    colors?: {
        LOGO_BACKGROUND: string;
        LOGO_TEXT: string;
        LOGO_AREENA: string;
        [key: string]: string;
    };
}) => JSX.Element;
