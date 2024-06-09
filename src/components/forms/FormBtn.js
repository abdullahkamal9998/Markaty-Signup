import styles from "./FormBtn.module.css";

const FormBtn = (props) => {
  const { content, style, onClick } = props;
  return (
    <button onClick={onClick} style={style} className={styles.button}>
      {content}
    </button>
  );
};

export default FormBtn;
