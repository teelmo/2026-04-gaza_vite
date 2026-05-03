import styles from "../Recommendation.module.css";

const Header = (props) => {
  const textColor = () => props.textColor;
  return (
    <h3 class={styles.plusRecommendationHeader + " plusRecommendationHeader"}>
      <a style={textColor()} href={props.url}>
        {props.title}
      </a>
    </h3>
  );
};

export default Header;
