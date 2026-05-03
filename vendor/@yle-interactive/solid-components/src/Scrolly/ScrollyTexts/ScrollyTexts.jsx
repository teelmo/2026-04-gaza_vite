import {
  createDeferred,
  createEffect,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";

//calculates text boxes height and adjusts whole scrolly height accordingly
const updateScrollyHeight = async (renderedRef, isMobile) => {
  //wait for the text boxes to be rendered (webcomponents require timeout)
  await new Promise((r) => setTimeout(r, 50));
  const offsetHeight = renderedRef?.offsetHeight;

  //does not have offsetHeight on initial render
  if (offsetHeight) {
    const isEdge = window.navigator.userAgent.indexOf("Edg") > -1;

    // Use 257vh for Edge and all mobile devices, 206vh for other desktop browsers
    const heightMultiplier = isEdge || isMobile ? 257 : 206;

    const newParentHeight = `calc(${heightMultiplier}vh + ${offsetHeight}px)`;

    renderedRef.parentNode.style.height = newParentHeight;
  }
};

export default function ScrollyTexts(props) {
  const [ref, setRef] = createSignal();

  //waits for ref to render - must use function (signal) as parameter
  const renderedRef = createDeferred(ref);

  createEffect(() => updateScrollyHeight(renderedRef(), props.isMobile));

  // On desktop: recalculate on window resize
  onMount(() => {
    if (!props.isMobile) {
      const handleResize = () => {
        updateScrollyHeight(renderedRef(), props.isMobile);
      };

      window.addEventListener("resize", handleResize);

      onCleanup(() => {
        window.removeEventListener("resize", handleResize);
      });
    }
  });

  return (
    <>
      <div
        ref={(ref) => {
          setRef(ref);
        }}
        class="textsContainer"
      >
        {props.children}
      </div>
    </>
  );
}
