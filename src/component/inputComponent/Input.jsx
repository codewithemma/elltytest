import styles from "./Input.module.css";

const Input = ({ id }) => {
  return (
    <label className={styles.custom_checkbox}>
      <input type="checkbox" id={id} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Input;
