import styles from "../AudioWithSubtitles.module.css";
const Play = (props) => {
  return (
    <svg
      class="audioPlayerPlayIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        class={styles.audioIconPath + " audioIconPath"}
        style={props.fill}
        d="M5.52 2.122a1 1 0 011.02.037l14 9a1 1 0 010 1.682l-14 9A1 1 0 015 21V3a1 1 0 01.52-.878z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default Play;
