import styles from "./FormBackBtn.module.css";

const FormBackBtn = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={styles.backBtn}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3333 10H4.66663M4.66663 10L10.5 15.8334M4.66663 10L10.5 4.16669"
          stroke="#475467"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to log in
    </button>
  );
};

export default FormBackBtn;
