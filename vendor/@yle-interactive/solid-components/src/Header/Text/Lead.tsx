import { type JSX, Show, Component } from "solid-js";
import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";
import styles from "./Lead.module.css";
import * as cssStyle from "./Lead.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";

import { HeaderTextObjectType } from "../HeaderType";
import { createPrefersDark } from "@solid-primitives/media";

const Lead: Component<HeaderTextObjectType> = (props) => {
  const prefersDark = createPrefersDark();
  const cssModule = () => (props.nostyles ? {} : styles);

  const leadText = () => (props.lead ? snarkdown(props.lead) : "");

  const textColor = (): JSX.CSSProperties =>
    prefersDark() && props?.textcolordark
      ? { color: props?.textcolordark }
      : !prefersDark() && props?.textcolor
      ? { color: props.textcolor }
      : {};

  return (
    <>
      <p
        style={{
          ...textColor(),
        }}
        class={cssModule().leadText + " leadText"}
        innerHTML={leadText()}
      >
        {leadText()}
      </p>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="HeaderLead" css={cssStyle} />
      </Show>
    </>
  );
};

export default Lead;
