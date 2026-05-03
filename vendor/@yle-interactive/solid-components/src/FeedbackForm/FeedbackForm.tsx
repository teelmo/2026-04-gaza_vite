import Button from "../Button/Button";
import getUserDeviceInfo from "./getDeviceinfo";
import {
  createSignal,
  Component,
  Show,
  mergeProps,
  createEffect,
} from "solid-js";
import FormContent from "./FormContent/FormContent";
import styles from "./FeedbackForm.module.css";
import * as cssStyle from "./FeedbackForm.module.css?inline";

import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

export type FeedbackFormType = {
  iswebcomponent?: boolean;
  customcss?: string;
  title?: string;
  maxwidth?: string;
  type?: string;
  hidedate?: Date; //when to hide the form
  initialbuttontext?: string;
  postclickbuttontext?: string;
  postclicktitle?: string;
  open?: boolean;
  projectname: string;
  buttontype?: "primary" | "secondary";
  buttontextcolor?: string;
  buttonbordercolor?: string;
  buttonbackgroundcolor?: string;
  additionalqueries?: string[];
  showscore?: boolean; //show article points 1-5
  scoretitle?: string;
  scoretextrange?: [string, string]; // defaults to ["En pitänyt", "Pidin"];
  scoreoptions?: number[];
};

const FeedbackForm: Component<FeedbackFormType> = (props) => {
  //console.log(props);
  props = mergeProps(
    {
      maxwidth: "620px",
      buttontype: "primary",
      initialbuttontext: "Avaa palautelomake",
      postclickbuttontext: "Lähetä",
      postclicktitle: "Kiitos palautteestasi",
      open: false,
    },
    props
  );

  //createEffect(() => console.log(props));

  const customCss = () => props?.customcss;

  const [title, setTitle] = createSignal(props?.title || "Anna palautetta");
  const open = (): boolean => props?.open || false;

  const dateNow = new Date();
  const hideDate = () =>
    (props?.hidedate !== undefined && new Date(props?.hidedate)) || undefined;

  const projectName = (): string => props?.projectname || "";

  const [showText, setShowText] = createSignal(open());

  const postData = async (state, additionalQueries) => {
    const data = {
      projectName: projectName(),
      content: {
        queryTexts: state.queryTexts.map((answer, i) => {
          return { text: additionalQueries[i], value: answer };
        }),
        score: state.score,
        device: getUserDeviceInfo(),
      },
    };

    const result = await fetch(
      "https://interactive.yle.fi/api/feedback/entry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data, null, 2),
      }
    );

    setShowText(false);
    result?.status == 200
      ? setTitle(props.postclicktitle)
      : setTitle("Jokin meni vikaan");
  };

  return (
    <Show
      when={
        hideDate() === undefined ||
        (hideDate()?.getTime() ?? 0) > dateNow.getTime()
      }
    >
      <div
        style={{ "max-width": props.maxwidth }}
        class={"feedbackContainer " + styles.feedbackForm}
      >
        <h2 class={"feedbackTitle " + styles.feedbackTitle}>{title()}</h2>
        <Show when={showText()}>
          <FormContent
            postData={postData}
            additionalqueries={props.additionalqueries}
            showscore={props.showscore}
            scoretitle={props.scoretitle}
            scoretextrange={props.scoretextrange}
            scoreoptions={props.scoreoptions}
            iswebcomponent={props?.iswebcomponent}
            postclickbuttontext={props.postclickbuttontext}
          />
        </Show>
        <Show when={!showText()}>
          <div
            class={
              "feedback-button-container " + styles.feedbackButtonContainer
            }
          >
            <Button
              iswebcomponent={props?.iswebcomponent}
              size="md"
              onClick={() => {
                setShowText(!showText());
                setTitle(props?.title || "Anna palautetta");
              }}
              dropdown={true}
              type={props.buttontype as "primary" | "secondary"}
              clicked={showText()}
              initialtext={props.initialbuttontext}
              //post click text is not shown because new button is rendered
              postclicktext={props.postclickbuttontext}
              backgroundcolor={props?.buttonbackgroundcolor}
              textcolor={props?.buttontextcolor}
              bordercolor={props?.buttonbordercolor}
            />
          </div>
        </Show>
      </div>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent
          tag="FeedbackForm"
          css={cssStyle}
          customCss={customCss()}
        />
      </Show>
    </Show>
  );
};

export default FeedbackForm;
