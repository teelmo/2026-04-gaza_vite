import {
  type Component,
  Switch,
  Match,
  Show,
  createEffect,
  type JSX,
} from "solid-js";
import styles from "./Button.module.css";
import * as cssStyle from "./Button.module.css?inline";

import StylesForWebcomponent from "./../../helpers/StylesForWebcomponent";

const Dropdown = (props) => {
  const open = () => props.open || false;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        class={open() ? styles.open : styles.closed}
        d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
        clip-rule="evenodd"
        fill={props?.color || "#ffffff"}
      ></path>
    </svg>
  );
};

type ButtonType = {
  iswebcomponent?: boolean;
  clicked?: boolean;
  initialtext?: string;
  postclicktext?: string;
  type?: "primary" | "secondary" | "";
  fullbuttonwidth?: boolean;
  onClick?: () => void;
  size?: string;
  backgroundcolor?: string;
  bordercolor?: string;
  textcolor?: string;
  dropdown?: boolean;
};

const Button: Component<ButtonType> = (props) => {
  const clicked = () => Boolean(props.clicked) || false;
  const initialText = () => props.initialtext || "Sulje sisältö";
  const postClickText = () => props.postclicktext || "Avaa sisältö";
  const size = () => props.size || "md";
  const type = () => props.type || "primary";
  const dropdown = () => props.dropdown || false;

  const backgroundColor = (): JSX.CSSProperties =>
    props?.backgroundcolor ? { "background-color": props.backgroundcolor } : {};

  const borderColor = (): JSX.CSSProperties =>
    props?.backgroundcolor ? { "border-color": props.bordercolor } : {};

  const textColor = (): JSX.CSSProperties =>
    props?.textcolor ? { color: props.textcolor } : {};

  const handleButtonClick = (e) => {
    e.preventDefault();
    typeof props?.onClick === "function" && props.onClick();
  };

  return (
    <>
      <button
        part="interactiveDSbutton"
        class={styles[size()] + " " + styles.interactiveDSbutton}
        onClick={handleButtonClick}
        style={{
          ...borderColor(),
          ...backgroundColor(),
          ...textColor(),
        }}
      >
        <Switch>
          <Match when={clicked()}>{postClickText()}</Match>
          <Match when={!clicked()}>{initialText()}</Match>
        </Switch>
        <Show when={dropdown()}>
          <Dropdown type={type()} color={props?.textcolor} open={!clicked()} />
        </Show>
      </button>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent tag="Button" css={cssStyle} />
      </Show>
    </>
  );
};

export default Button;
