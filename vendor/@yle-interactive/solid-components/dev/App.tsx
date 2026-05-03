import { createSignal, type Component, createEffect } from "solid-js";
import Header from "~/Header/Header";
import HeaderTexts from "~/Header/Text/HeaderTexts";
import PictureTag from "~/FeatureMediaContainers/Picture/PictureTag";
import VideoTag from "~/FeatureMediaContainers/Video/VideoTag";
import Scrolly from "~/Scrolly/Scrolly";
import AudioTag from "~/Audio/AudioTag";
import AudioWithSubtitles from "~/Audio/AudioWithSubtitles";
import FeedbackForm from "~/FeedbackForm/FeedbackForm";
import Recommendation from "~/Recommendation/Recommendation";
import Carousel from "~/Carousel/Carousel";

import {
  HeaderProps,
  HeaderTextsProps,
  AreenaVideoProps,
  PictureTagProps,
  VideoTagProps,
  ScrollyProps,
  AudioTagProps,
  AudioWithSubtitlesProps,
  FeedbackFormProps,
  RecommendationProps,
  CarouselProps,
  CommentsProps,
} from "../helpers/exampleProps";
import AreenaVideo from "../publishing/solid-js/AreenaVideo";
import Comments from "~/Comments/Comments";
import "../publishing/webcomponents/Header";
import "../publishing/webcomponents/HeaderTexts";
import "../publishing/webcomponents/PictureTag";
import "../publishing/webcomponents/VideoTag";
import "../publishing/webcomponents/Scrolly";
import "../publishing/webcomponents/AudioTag";
import "../publishing/webcomponents/AudioWithSubtitles";
import "../publishing/webcomponents/FeedbackForm";
import "../publishing/webcomponents/Recommendation";
import "../publishing/webcomponents/Carousel";

const App: Component = () => {
  console.log(import.meta.env);
  return (
    <div>
      <Header {...HeaderProps} />
      {/* <Scrolly
        nostyles={true}
        threshold={0.75}
        preload={true}
        scrollyitems={[
          {
            type: "video",
            alt: "Lisää videon kuvaus",
            backgroundposition: "50% 50%",
            audioicon: true,
            audioiconcolor: "white",
            progressbarcolor: "white",
            text: "",
            url: `https://plus.yle.fi/2025-05-ukraina_sotavammat/video/Kuvitukset_1_HB.mp4`,
            mediadescription: {
              content:
                "<div class='video-subtitles-right'>Joukkosidontapaikassa annetaan ensiapua haavoitteluneille sotilaille etulinjan läheisyydessä.</div>",
            },
          },
        ]}
      /> */}
      <Scrolly
        threshold={0.9}
        scrollyitems={[
          {
            preload: true,
            type: "video",
            backgroundcolor: "black",
            url: `https://plus.yle.fi/2025-10-jalkapallohuliganismi/video/toolo_kivi.mp4`,
            alt: "Sports bar Töölö",
            text: "Sports bar Töölö on täynnä väkeä, kun ikkunan läpi lentää kivi.",
          },
          {
            type: "video",
            url: "",
            alt: "Hyökkäys Töölön baariin",
            text: "Hämmästys vaihtuu nopeasti järkytykseksi. Ikkunan läpi lentää kohta toinen kivi. Baarin ulkopuolella parveilee joukko kasvomaskeihin ja mustiin vaatteisiin pukeutuneita miehiä.",
          },
          {
            type: "image",
            backgroundcolor: "black",
            url: `https://plus.yle.fi/2025-10-jalkapallohuliganismi/img/kivi.jpg`,
            alt: "Kivi baarin ikkunan läpi",
            text: "Baarin asiakkaat ovat Jokereiden kannattajia, joiden ilta on päättymässä karmealla tavalla.",
          },
          {
            type: "image",
            backgroundcolor: "black",
            url: "",
            alt: "Old Chiefs -jäsenet",
            text: "Kaksi asiakasta astuu ulos selvittämään mistä on kyse. Ulos astuvat miehet ovat Jokereiden ikäkkäämpien kannattajien yhdistyksen eli Old Chiefsin jäseniä. Heidän kimppuunsa käydään saman tien.",
          },
          {
            type: "video",
            backgroundcolor: "black",
            url: `https://plus.yle.fi/2025-10-jalkapallohuliganismi/video/HIFK_attack.mp4`,
            alt: "Hyökkäys",
            text: "Miehet kaadetaan kumoon. Toiselta heistä katkeaa kylkiluita. Toiselle käy huonommin.",
          },
          {
            type: "video",
            url: "",
            alt: "Väkivaltainen hyökkäys",
            text: "Hyökkääjät potkivat maassa makaavaa miestä useita kertoja. Kaikki potkut kohdistuvat päähän. Kun mies myöhemmin herää sairaalasta, häneltä on murtunut nenä, poskipäät, ja leuka.",
          },
          {
            type: "video",
            url: "",
            alt: "Uhrin kommentti",
            text: `
      <p>Hyökkääjät eivät koskaan kertoneet syytä teolleen, uhri kertoo Ylelle. Miehellä on siitä kuitenkin aavistus.</p>
      <p>"Luulen, että he ovat etsineet jotain toista ultras-porukkaa. Ja kun niitä ei löytynyt, niin sitten hyökkäys kohdistui Jokereiden kannattajiin."</p>
      `,
          },
        ]}
      />
      {/*
      <VideoTag
        url="https://plus.yle.fi/2025-05-ukraina_sotavammat/video/Ylilaakari1_HB.mp4"
        relative={true}
        preload={true}
        threshold={0.75}
        maxwidth="300px"
      /> */}
      <Scrolly {...ScrollyProps} />
      {/* <Scrolly
        threshold={0.75}
        scrollyitems={[
          {
            type: "video",
            alt: "Lisää videon kuvaus",
            backgroundposition: "50% 50%",
            audioicon: true,
            audioiconcolor: "white",
            progressbarcolor: "white",
            text: "",
            url: "https://yleerilliset-a.akamaihd.net/YleUutiset/Feature-Videot/2022/06/video_elementti5_uusi.mp4",
            mediadescription: {
              content:
                "<div class='video-subtitles-left'>Joukkosidontapaikassa annetaan ensiapua haavoitteluneille sotilaille etulinjan läheisyydessä.</div>",
            },
            allowplay: false,
          },
        ]}
      /> */}
      {/* 
      <Comments {...CommentsProps} />
      <Carousel {...CarouselProps} />
      <carousel-template {...CarouselProps}></carousel-template>
       */}
      SOLID:
      <Recommendation {...RecommendationProps} />
      WEBCOMPONENT:
      <recommendation-template
        {...RecommendationProps}
      ></recommendation-template>
      {/* 
      <AudioWithSubtitles {...AudioWithSubtitlesProps} />
      <audio-with-subtitles {...AudioWithSubtitlesProps}></audio-with-subtitles>
      <AudioTag {...AudioTagProps} />
      <audio-tag {...AudioTagProps}></audio-tag>
      <AreenaVideo {...AreenaVideoProps} />
      <header-template {...HeaderProps}></header-template>
      <HeaderTexts {...HeaderTextsProps} />
      <header-text-template {...HeaderTextsProps}></header-text-template>
      <PictureTag {...PictureTagProps} />
      <picture-tag {...PictureTagProps}></picture-tag>
      <AreenaVideo {...AreenaVideoProps} />
      <VideoTag {...VideoTagProps} />
      <video-tag {...VideoTagProps}></video-tag>
      <Scrolly {...ScrollyProps} />
      <scrolly-template {...ScrollyProps}></scrolly-template> */}
    </div>
  );
};

export default App;
