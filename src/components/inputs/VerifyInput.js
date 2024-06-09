import styles from "./VerifyInput.module.css";

const VerifyInput = (props) => {
  const { autoFocus, style, id, onChange, disabled, inputRef } = props;
  return (
    <input
      ref={inputRef}
      id={id}
      autoFocus={autoFocus}
      maxLength={1}
      className={styles.verifyBtn}
      style={style !== "" ? style : {}}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};

export default VerifyInput;
