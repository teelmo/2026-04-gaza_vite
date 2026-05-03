import { AreenaVideoType } from "../src/Areena/AreenaType";
const content = `
Lorem ipsum 2 dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.
## Viro jee
![Kuvateksti: Mietojen ja keskivahvojen opioidilääkkeiden myynti (kpl-määrä). Lähde: Kela](https://plus.yle.fi/2022-05-laakkeiden_haittavaikutukset/img/panacod1.png)
Lorem [ipsum](https://www.yl_e.f_i?feajiie&feauu) dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.
- here's
- a
- list
Lorem ipsum [dolor](https://google.com?__/3&faeni&) sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.
Lorem ipsum [dolor](https://yle.fi/uutiset) sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.
`;

export const AreenaVideoProps: AreenaVideoType = {
  id: "1-67674048",
  autoplay: false,
  autoFocus: false,
  autoMute: true,
};

export const CommentsProps = {
  topicId: "74-20086795",
};

export const HeaderProps = {
  media: {
    type: "video",
    url: "//plus.yle.fi/2025-10-jalkapallohuliganismi/video/Paavideo_huligaanit.mp4",
    backgroundposition: "50% 50%",
    backgroundpositionmobile: "10% 50%",
    alt: "TEKSTI",
    text: "Juu juu.",
    mediadescription: {
      content: "Kuvaaja nönnööö",

      backgroundcolor: "green",
    },
  },
  text: {
    title: "Kaksi&shy;sanainen otsikko",
    tag: "Hyvinvointi",
    taglink: "https://www.yle.fi",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.",
    time: "24.2.2021 10:18 • Päivitetty 24.2.2021 13:21",
    mobilemaxwidth: "550px", //Optional
    backgroundposition: "10% 50%", //Optional
    backgroundpositionmobile: "100% 50%", //Optional
    mediadescription: "lol",
    maxwidth: "800px", //Optional
    titlefontsize: "3.3em", //Optional
    titlefontsizemobile: "5em", //Optional
    background: "orange", //Optional
    //backgrounddark: "pink", //Optional
    textcolor: "green", //Optional
    //textcolordark: "blue", //Optional
    authors:
      "Tekijät: Erkka Mikkonen, Benjamin Suomela, Joel Kanerva, Matti Kurkela",
  },
};

export const HeaderTextsProps = {
  text: {
    title: "Kaksi&shy;sanainen otsikko",
    tag: "Hyvinvointi",
    taglink: "https://www.yle.fi",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu arcu ac porta. Nulla facilisi. Praesent ac ex suscipit, elementum arcu quis, euismod orci. In ultricies vel nibh a laoreet.",
    time: "24.2.2021 10:18 • Päivitetty 24.2.2021 13:21",
    mobilemaxwidth: "550px", //Optional
    backgroundposition: "10% 50%", //Optional
    backgroundpositionmobile: "100% 50%", //Optional
    mediadescription: "lol",
    maxwidth: "800px", //Optional
    titlefontsize: "3.3em", //Optional
    titlefontsizemobile: "5em", //Optional
    background: "orange", //Optional
    //backgrounddark: "pink", //Optional
    textcolor: "green", //Optional
    //textcolordark: "blue", //Optional
    authors:
      "Tekijät: Erkka Mikkonen, Benjamin Suomela, Joel Kanerva, Matti Kurkela",
  },
};

