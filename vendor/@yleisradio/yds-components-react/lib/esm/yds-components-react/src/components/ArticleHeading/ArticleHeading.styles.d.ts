import type { ArticleHeadingSize, ArticleHeadingWeight } from './ArticleHeading.js';
interface HeadingProps {
    $size: ArticleHeadingSize;
    $weight?: ArticleHeadingWeight;
    $noMargin?: boolean;
}
export declare const StyledArticleHading: import("styled-components/dist/types.js").IStyledComponentBase<"web", import("styled-components/dist/types.js").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps>> & string;
export {};
