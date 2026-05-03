import { Component } from "solid-js";
import styles from "../../FeedbackForm.module.css";
import { type StateType, type SetStateType } from "../FormContent";

type TextQueryType = {
  title: string;
  state: [StateType, SetStateType];
  index: number;
  iswebcomponent?: boolean;
};

const TextQuery: Component<TextQueryType> = (props) => {
  const [state, setState] = props.state;

  return (
    <div class={styles.feedbackAdditionalQuery}>
      <label for={"tekstikenttä" + props?.index}>{props?.title}</label>
      <textarea
        id={"tekstikenttä" + props?.index}
        class={styles.feedbackTextarea}
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          setState("queryTexts", props?.index, value);
        }}
      ></textarea>
    </div>
  );
};

export default TextQuery;
