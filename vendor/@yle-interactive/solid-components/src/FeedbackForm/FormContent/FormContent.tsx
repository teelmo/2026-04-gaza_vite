import { createStore, type SetStoreFunction } from "solid-js/store";
import Button from "../../Button/Button";
import ScoreQuery from "./ScoreQuery/ScoreQuery";
import TextQuery from "./TextQuery/TextQuery";
import styles from "../FeedbackForm.module.css";
import { Show, For, Component, mergeProps } from "solid-js";

type FormContentType = {
  iswebcomponent: boolean;
  postclickbuttontext: string;
  postData: (state: any, additionalQueries: any) => Promise<void>;
  additionalqueries?: string[];
  showscore?: boolean;
  scoretitle?: string;
  scoretextrange?: [string, string];
  scoreoptions?: number[];
};

export type StateType = {
  score: any;
  queryTexts: any[];
  isSent: boolean;
};

export type SetStateType = SetStoreFunction<StateType>;

const FormContent: Component<FormContentType> = (props) => {
  props = mergeProps(
    {
      showscore: true,
      additionalqueries: [
        "Missä onnistuimme?",
        "Mitä voisimme tehdä paremmin?",
      ],
    },
    props
  );

  const initialState = {
    score: null,
    queryTexts: new Array(props.additionalqueries.length).fill(""),
    isSent: false,
  };

  const [state, setState] = createStore<StateType>(initialState);

  return (
    <form class={"feedbackContentContainer " + styles.feedbackContentContainer}>
      <Show when={props.showscore}>
        <ScoreQuery
          scoretitle={props.scoretitle}
          scoretextrange={props.scoretextrange}
          scoreoptions={props.scoreoptions}
          state={[state, setState] as [StateType, SetStateType]}
          iswebcomponent={props?.iswebcomponent}
        />
      </Show>
      <Show when={props.additionalqueries.length > 0}>
        <For each={props.additionalqueries}>
          {(query, index) => (
            <TextQuery
              title={query}
              index={index()}
              state={[state, setState] as [StateType, SetStateType]}
              iswebcomponent={props?.iswebcomponent}
            />
          )}
        </For>
      </Show>
      <div
        style={{
          margin: "auto",
          display: "flex",
        }}
      >
        <Button
          size="md"
          onClick={() => {
            //post data function in parent
            props.postData(state, props.additionalqueries);
            //reset data in form
            setState(initialState);
          }}
          dropdown={false}
          iswebcomponent={props?.iswebcomponent}
          initialtext={props.postclickbuttontext}
        />
      </div>
    </form>
  );
};

export default FormContent;