export const ScrollyProps = {
  scrollyitems: [
    {
      type: "image",
      url: "https://images.cdn.yle.fi/image/upload/w_5477,h_3080,x_0,y_536,q_auto:eco,f_auto,fl_lossy,c_crop/w_1920,h_1080,dpr_1/39-119987465521d6252bc8",
      backgroundposition: "50% 50%",
      backgroundpositionmobile: "10% 50%",
      alt: "TEKSTI",
      text: "Juu juu.",
      mediadescription: {
        content: "Kuvaaja nönnööö",

        backgroundcolor: "green",
      },
    },
    {
      type: "image",
      text: "lorem",
    },
    {
      type: "image",
      backgroundposition: "50% 50%",
      backgroundpositionmobile: "10% 50%",
      alt: "TEKSTI",
      text: "Juuri ennen kuin Venäjä hyökkäsi, Dmytro teki ystävänsä Fedir Tkatšovin kanssa yhteistä biisiä.",
      url: "https://images.cdn.yle.fi/image/upload/w_3345,h_1882,x_0,y_0,f_auto,fl_lossy,q_auto:best,c_crop/w_1920,h_1080,dpr_1/39-83537560fe6e3d6c47a.jpg",
      mediadescription: {
        content: "Kuvaaja nönnööö",

        backgroundcolor: "green",
      },
    },
    {
      type: "video",
      alt: "Aistit ylitöissä",
      backgroundposition: "50% 50%",
      backgroundpositionmobile: "10% 50%",
      audioicon: true,
      audioiconcolor: "white",
      progressbarcolor: "white",
      text: "Juuri ennen kuin Venäjä hyökkäsi, Dmytro teki ystävänsä Fedir Tkatšovin kanssa yhteistä biisiä.",
      url: "https://yleerilliset.akamaized.net/YleUutiset/Feature-Videot/2022/06/video_elementti5_uusi.mp4",
      urlmobile:
        "https://yleerilliset.akamaized.net/YleUutiset/Feature-Videot/2022/03/rauha1_valmis.mp4",
      mediadescription: {
        content: "Aistit ylitöissä",
        textcolor: "red",
        backgroundcolor: "green",
      },
    },
    {
      type: "video",
      text: "Tässä soivan kappaleen nimi on vapaasti suomennettuna “Aistit ylitöissä”. Se jäi hieman kesken.",
      url: "",
    },
  ],
};

