export declare const DisableBodyScroll: import("react").NamedExoticComponent<import("styled-components").ExecutionProps & object>;
export declare const StyledModal: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, {
    $scrollBehavior: "content" | "body";
}>> & string;
export declare const ModalContent: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $scrollBehavior: "content" | "body";
}>> & string;
export declare const CloseButton: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("../Button/Button.js").ButtonDSProps & import("../Button/Button.js").AsProp<import("react").ElementType<any>> & Omit<Omit<any, "ref">, "as" | keyof import("../Button/Button.js").ButtonDSProps> & {
    ref?: any;
}, "ref"> & {
    ref?: any;
}, never>> & string & Omit<import("../Button/Button.js").ButtonComponent, keyof import("react").Component<any, {}, any>>;
