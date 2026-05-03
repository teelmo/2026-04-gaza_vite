import { darkTheme, typography, lightShadow } from "@yleisradio/yds-core";
import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";
import style from "../Scrolly.module.css";
import { createEffect } from "solid-js";
const dsFont = "OPEN_SANS_L_";

export default function SingleScrollyText(props) {
  const marginTop = (): string => props.marginTop;
  const textBoxStyle = (): [] => props.textBoxStyle;
  const showTextBox = (): boolean => props.showTextBox;
  const text = (): string =>
    props.text !== undefined ? snarkdown(props.text) : "";

  return (
    <>
      <div
        id={props.id}
        class={"scrollyText " + style.scrollyText}
        //ref={}
        //ref={props.ref}
        innerHTML={text()}
        style={{
          "background-color":
            textBoxStyle()?.backgroundcolor || darkTheme.BACKGROUND,
          color: textBoxStyle()?.textcolor || darkTheme.TEXT_DEFAULT,
          margin: marginTop() + " auto auto",
          opacity: showTextBox() ? 1 : 0,
          "font-size":
            textBoxStyle()?.fontsize || typography[dsFont + "FONT_SIZE"],
          "box-shadow": textBoxStyle()?.boxshadow || lightShadow.SHADOW_SM,
        }}
      />
    </>
  );
}