export const RecommendationProps = {
  title: "Lue lisää",
  textcolordark: "orange",
  textcolor: "red",
  lang: "en",
  data: [
    {
      datePublished: "2023-11-04T07:15:35+0200",
      dateContentModified: "2023-11-04T09:41:14+0200",
      dateJsonModified: "2023-11-04T09:41:14+0200",
      subjects: [
        {
          id: "18-189082",
          title: {
            fi: "Ruotsi",
          },
        },
      ],
      url: {
        full: "https://yle.fi/a/74-20058066",
      },
      headline: {
        full: "Ruotsin pahimmat nuoret jengirikolliset asuvat näiden aitojen sisällä – joukossa on Liam, 20, ja tämä on hänen tarinansa",
        image: {
          alt: "Ruotsissa Klarälvsgårdenin nuorisokodin portti.",
          id: "39-1185922652904424d384",
          crops: [
            {
              name: "16:9",
              aspect: 1.78,
              coordinates: {
                x: 0,
                y: 290,
                width: 5768,
                height: 3244,
              },
            },
          ],
        },
      },
    },
    {
      datePublished: "2023-09-28T15:10:04+0300",
      dateContentModified: "2023-09-29T15:24:34+0300",
      dateJsonModified: "2023-09-29T15:24:34+0300",
      subjects: [
        {
          id: "18-189082",
          title: {
            fi: "Ruotsi",
          },
        },
      ],
      url: {
        full: "https://yle.fi/a/74-20050952",
      },
      headline: {
        full: "18-vuotias ammuttiin, kun lapset pelasivat vieressä jalkapalloa – mistä Ruotsin käsiin räjähtänyt jengiväkivalta johtuu?",
        image: {
          alt: "Poliiseja seisomassa räjähdyksessä vaurioituneen talon edessä. ",
          id: "39-11783906515571cccc3e",
          crops: [
            {
              name: "16:9",
              aspect: 1.78,
              coordinates: {
                x: 0,
                y: 672,
                width: 5056,
                height: 2844,
              },
            },
            {
              name: "2:3",
              aspect: 0.67,
              coordinates: {
                x: 893,
                y: 0,
                width: 2394,
                height: 3591,
              },
            },
            {
              name: "1:1",
              aspect: 1,
              coordinates: {
                x: 81,
                y: 0,
                width: 3591,
                height: 3591,
              },
            },
            {
              name: "5:2",
              aspect: 2.5,
              coordinates: {
                x: 0,
                y: 1509,
                width: 5051,
                height: 2020,
              },
            },
          ],
        },
      },
    },
    {
      datePublished: "2023-09-29T11:56:38+0300",
      dateContentModified: "2023-09-29T17:51:30+0300",
      dateJsonModified: "2023-09-29T17:51:30+0300",
      subjects: [
        {
          id: "18-189082",
          title: {
            fi: "Ruotsi",
          },
        },
      ],
      url: {
        full: "https://yle.fi/a/74-20052583",
      },
      headline: {
        full: "Ruotsin poliisi alkaa saada lisätukea puolustusvoimilta jengirikollisuuden torjuntaan",
        image: {
          alt: "Ruotsin poliisiylijohtaja Anders Thornberg",
          id: "39-6310595e1e012aedc1f",
          crops: [
            {
              name: "16:9",
              aspect: 1.78,
              coordinates: {
                x: 0,
                y: 342,
                width: 5209,
                height: 2930,
              },
            },
            {
              name: "2:3",
              aspect: 0.67,
              coordinates: {
                x: 1449,
                y: 0,
                width: 2315,
                height: 3473,
              },
            },
            {
              name: "1:1",
              aspect: 1,
              coordinates: {
                x: 871,
                y: 0,
                width: 3473,
                height: 3473,
              },
            },
          ],
        },
      },
    },
    {
      datePublished: "2023-09-29T05:20:35+0300",
      dateContentModified: "2023-09-29T15:23:31+0300",
      dateJsonModified: "2023-09-29T15:23:31+0300",
      subjects: [
        {
          id: "18-189082",
          title: {
            fi: "Ruotsi",
          },
        },
      ],
      url: {
        full: "https://yle.fi/a/74-20052478",
      },
      headline: {
        full: "Jengeille tarjoutui Ruotsissa äkisti ”valtava valikoima poikia ja tyttöjä” tekemään raakaa väkivaltaa – tutkija kertoo, mitä tapahtui",
        image: {
          alt: "Poliisi autoja parkkipaikalla, etualalla sumeana poliisi.",
          id: "39-1178080651508389d3e0",
          crops: [
            {
              name: "16:9",
              aspect: 1.78,
              coordinates: {
                x: 0,
                y: 495,
                width: 5630,
                height: 3155,
              },
            },
            {
              name: "1:1",
              aspect: 1,
              coordinates: {
                x: 1415,
                y: 0,
                width: 3960,
                height: 3960,
              },
            },
          ],
        },
      },
    },
  ],
};

export const FeedbackFormProps = {
  scoretitle: "Piditkö koneesta?",
  projectname: "2020-08-maskien_hinnat",
  hidedate: new Date("2024-12-01"),
};

export const FactboxProps = {
  maxwidth: "800px",
  textcolor: "red",
  title: "Näin juttu tehtiin",
  content: content,
};

export const CarouselProps = {
  carouselmaxwidth: "600px",
  circlecolor: "red",
  circlecolordark: "orange",
  slides: [
    {
      type: "image",
      url: "https://plus.yle.fi/2022-04-joukkotuhoaseet/img/tukahduttavat.png",
      urlmobile:
        "https://plus.yle.fi/2022-04-joukkotuhoaseet/img/syovyttavat.png",
      alt: "fgee",
      backgroundcolor: "white",
    },
    {
      type: "video",
      url: "https://yleerilliset.akamaized.net/YleUutiset/Feature-Videot/2022/03/rauha1_valmis.mp4",
      audioicon: true,
      audioiconcolor: "white",
      progressbarcolor: "red",
      loop: false,
      mediadescription: {
        content: "oh lord",
      },
    },
    {
      type: "image",
      url: "https://plus.yle.fi/2022-04-joukkotuhoaseet/img/syovyttavat.png",
    },
    {
      type: "image",
      url: "https://plus.yle.fi/2022-04-joukkotuhoaseet/img/verikaasut.png",
    },
    {
      type: "image",
      url: "https://plus.yle.fi/2022-04-joukkotuhoaseet/img/hermokaasut.png",
    },
  ],
};

