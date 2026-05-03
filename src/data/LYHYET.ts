type Kieli = "fi" | "sv";

export const l = (kieli: Kieli) => ({
  /* Factbox */
  open: { fi: "Avaa", sv: "Öppna" }[kieli],
  close: { fi: "Sulje", sv: "Stäng" }[kieli],

  /* SisaltoVaroitus */
  warning_title: { fi: "Lorem ipsum", sv: "Lorem ipsum" }[kieli],
  warning_desc: {
    fi: "Dolor sit amet consectetur.",
    sv: "Dolor sit amet consectetur.",
  }[kieli],
  show: { fi: "Dolor", sv: "Dolor" }[kieli],

  /* Fallback */
  error: {
    fi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sv: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }[kieli],

  /* RecommendationBlock */
  read_more: {
    fi: "Lue lisää (Teemu S päivittää, toimittakaa vaan urlit)",
    sv: "Läs mer",
  }[kieli],
});
