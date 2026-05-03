import { type Component, For, mergeProps } from "solid-js";
import styles from "../../FeedbackForm.module.css";
import { type StateType, type SetStateType } from "../FormContent";

type ScoreQueryType = {
  scoretitle: string;
  scoretextrange: string[];
  scoreoptions: number[];
  state: [StateType, SetStateType];
  iswebcomponent?: boolean;
};

const ScoreQuery: Component<ScoreQueryType> = (props) => {
  props = mergeProps(
    {
      scoretitle: "Piditkö jutusta?",
      scoretextrange: ["En pitänyt", "Pidin"],
      scoreoptions: [1, 2, 3, 4, 5],
    },
    props
  );

  const [state, setState] = props.state;

  return (
    <fieldset class={"scoreQueryFieldset " + styles.scoreQueryFieldset}>
      <legend
        for="pisteytys"
        class={"scoreQueryHeader " + styles.scoreQueryHeader}
      >
        {props.scoretitle}
      </legend>
      <div
        id="pisteytys"
        class={"scoreQueryContainer " + styles.scoreQueryContainer}
      >
        <div class={"scoreQueryLegend " + styles.scoreQueryLegend}>
          <div role="presentation" />
          {props.scoretextrange[0]}
        </div>
        <For each={props.scoreoptions}>
          {(option, i) => {
            let ref;
            return (
              <div class={"scoreQueryOption " + styles.scoreQueryOption}>
                <label for={"pisteet" + option} class={"scoreQueryLabel "}>
                  {option}
                </label>
                <input
                  id={"pisteet" + option}
                  class={
                    state.score === option && styles.scoreQueryInputChecked
                  }
                  ref={ref}
                  type="radio"
                  value={option}
                  onClick={() => {
                    setState({ score: option });
                  }}
                />
              </div>
            );
          }}
        </For>
        <div class={"scoreQueryLegend " + styles.scoreQueryLegend}>
          <div role="presentation" /> {props.scoretextrange[1]}
        </div>
      </div>
    </fieldset>
  );
};

export default ScoreQuery;
