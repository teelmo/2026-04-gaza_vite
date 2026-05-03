import type { ButtonSize } from '../componentTypes.js';
export type ButtonBaseProps = {
    $fullWidth?: boolean;
    $size: ButtonSize;
    $iconOnly?: boolean;
    $isDisabled: boolean;
    $loading: boolean;
    $removePadding: boolean;
};
export type SizeProps = {
    paddingLeft: string;
    paddingRight: string;
    minHeight: string;
    minWidth: string;
    fontSize: string;
};
export declare const ButtonBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonBaseProps>> & string;
export declare const ButtonPrimary: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonBaseProps> & ButtonBaseProps, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, ButtonBaseProps>> & string;
export declare const ButtonSecondary: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonBaseProps> & ButtonBaseProps, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, ButtonBaseProps>> & string;
export declare const ButtonText: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ButtonBaseProps> & ButtonBaseProps, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, ButtonBaseProps>> & string;
export declare const LoadingIndicator: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "$size"> & {
    $size: ButtonSize;
}, "ref"> & {
    ref?: import("react").Ref<HTMLSpanElement>;
}, never>> & string;
export declare const IconWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "$size"> & {
    $size: ButtonSize;
}, "ref"> & {
    ref?: import("react").Ref<HTMLSpanElement>;
}, {
    $loading: boolean;
}>> & string;
export declare const TextWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ButtonBaseProps & {
    $variant: string;
    $loading: boolean;
    $hasIcon?: boolean;
    $hasIconAfter?: boolean;
}>> & string;
