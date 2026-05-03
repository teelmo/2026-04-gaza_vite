import styles from "../Recommendation.module.css";

const Tag = (props) => {
  const textColor = () => props.textColor;
  return (
    <a
      class={styles.plusRecommendationTagLink + " plusRecommendationTagLink"}
      style={textColor()}
      href={props.tagLink}
    >
      {props.tag}
    </a>
  );
};

export default Tag;
