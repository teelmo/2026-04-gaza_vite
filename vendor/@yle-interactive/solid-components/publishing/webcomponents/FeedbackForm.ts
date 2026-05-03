import FeedbackForm, { FeedbackFormType } from "~/FeedbackForm/FeedbackForm";
import { customElement } from "solid-element";

const webComponent = customElement(
  "feedback-form",
  {
    iswebcomponent: true,
    customcss: undefined,
    title: undefined,
    maxwidth: undefined,
    type: undefined,
    hidedate: undefined,
    initialbuttontext: undefined,
    postclickbuttontext: undefined,
    postclicktitle: undefined,
    open: false,
    projectname: undefined,
    buttontype: undefined,
    buttontextcolor: undefined,
    buttonbordercolor: undefined,
    buttonbackgroundcolor: undefined,
    additionalqueries: undefined,
    showscore: true,
    scoretitle: undefined,
    scoretextrange: undefined, // defaults to ["En pitänyt", "Pidin"];
    scoreoptions: undefined,
  } as FeedbackFormType,
  FeedbackForm
);

export { webComponent };
