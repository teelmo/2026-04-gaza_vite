import { HeaderTextObjectType } from "../HeaderType";
import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";
import styles from "./Title.module.css";
import * as cssStyle from "./Title.module.css?inline";
import { createPrefersDark } from "@solid-primitives/media";
import { type JSX, Show, Component } from "solid-js";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import { createMediaQuery } from "@solid-primitives/media";

const replaceAll = (string, search, replace) =>
  string?.split(search).join(replace);

const Title: Component<HeaderTextObjectType> = (props) => {
  const prefersDark = createPrefersDark();
  const cssModule = () => (props.nostyles ? {} : styles);

  const mobilemaxwidth =
    props.mobilemaxwidth !== undefined ? props.mobilemaxwidth : "550px";
  const isMobile = createMediaQuery("(max-width: " + mobilemaxwidth + ")");

  const titleFontSize = () => props.titlefontsize;
  const titleFontSizeMobile = () => props?.titlefontsizemobile;

  const textColor = () => props.textcolor;
  const textColorDark = () => props.textcolordark;
  const titleFontStyle = (): JSX.CSSProperties =>
    titleFontSize()
      ? {
          "font-size":
            isMobile() && titleFontSizeMobile()
              ? titleFontSizeMobile()
              : titleFontSize(),
        }
      : {};

  const textColorStyle = (): JSX.CSSProperties =>
    prefersDark() && textColorDark()
      ? { color: textColorDark() }
      : !prefersDark() && textColor()
      ? { color: textColor() }
      : {};

  const titleText = (): string => (props.title ? snarkdown(props.title) : "");

  return (
    <>
      <h1
        style={{ ...titleFontStyle(), ...textColorStyle() }}
        class={cssModule()["plusTitleH1"] + " plusTitleH1"}
        innerHTML={replaceAll(titleText(), "&shy;", "\u00AD")}
      />
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="HeaderTitle" css={cssStyle} />
      </Show>
    </>
  );
};

export default Title;
