import { type DefaultTheme } from 'styled-components';
import type { ButtonSize } from '../componentTypes.js';
export declare const StyledButtonGroup: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size: ButtonSize;
}>> & string;
export declare const ButtonGroupButtonBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, {
    $variant: "primary" | "secondary";
    $selected: boolean;
    $size: ButtonSize;
    theme: DefaultTheme;
}>> & string & Omit<import("../Button/Button.js").ButtonComponent, keyof import("react").Component<any, {}, any>>;
export declare const ButtonGroupButtonPrimary: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, "theme" | "$size" | "$variant" | "$selected"> & {
    $variant: "primary" | "secondary";
    $selected: boolean;
    $size: ButtonSize;
    theme: DefaultTheme;
}, "ref"> & {
    ref?: any;
}, {
    $selected: boolean;
    $isDisabled?: boolean;
}>> & string;
export declare const ButtonGroupButtonSecondary: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, "theme" | "$size" | "$variant" | "$selected"> & {
    $variant: "primary" | "secondary";
    $selected: boolean;
    $size: ButtonSize;
    theme: DefaultTheme;
}, "ref"> & {
    ref?: any;
}, {
    $selected: boolean;
    $isDisabled?: boolean;
}>> & string;
