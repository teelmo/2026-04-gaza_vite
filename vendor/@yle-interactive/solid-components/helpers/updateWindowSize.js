import { onCleanup } from "solid-js"

export const updateWindowSize = ([state, setState]) => {
    const resizeFunc = () => {
        setState({
            windowSize: {
                ...state.windowSize,
                width: window.innerWidth,
                height: window.innerHeight,
                orientation: 
                    window.innerHeight > window.innerWidth 
                        ? 'portrait' 
                        : 'landscape'         
            }});
    }
    resizeFunc()
    window.addEventListener("resize", resizeFunc, { passive: true });
    onCleanup(() => window.removeEventListener("resize", resizeFunc));
}
