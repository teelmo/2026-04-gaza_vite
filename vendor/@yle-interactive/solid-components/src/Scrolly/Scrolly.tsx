import {
  Component,
  createEffect,
  For,
  createSignal,
  Show,
  onMount,
  onCleanup,
} from "solid-js";
import { computeClassName } from "../../helpers/uniqueClassName";
import VideoTag from "../FeatureMediaContainers/Video/VideoTag";
import PictureTag from "../FeatureMediaContainers/Picture/PictureTag";

import ScrollyTexts from "./ScrollyTexts/ScrollyTexts";
import { createWindowSize } from "@solid-primitives/resize-observer";
import { ImageType, VideoType } from "../Types/MediaTypes";
import style from "./Scrolly.module.css";
import * as cssStyle from "./Scrolly.module.css?inline";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

import {
  getMaxViewportHeight,
  isMobileDevice,
} from "../../helpers/browserDetection";

import {
  createVisibilityObserver,
  createViewportObserver,
} from "@solid-primitives/intersection-observer";
import snarkdown from "@yle-interactive/js-helperfunctions/yleSnarkdown";

export type ScrollyType = {
  scrollyitems: ScrollyItemImage[] | ScrollyItemVideo[];
  iswebcomponent?: boolean;
  customcss?: undefined;
  threshold?: number;
  cssmodule?: Object | boolean;
  preload?: boolean;
};

export type ScrollyItemImage = ImageType & {
  text: string;
  textboxstyle?: {
    backgroundcolor?: string;
    textcolor?: string;
    customcss?: string;
  };
};

export type ScrollyItemVideo = VideoType & {
  text: string;
  textboxstyle?: {
    backgroundcolor?: string;
    textcolor?: string;
    customcss?: string;
  };
};

