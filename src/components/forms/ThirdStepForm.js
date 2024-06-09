import FormBackBtn from "./FormBackBtn";
import FormBtn from "./FormBtn";
import styles from "./SecondStepForm.module.css";
import { stepActions } from "../../store/redux";
import { useDispatch } from "react-redux";

const ThirdStepForm = () => {
  const dispatch = useDispatch();
  const nextStepHandler = (event) => {
    event.preventDefault();
    dispatch(stepActions.nextStep());
  };
  const backStepHandler = (event) => {
    event.preventDefault();
    dispatch(stepActions.prevStep());
  };
  return (
    <>
      <form className={styles.formDiv}>
        <div className={styles.verifyIcon}>
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF" />
            <path
              d="M27.7499 33L31.2499 36.5L38.2499 29.5M44.6666 33C44.6666 39.4433 39.4432 44.6667 32.9999 44.6667C26.5566 44.6667 21.3333 39.4433 21.3333 33C21.3333 26.5567 26.5566 21.3333 32.9999 21.3333C39.4432 21.3333 44.6666 26.5567 44.6666 33Z"
              stroke="#039855"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="5"
              y="5"
              width="56"
              height="56"
              rx="28"
              stroke="#ECFDF3"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className={styles.verfiyDiv}>
          <h1 className={styles.verfiyH1}>Email verified</h1>
          <p className={styles.verifyP2}>
            Your accounnt has been verified successfully. Click below to setup
            your store.
          </p>
        </div>
        <FormBtn
          onClick={nextStepHandler}
          content="Get started"
          style={{ margin: "12px 0" }}
        />
        <FormBackBtn onClick={backStepHandler} />
      </form>
    </>
  );
};

export default ThirdStepForm;
