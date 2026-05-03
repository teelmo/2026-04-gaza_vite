import type { TagLinkVariant } from '../componentTypes.js';
interface TagLinkProps {
    $variant?: TagLinkVariant;
    $removePadding: boolean;
    $numberOfLines: number;
}
export declare const TagLinkBase: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TagLinkProps>> & string;
export declare const TagLinkBaseNonInteractive: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TagLinkProps>> & string;
export {};
