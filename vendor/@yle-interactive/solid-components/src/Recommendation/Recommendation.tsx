import { Show, For, Component } from "solid-js";

import styles from "./Recommendation.module.css";
import * as cssStyle from "./Recommendation.module.css?inline";

import { createPrefersDark } from "@solid-primitives/media";
import Time from "./Pieces/Time";
import Tag from "./Pieces/Tag";
import Header from "./Pieces/Header";
import Picture from "./Pieces/Picture";
import StylesForWebcomponent from "../../helpers/StylesForWebcomponent";

export type RecommendationType = {
  articles?: []; //deprecated
  data: articlesData[];
  customcss: string; //input css as text variable
  iswebcomponent?: boolean; //should add styles inside shadow root?
  textcolor: string; //text color in light mode
  textcolordark: string; //text color in dark mode
  title?: string;
  wideimages: boolean; //how to display recommendation block
  lang?: string; //defaults to fi, language of tag
};

type RecommendationListType = {
  wideimages: boolean;
  textColor: object | undefined;
  data: articlesData;
  lang?: string; //defaults to fi, language of tag
};

type articlesData = {
  subjects: subjects[];
  headline: headline;
  dateContentModified: Date;
  url: { full: string };
};

type headline = {
  full: string;
  image: {
    alt: string;
    id: string;
    backupurl?: string; //sometimes crops are not provided if the story is extremely old
    crops: {
      name: string;
      aspect: number;
      coordinates: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
    }[];
  };
};

type subjects = {
  id: string;
  title: {
    fi: string;
  };
};

const RecommendationList: Component<RecommendationListType> = (props) => {
  const textColor = () => props.textColor;
  const data: articlesData = props.data;
  const url = data?.url?.full;
  const wideimages = () => props.wideimages;
  const tagLink = (id, lang) => {
    return lang === "en"
      ? "https://yle.fi/news/" + id
      : lang === "se"
      ? "https://svenska.yle.fi/t/" + id
      : "https://yle.fi/t/" + id;
  };

  return (
    <>
      <div
        role="listitem"
        style={wideimages() ? { "flex-direction": "column-reverse" } : {}}
        class={
          styles.plusRecommendationListItem + " plusRecommendationListItem"
        }
      >
        <div
          class={
            styles.plusRecommendationListItemTexts +
            " plusRecommendationListItemTexts"
          }
        >
          <Tag
            tag={data?.subjects?.[0]?.title?.fi}
            tagLink={tagLink(data?.subjects?.[0]?.id, props?.lang)}
            textColor={textColor()}
          />
          <Header
            textColor={textColor()}
            title={data?.headline?.full}
            url={url}
          />
          <Time datePublished={data?.dateContentModified} />
        </div>
        <div
          class={
            styles.plusRecommendationListItemPicture +
            " plusRecommendationListItemPicture"
          }
          style={
            wideimages() ? { "max-width": "100%", "max-height": "initial" } : {}
          }
        >
          <a href={url}>
            <Picture image={data?.headline?.image} wideimages={wideimages()} />
          </a>
        </div>
      </div>
      <Show when={!props.wideimages}>
        <div aria-hidden="true">
          <hr />
        </div>
      </Show>
    </>
  );
};

const Recommendation: Component<RecommendationType> = (props) => {
  const prefersDark: () => boolean = createPrefersDark();

  const title = (): string => props.title || "Lue lisää";
  const customCss = (): string | undefined => props?.customcss;

  const textColor = (): object | undefined =>
    prefersDark() && props?.textcolordark
      ? { color: props.textcolordark }
      : !prefersDark() && props?.textcolor
      ? { color: props.textcolor }
      : undefined;
  return (
    <section
      style={textColor()}
      class={styles.plusRecommendationBlock + " plusRecommendationBlock"}
    >
      <Show when={props.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} customCss={customCss()} />
      </Show>
      <h2
        class={
          styles.plusRecommendationBlockHeader +
          " plusRecommendationBlockHeader"
        }
      >
        {title()}
      </h2>
      <div
        class={styles.plusRecommendationList + " plusRecommendationList"}
        role="list"
      >
        <For each={props?.data}>
          {(a, i) => {
            return (
              <RecommendationList
                wideimages={props.wideimages}
                textColor={textColor()}
                data={a}
                lang={props?.lang}
              />
            );
          }}
        </For>
      </div>
    </section>
  );
};

export default Recommendation;
