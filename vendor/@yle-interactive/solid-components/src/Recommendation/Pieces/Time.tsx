import styles from "../Recommendation.module.css";

const typeClock = (date) => {
  return date.getMinutes() < 10
    ? " " + date.getHours() + ":0" + date.getMinutes()
    : " " + date.getHours() + ":" + date.getMinutes();
};

const typeDate = (date) => {
  return new Date().getFullYear() == date.getFullYear()
    ? date.getDate() + "." + Number(date.getMonth() + 1) + "."
    : date.getDate() +
        "." +
        Number(date.getMonth() + 1) +
        "." +
        date.getFullYear();
};

const Time = (props) => {
  const datePublished = new Date(props?.datePublished);
  const today = new Date();
  const showDate =
    datePublished.getDate() === today.getDate() &&
    datePublished.getMonth() === today.getMonth() &&
    datePublished.getFullYear() === today.getFullYear()
      ? typeClock(datePublished)
      : typeDate(datePublished);
  return (
    <time class={styles.plusRecommendationTime + " plusRecommendationTime"}>
      {showDate}
    </time>
  );
};

export default Time;
