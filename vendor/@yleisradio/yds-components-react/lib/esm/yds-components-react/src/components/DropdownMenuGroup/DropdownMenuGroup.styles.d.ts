import { type DefaultTheme } from 'styled-components';
import { type ButtonSize } from '../componentTypes.js';
export declare const StyledDropdownMenuGroup: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size: "xs" | "sm" | "md" | "lg";
}>> & string;
export declare const StyledButtonGroup: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const DropdownMenuGroupButtonBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, {
    $variant: "primary" | "text";
    $size: ButtonSize;
    theme: DefaultTheme;
}>> & string & Omit<import("../Button/Button.js").ButtonComponent, keyof import("react").Component<any, {}, any>>;
export declare const DropdownMenuGroupButtonPrimary: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, "theme" | "$size" | "$variant"> & {
    $variant: "primary" | "text";
    $size: ButtonSize;
    theme: DefaultTheme;
}, "ref"> & {
    ref?: any;
}, never>> & string;
export declare const DropdownMenuGroupButtonText: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, "theme" | "$size" | "$variant"> & {
    $variant: "primary" | "text";
    $size: ButtonSize;
    theme: DefaultTheme;
}, "ref"> & {
    ref?: any;
}, never>> & string;
export declare const StyledDropdownMenuGroupButtonIcon: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledBadge: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").HTMLAttributes<HTMLSpanElement> & import("../Badge/Badge.js").BadgeDSProps, {
    $isVisible: boolean;
}>> & string & Omit<({ size, color, variant, children, ...other }: import("../Badge/Badge.js").BadgeProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
