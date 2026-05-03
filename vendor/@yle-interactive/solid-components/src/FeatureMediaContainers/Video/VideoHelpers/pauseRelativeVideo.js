import { onCleanup } from "solid-js"
import { videoRelativeCloseToViewport } from "../../../../helpers/viewportFunctions";

export const pauseRelativeVideo = (vidRef, [state, setState]) => {
    const scrollFunc = () => {
        setState(videoRelativeCloseToViewport(vidRef, .85))
    }
    window.addEventListener("scroll", scrollFunc, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", scrollFunc));
}