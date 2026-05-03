import { ImageType } from "../../Types/MediaTypes";
import MediaDescription from "../MediaDescription/MediaDescription";
import { computeClassName } from "../../../helpers/uniqueClassName";
import MediaCaption from "../MediaCaption/MediaCaption";
import { usePrefersDark } from "@solid-primitives/media";

import { Show, Component } from "solid-js";
import ScrollyStyle from "../../Scrolly/Scrolly.module.css";
import MediaStyle from "../../FeatureMediaContainers/MediaTag.module.css";
import * as cssStyle from "../../FeatureMediaContainers/MediaTag.module.css?inline";
import StylesForWebcomponent from "../../../helpers/StylesForWebcomponent";
import { createMediaQuery } from "@solid-primitives/media";

const PictureTag: Component<ImageType> = (props) => {
  const { header, draggable } = props;

  let imgRef;

  const descriptionId = computeClassName("mediaDescription", Math.random());
  const mediadescription = () =>
    props?.mediadescription !== undefined && {
      ...props.mediadescription,
      id: descriptionId,
    };

  const mobilemaxwidth =
    props.mobilemaxwidth !== undefined ? props.mobilemaxwidth : 550;

  const isMobile = createMediaQuery("(max-width: " + mobilemaxwidth + "px)");
  const prefersDark = usePrefersDark();

  //light mode image
  const url = (): string =>
    prefersDark() && props?.urldark ? props.urldark : props.url;
  const urlmobile = (): string =>
    prefersDark() && props?.urlmobiledark
      ? props.urlmobiledark
      : props.urlmobile;

  const textColor = (): string => props?.textcolor;
  const textColorDark = (): string => props?.textcolordark;

  const preload = (): boolean => (props.preload || header ? true : false);

  const showMedia = (): boolean => props.showmedia;
  const relative = (): boolean => props.relative ?? false;
  const textRelative = (): boolean => props.text ?? false;

  const mobileCss: string = `(orientation: portrait) and (max-width: ${mobilemaxwidth}px)`;
  const customCss = () => props?.customcss;

  //Absolute props
  const backgroundPosition = (): string =>
    props.backgroundposition || "50% 50%";
  const backgroundPositionMobile = (): string =>
    props.backgroundpositionmobile || "50% 50%";
  const backgroundColor = (): string => props.backgroundcolor || "none";

  //Relative props
  const maxWidth = (): string => props.maxwidth || "800px";

  //const [imageContainer, setImageContainer] = createSignal();
  //const renderedContainer = createDeferred(imageContainer);
  //const [showBlur, setShowBlur] = createSignal(true);

  //console.log(url() === "" || url() === undefined);
  return (
    <Show when={!(url() === "" || url() === undefined)}>
      <figure
        class={
          showMedia() && !relative()
            ? "showScrollyMedia " +
              " " +
              ScrollyStyle.showScrollyMedia +
              " " +
              MediaStyle.absoluteStyle
            : !showMedia() && !relative()
            ? "hideScrollyMedia " +
              " " +
              ScrollyStyle.hideScrollyMedia +
              " " +
              MediaStyle.absoluteStyle
            : MediaStyle.relativeStyle + " plusImageRelative"
        }
        //ref={(imageContainer) => setImageContainer(imageContainer)}
        style={relative() && { "max-width": maxWidth() }}
      >
        <Show when={props?.iswebcomponent}>
          <StylesForWebcomponent
            tag="Image"
            css={cssStyle}
            customCss={customCss()}
          />
        </Show>
        <picture
          style={{ height: "100%" }}
          classList={{
            pictureTag: true,
            pictureTagHeader: header,
            [MediaStyle.pictureTag]: true,
            [MediaStyle.pictureTagHeader]: header,
          }}
        >
          <source srcset={urlmobile()} media={mobileCss} />
          <img
            ref={imgRef}
            style={
              relative()
                ? { visibility: "visible" }
                : !relative() && !isMobile()
                ? {
                    "object-position": backgroundPosition(),
                    "background-color": backgroundColor(),
                    "object-fit":
                      backgroundColor() === "none" ? "cover" : "scale-down",
                  }
                : !relative() && isMobile()
                ? {
                    "object-position": backgroundPositionMobile(),
                    "background-color": backgroundColor(),
                    "object-fit":
                      backgroundColor() === "none" ? "cover" : "scale-down",
                  }
                : {}
            }
            {...(!draggable && { draggable: false })}
            src={url()}
            onLoad={() => {
              //imgRef.complete && setShowBlur(false);
            }}
            alt={props?.alt ? props.alt : ""}
            loading={preload() ? "eager" : "lazy"}
            //if description box
            {...(mediadescription() && {
              "aria-describedby": mediadescription().id,
            })}
            {...(props?.scrollyid && {
              "aria-labelledby": props.scrollyid,
            })}
          />
        </picture>
        <Show when={mediadescription() !== undefined}>
          <MediaDescription
            mediaDescription={mediadescription()}
            header={header}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
        <Show when={textRelative() && relative()}>
          <MediaCaption
            text={textRelative()}
            textColor={textColor()}
            textColorDark={textColorDark()}
            iswebcomponent={props?.iswebcomponent}
          />
        </Show>
      </figure>
    </Show>
  );
};
export default PictureTag;
