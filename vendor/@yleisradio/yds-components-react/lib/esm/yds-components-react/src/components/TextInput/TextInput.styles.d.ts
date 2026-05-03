export declare const TextInputFieldset: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, never>> & string;
type StyledTextInputProps = {
    $error?: boolean;
    $success?: boolean;
    $hasIcon?: boolean;
    $hasIconBefore?: boolean;
    $hasIconAfter?: boolean;
};
export declare const StyledTextInput: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, StyledTextInputProps>> & string;
export declare const TextInputDescription: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export declare const TextInputErrorMessage: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>, "ref"> & {
    ref?: import("react").Ref<HTMLParagraphElement>;
}, never>> & string;
export declare const InputAndIconContainer: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledTextInputProps & {
    disabled: boolean;
}>> & string;
export declare const InputIconWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $location: "before" | "middle" | "clearSubmit" | "after";
    $isDisabled: boolean;
}>> & string;
export declare const LoadingIndicatorWrapper: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $isDisabled?: boolean;
}>> & string;
export declare const InputButtonIcon: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $location: "before" | "middle" | "clearSubmit" | "after";
    $isDisabled: boolean;
}>> & string;
export {};
