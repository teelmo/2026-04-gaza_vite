import type { TagSizeProp, TagVariantProp } from './Tag.js';
export declare const AnimatedTag: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $variant: TagVariantProp;
}>> & string;
export declare const TagBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "$variant"> & {
    $variant: TagVariantProp;
}, "ref"> & {
    ref?: import("react").Ref<HTMLSpanElement>;
}, {
    $size: TagSizeProp;
    $variant: TagVariantProp;
    $preventTransformUppercase: boolean;
    $animate: boolean;
}>> & string;
