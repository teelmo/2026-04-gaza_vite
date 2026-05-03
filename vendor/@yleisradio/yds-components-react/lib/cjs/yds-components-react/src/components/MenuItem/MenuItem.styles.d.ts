type MenuItemBaseProps = {
    $isDisabled: boolean;
    $isSelected?: boolean;
    $menuSize: 'md' | 'sm';
};
export declare const MenuItemBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, MenuItemBaseProps>> & string;
type IconWrapperProps = {
    $highlight?: boolean;
    $menuSize: 'md' | 'sm';
};
export declare const ContentWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const IconWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, IconWrapperProps>> & string;
export declare const CheckIconWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, IconWrapperProps>> & string;
export declare const MenuSeparatorBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>> & string;
export {};
