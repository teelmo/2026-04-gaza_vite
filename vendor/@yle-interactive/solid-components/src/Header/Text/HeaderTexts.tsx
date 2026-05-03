import { type JSX, Show, Component, mergeProps } from "solid-js";
import Tag from "./Tag";
import Title from "./Title";
import Lead from "./Lead";
import Published from "./Published";
import { HeaderTextType } from "../HeaderType";
import { createPrefersDark } from "@solid-primitives/media";
import Authors from "./Authors";
import styles from "./HeaderTexts.module.css";
import * as cssStyle from "./HeaderTexts.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

const HeaderTexts: Component<HeaderTextType> = (props) => {
  const customCss = () => props?.customcss;
  const cssModule = () => (props.nostyles ? {} : styles);

  const prefersDark = createPrefersDark();
  const text = () =>
    props?.iswebcomponent || props?.text?.iswebcomponent
      ? { ...props.text, iswebcomponent: true }
      : { ...props.text, iswebcomponent: false };

  const maxWidth = (): JSX.CSSProperties =>
    props?.text?.maxwidth ? { "max-width": props?.text?.maxwidth } : {};

  const backgroundColor = (): JSX.CSSProperties =>
    prefersDark() && props?.text?.backgrounddark
      ? { "background-color": props?.text?.backgrounddark }
      : !prefersDark() && props?.text?.background
      ? { "background-color": props?.text?.background }
      : {};

  const textColor = (): JSX.CSSProperties =>
    prefersDark() && props?.text?.textcolordark
      ? { color: props?.text?.textcolordark }
      : !prefersDark() && props?.text?.textcolor
      ? { color: props.text.textcolor }
      : {};

  const marginTop = (): JSX.CSSProperties =>
    props?.text?.margintop ? { "margin-top": props?.text?.margintop } : {};

  return (
    <div
      style={{
        ...backgroundColor(),
        ...textColor(),
        ...marginTop(),
        ...maxWidth(),
      }}
      class={cssModule().headerTexts + " headerTexts"}
    >
      <Tag {...text()} nostyles={props?.nostyles} />
      <Title {...text()} nostyles={props?.nostyles} />
      <Lead {...text()} nostyles={props?.nostyles} />
      <Published {...text()} nostyles={props?.nostyles} />
      <Authors {...text()} nostyles={props?.nostyles} />
      <Show when={text().iswebcomponent}>
        <StylesForWebcomponent
          tag="HeaderText"
          customCss={customCss()}
          css={cssStyle}
        />
      </Show>
    </div>
  );
};

export default HeaderTexts;
