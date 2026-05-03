import { mergeProps, createSignal, type Component } from "solid-js";
import { CommentsType } from "./CommentsType";
import ScriptLoader from "./ScriptLoader";

//webcomponent unsupported
// https://docs.developer.yle.fi/#/comments-api-plugin
// https://github.com/Yleisradio/yle-comments-plugin
const Comments: Component<CommentsType> = (props) => {
  const [scriptLoaded, setScriptLoaded] = createSignal(
    //check if window.ylePlayer has been loaded
    typeof window?.CommentsPlugin === "object"
  );

  props = mergeProps(
    {
      theme: "auto",
      language: "fi",
      env: "production",
      trackingAppName: "plus-comments",
      initiatingApp: "uutiset",
    },
    props
  );

  //console.log(props);

  const afterLoaded = () => {
    setScriptLoaded(true);
  };

  const mountContent = (e) => {
    if (window?.CommentsPlugin) {
      async function initializeTunnus() {
        window.CommentsPlugin.render(e, {
          ...props,
        });
      }
      initializeTunnus();
    }
  };

  return (
    <>
      {/* Add script if doesn't exist on dom yet */}
      <ScriptLoader
        src="https://comments.yle.fi/versions/latest/yle-comments-plugin.js"
        func={window?.CommentsPlugin}
        onReady={afterLoaded}
      />
      {/* if script is loaded and player found, then mount content */}
      <Show when={scriptLoaded()}>
        <div use:mountContent />
      </Show>
    </>
  );
};

export default Comments;
