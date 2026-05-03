import { type JSX, Show, Component } from "solid-js";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import styles from "./Tag.module.css";
import * as cssStyle from "./Tag.module.css?inline";
import { HeaderTextObjectType } from "../HeaderType";
import { createPrefersDark } from "@solid-primitives/media";

const Tag: Component<HeaderTextObjectType> = (props) => {
  const prefersDark = createPrefersDark();
  const cssModule = () => (props.nostyles ? {} : styles);

  const tagLink = () => props.taglink;
  const tag = () => props.tag;
  const textColor = () => props?.textcolor;
  const textColorDark = () => props?.textcolordark;
  const textColorStyle = (): JSX.CSSProperties =>
    prefersDark() && textColorDark()
      ? { color: textColorDark() }
      : !prefersDark() && textColor()
      ? { color: textColor() }
      : {};

  return (
    <a
      style={textColorStyle()}
      class={cssModule().tagLinkStyle + " tagLinkStyle"}
      href={tagLink()}
    >
      {tag()}
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="Tag" css={cssStyle} />
      </Show>
    </a>
  );
};

export default Tag;
