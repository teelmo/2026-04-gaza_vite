import { SvgProps } from '../../types.js';
export declare const LogoYleOnDark: ({ title, titleId, width, height, theme, colors, ...props }: SvgProps & {
    theme?: "default" | "light" | "dark";
    colors?: {
        LOGO_YLE_BACKGROUND_DEFAULT: string;
        LOGO_YLE_TEXT: string;
        LOGO_BACKGROUND: string;
        [key: string]: string;
    };
}) => JSX.Element;
