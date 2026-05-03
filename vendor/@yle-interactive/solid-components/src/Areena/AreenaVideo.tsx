import { createSignal, type Component, Show, createEffect } from "solid-js";
import { AreenaVideoType } from "./AreenaType";
import ScriptLoader from "./ScriptLoader";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

//webcomponent unsupported because script embeds css styles to head - not inside shadow dom
// please use auto embed https://github.com/Yleisradio/player-static/wiki/Player-embed-instructions#auto-embed
const AreenaVideo: Component<AreenaVideoType> = (props) => {
  let instance;
  let el: HTMLDivElement | undefined;

  const [scriptLoaded, setScriptLoaded] = createSignal(
    //check if window.ylePlayer has been loaded
    typeof window?.ylePlayer === "object"
  );

  const visible = createVisibilityObserver({
    threshold: props.scrollthreshold || 0.5,
  })(() => el);

  const afterLoaded = () => {
    setScriptLoaded(true);
  };

  const mountContent = (e) => {
    if (window?.ylePlayer) {
      const { scrollthreshold, setInstance, ...others } = props;

      window.ylePlayer.render({ element: e, props: others }).then((player) => {
        if (props.setInstance) {
          props.setInstance(player);
        }
        instance = player;
      });
    }
  };

  createEffect(() => {
    if (visible() && instance && props?.scrollthreshold) {
      visible() && instance.play();
      !visible() && instance.pause();
    }
  });

  return (
    <>
      {/* Add script if doesn't exist on dom yet */}
      <ScriptLoader
        src="https://player-v2.yle.fi/embed.js"
        func={window?.ylePlayer}
        onReady={afterLoaded}
      />
      <div ref={el}>
        {/* if script is loaded and player found, then mount content */}
        <Show when={scriptLoaded()}>
          <div use:mountContent />
        </Show>
      </div>
    </>
  );
};

export default AreenaVideo;
