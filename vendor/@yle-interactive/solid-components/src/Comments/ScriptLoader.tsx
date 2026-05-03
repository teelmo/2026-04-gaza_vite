import { type Component, onCleanup, onMount } from "solid-js";

const ScriptLoader: Component<{
  src: string;
  func: Function;
  onReady: Function;
}> = (props) => {
  onMount(() => {
    if (typeof props.func === "undefined") {
      const script = document.createElement("script");
      script.src = props.src;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        props.onReady();
        //console.log("Script loaded successfully.");
        // Initialization or usage of ylePlayer can go here
      };

      script.onerror = () => {
        console.error("Failed to load the script.");
      };

      onCleanup(() => {
        document.body.removeChild(script);
      });
    }
  });
  return null;
};

export default ScriptLoader;
