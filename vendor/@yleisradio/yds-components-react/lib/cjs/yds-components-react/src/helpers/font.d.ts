import { type DefaultTheme } from 'styled-components';
export declare enum FontStyleModifier {
    BOLD = "BOLD",
    BOLD_AC = "BOLD_AC",
    CONDENSED = "CONDENSED",
    CONDENSED_BOLD = "CONDENSED_BOLD",
    CONDENSED_HEAVY = "CONDENSED_HEAVY"
}
export declare enum FontProperty {
    FONT_SIZE = "FONT_SIZE",
    LINE_HEIGHT = "LINE_HEIGHT",
    FONT_WEIGHT = "FONT_WEIGHT",
    FONT_STYLE = "FONT_STYLE",
    FONT_FAMILY = "FONT_FAMILY",
    LETTER_SPACING = "LETTER_SPACING"
}
export type FontStyleProps = {
    theme: DefaultTheme;
    size?: Size;
    modifier?: FontStyleModifier;
    sizeMapping?: Partial<FontSizeMapping>;
};
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type FontSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL';
export type FontSizeMapping = {
    xs: FontSize;
    sm: FontSize;
    md: FontSize;
    lg: FontSize;
    xl: FontSize;
    '2xl': FontSize;
};
export declare function fontStylesAsObject({ theme, size, modifier, sizeMapping }: FontStyleProps): {
    fontSize: string | number;
    lineHeight: string | number;
    fontWeight: string | number;
    fontStyle: string;
    fontFamily: string;
    letterSpacing: string | number;
};
export declare function fontStyles({ theme, size, modifier, sizeMapping }: FontStyleProps): import("styled-components").RuleSet<object>;
