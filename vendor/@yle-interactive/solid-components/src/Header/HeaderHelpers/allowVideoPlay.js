import { onCleanup } from "solid-js";
import { isElementVisibleInViewport } from "../../../helpers/viewportFunctions";

export const resolveAllowHeaderPlay = (setAllowPlay, ref) => {

    const scrollFunc = () => {
        const vidRef = ref.querySelector("video")
        if(isElementVisibleInViewport(vidRef)) {
            setAllowPlay(true)
        } else if(!isElementVisibleInViewport(vidRef)) {
            setAllowPlay(false)
        }
    }
    window.addEventListener("scroll", scrollFunc, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", scrollFunc));
}