const Scrolly: Component<ScrollyType> = (props) => {
  let ref: HTMLDivElement | undefined;

  //SAFARI BUG FIX FOR AUTOPLAY ISSUE INSIDE STICKY SCROLLY
  //MUST BE FIRST FALSE TO LOAD POSTER IMAGE
  const [tempPlayState, setTempPlayState] = createSignal(false);

  const cssModule = () => (props.cssmodule ? props.cssmodule : style);

  const size = createWindowSize();
  const customCss = (): string | undefined => props?.customcss;

  //for id creation
  const randomArray = Array.from({ length: props.scrollyitems.length }, () =>
    Math.random()
  );

  //give unique id for media + scrolly text for linking purposes
  const scrollyItemsId = (): string[] => {
    const ids = Array.from({ length: props.scrollyitems.length }, (d, i) =>
      computeClassName("scrollyText", randomArray[i])
    );
    return ids;
  };

  //deciced which videos to play and which to stop
  const [showIndex, setShowIndex] = createSignal(0);
  //stop all videos if scrolly not in viewport
  const [stopAllVideos, setStopAllVideos] = createSignal(true);
  //sniffer for scrollytextboxes if it is in viewport
  const [add] = createViewportObserver([], { threshold: 1 });
  //this is needed if url is empty and scrolly uses the same video in two instances after another
  const allowPlayList = props.scrollyitems.map((t, i) => {
    const playIndex = [i];
    //if not url then make list of boxes which show video tied to earlier scroll boxes
    if (props.scrollyitems[i]?.url === "") {
      const sliced = props.scrollyitems.slice(0, i);
      let lastIndex = sliced.findLastIndex((item) => item.url !== "");
      playIndex.push(lastIndex);
    }
    return playIndex;
  });

  const scrollyItems = () => props.scrollyitems;

  const scrollyItemsObserver = props.scrollyitems.map(
    (t: ImageType | VideoType, i) => {
      return {
        //same as scrollyitems props
        ...t,
      };
    }
  );

  const scrollyVideoThreshold = () => {
    return props.threshold || 0.1;
  };

  const observer = (el, entry) => {
    const boxData = entry()[0];
    const index = entry()[1];

    //boolean whether textbox is in viewport
    add(el, (ent) => {
      //if textbox in viewport then update signal
      ent.isIntersecting && setShowIndex(index);
    });
  };

  const visible = createVisibilityObserver({
    threshold: scrollyVideoThreshold(),
  })(() => ref);

  createEffect(() => {
    //stop videos if scrolly not visible
    setStopAllVideos(!visible());
  });

  //SAFARI BUG FIX FOR AUTOPLAY ISSUE INSIDE STICKY SCROLLY
  createEffect(() => {
    setTimeout(() => {
      setTempPlayState(true);
    }, 0);
    setTimeout(() => {
      setTempPlayState(false);
    }, 0);
  });

  // Track max viewport height reactively
  const [viewportHeight, setViewportHeight] = createSignal<number>(
    getMaxViewportHeight()
  );

  onMount(() => {
    // Listen for height changes (only matters on mobile)
    const handleHeightChange = (e: CustomEvent) => {
      setViewportHeight(e.detail.height);
    };

    window.addEventListener(
      "maxViewportHeightChange",
      handleHeightChange as EventListener
    );

    onCleanup(() => {
      window.removeEventListener(
        "maxViewportHeightChange",
        handleHeightChange as EventListener
      );
    });
  });

  return (
    <div class={cssModule().scrollyContainer + " scrollyContainer"}>
      <div
        ref={ref}
        style={{
          height: isMobileDevice()
            ? `${viewportHeight()}px` // Uses max height, grows dynamically
            : "100vh", // Desktop uses viewport units,
          top: "0px",
        }}
        class={style.scrollyMedias + " scrollyMedias"}
      >
        <For each={scrollyItems()}>
          {(item, index) => {
            const allowMediaShow = () => showIndex() >= index() || index() == 0;

            //tempPlayState is needed for ios bug fix for autoplay issue inside sticky scrolly
            const allowPlay = () =>
              (allowPlayList[showIndex()].includes(index()) &&
                !stopAllVideos()) ||
              //bug fix is only applied if preload is true
              (props.preload && tempPlayState()) ||
              tempPlayState();
            //console.log(allowPlay());

            return item.type == "video" ? (
              <VideoTag
                {...item}
                showmedia={allowMediaShow()}
                allowplay={allowPlay()}
                header={item.header || false}
                scrollyid={scrollyItemsId()[index()]}
                iswebcomponent={props?.iswebcomponent}
                nostyles={props?.nostyles}
              />
            ) : (
              <PictureTag
                {...item}
                showmedia={allowMediaShow()}
                scrollyid={scrollyItemsId()[index()]}
                iswebcomponent={props?.iswebcomponent}
                nostyles={props?.nostyles}
              />
            );
          }}
        </For>
      </div>
      <ScrollyTexts isMobile={isMobileDevice()}>
        <For each={scrollyItems()}>
          {(item, index) => {
            const text = (): string =>
              item.text !== undefined ? snarkdown(item.text) : "";
            return (
              <div
                use:observer={[item, index()]}
                id={scrollyItemsId()[index()]}
                style={{
                  "margin-top":
                    index() === 0
                      ? "0"
                      : isMobileDevice()
                      ? viewportHeight() + "px"
                      : "100lvh",
                  opacity: text().length > 0 ? "1" : "0",
                  ...(item?.textboxstyle?.backgroundcolor && {
                    "background-color": item?.textboxstyle.backgroundcolor,
                  }),
                  ...(item?.textboxstyle?.textcolor && {
                    color: item?.textboxstyle.textcolor,
                  }),
                }}
                class={"scrollyText " + cssModule().scrollyText}
                innerHTML={text()}
              />
            );
          }}
        </For>
      </ScrollyTexts>
      <Show when={props?.iswebcomponent}>
        <StylesForWebcomponent
          tag="Scrolly"
          customCss={customCss()}
          css={cssStyle}
        />
      </Show>
    </div>
  );
};

export default Scrolly;