export const AudioWithSubtitlesProps = {
  maxwidth: "800px",
  title: "Kuuntele, miten anonyymi henkilö puhuu xxx",
  url: "https://plus.yle.fi/2023-08-parisuhde-politiikka/audio/audio_2.mp3",
  buttonbackgroundcolor: "red",
  iconcolor: "green",
  audiodurationtext: "orange",
  media: {
    type: "image",
    url: "https://plus.yle.fi/2023-08-parisuhde-politiikka/img/tapio.jpg",
    urldark:
      "https://images.cdn.yle.fi/image/upload/w_3651,h_3651,x_0,y_4,q_auto:eco,f_auto,fl_lossy,c_crop/w_1080,h_1080,dpr_1/39-119987665521d651f4cf",
    urlmobiledark:
      "https://plus.yle.fi/2023-08-parisuhde-politiikka/img/tapio.jpg",
  },
  texts: [
    {
      text: "Miksi teet näin? Sitä en osannut oikein selittää, kun olen sellainen metsäläinen.",
      end: 5,
    },
    { text: "Mie menen vaan metsään ja etsin riistaa.", end: 7.8 },
    { text: "En minä tiedä, minkä takia. ", end: 12 },
    {
      text: "Kaisa on opettanut sellaista, että pitää olla eettinen. Pitää olla joku syy. ",
      end: 18.8,
    },
    { text: "Ei vaan voi mennä syyttä suotta jonkun takia. ", end: 22.5 },
    {
      text: "Ehkä sitä olen itsekin oppinut ymmärtämään enemmän.",
      end: 30,
    },
  ],
  textnegative: "rgb(216, 217, 219)",
  textpositive: "black",
};

export const AudioTagProps = {
  url: "https://yleerilliset.akamaized.net/YleUutiset/2021/feature/audiodeepfake/audio/jenni_lopullinen.mp3",
  text: "test",
  maxwidth: "800px",
  textcolor: "red",
  textcolordark: "red",
  alt: "test",
};

export const PictureTagProps = {
  relative: true,
  maxwidth: "800px",
  text: "kuvateksti",
  textcolordark: "orange",
  textcolor: "pink",
  url: "https://plus.yle.fi/2023-08-parisuhde-politiikka/img/tapio.jpg",
  urldark:
    "https://images.cdn.yle.fi/image/upload/w_3651,h_3651,x_0,y_4,q_auto:eco,f_auto,fl_lossy,c_crop/w_1080,h_1080,dpr_1/39-119987665521d651f4cf",
  urlmobiledark:
    "https://plus.yle.fi/2023-08-parisuhde-politiikka/img/tapio.jpg",
};

export const VideoTagProps = {
  alt: "testiAlttt",
  relative: true,
  maxwidth: "800px",
  text: "kuvateksti",
  allowplay: false,
  threshold: 0.7,
  url: "https://yleerilliset.akamaized.net/YleUutiset/Feature-Videot/2023/11/GHASSAN1.mp4.mp4",
  urlmobile:
    "https://yleerilliset.akamaized.net/YleUutiset/Feature-Videot/2023/11/GHASSAN2.mp4.mp4",
  audioicon: true,
  progressbarcolor: "red",
  audioiconcolor: "white",
  loop: true,
  textcolordark: "orange",
  textcolor: "green",
  subtitles:
    "https://plus.yle.fi/2023-11-ruotsin_jengit/vtt/GHASSAN1_tekstitys.vtt",
};

export const AuthorBoxProps = {
  authors: "**Tekijä 1**, tekijä 2, *Tekijä 3*",
};
