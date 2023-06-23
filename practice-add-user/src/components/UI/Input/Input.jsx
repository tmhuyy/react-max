import styles from "./Input.module.css";
const Input = (props) => {
  const { type, value, onChange, id, autoFocus, ref } = props;
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.input}
      autoFocus={autoFocus}
      ref={ref}
    />
  );
};

export default Input;
