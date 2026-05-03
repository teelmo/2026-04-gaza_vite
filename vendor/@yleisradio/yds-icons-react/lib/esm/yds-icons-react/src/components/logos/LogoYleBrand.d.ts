import { SvgProps } from '../../types.js';
export declare const LogoYleBrand: ({ title, titleId, width, height, theme, colors, ...props }: SvgProps & {
    theme?: "default" | "light" | "dark";
    colors?: {
        LOGO_YLE_BACKGROUND_BRAND: string;
        LOGO_TEXT: string;
        [key: string]: string;
    };
}) => JSX.Element;
