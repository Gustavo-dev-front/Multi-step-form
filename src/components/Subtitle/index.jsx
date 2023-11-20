import styles from "./styles.module.css";

const Subtitle = ({ children }) => {
  return <h2 className={styles.Subtitle}>{children}</h2>;
};

export default Subtitle;
