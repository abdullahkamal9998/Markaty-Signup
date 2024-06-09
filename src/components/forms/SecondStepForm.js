import { useDispatch } from "react-redux";
import FormBackBtn from "./FormBackBtn";
import FormBtn from "./FormBtn";
import styles from "./SecondStepForm.module.css";
import { stepActions } from "../../store/redux";
import VerifyInput from "../inputs/VerifyInput";
import { useRef, useState } from "react";

const SecondStepForm = () => {
  const [code, setCode] = useState({});
  const secondStepRef = useRef();
  const thirdStepRef = useRef();
  const fourthStepRef = useRef();
  const style = {
    borderRadius: "8px",
    border: "2px solid var(--Primary, #7244c8)",
    background: "var(--base-white, #fff)",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "var(--Primary, #7244c8)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "60px",
    letterSpacing: "-0.96px",
    outline: "none",
  };
  const dispatch = useDispatch();
  const nextStepHandler = (event) => {
    event.preventDefault();
    dispatch(stepActions.nextStep());
  };
  const backStepHandler = (event) => {
    event.preventDefault();
    dispatch(stepActions.prevStep());
  };
  const inputChangeHandler = (event) => {
    setCode((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
    if (event.target.id === "firstNum") secondStepRef.current.focus();
    if (event.target.id === "secondNum") thirdStepRef.current.focus();
    if (event.target.id === "thirdNum") fourthStepRef.current.focus();
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
            <rect x="5" y="5" width="56" height="56" rx="28" fill="#F4EBFF" />
            <path
              d="M21.3334 27.1667L30.8591 33.8347C31.6305 34.3746 32.0162 34.6446 32.4357 34.7492C32.8063 34.8416 33.1938 34.8416 33.5644 34.7492C33.9839 34.6446 34.3696 34.3746 35.141 33.8347L44.6667 27.1667M26.9334 42.3333H39.0667C41.0269 42.3333 42.007 42.3333 42.7557 41.9519C43.4142 41.6163 43.9497 41.0809 44.2852 40.4223C44.6667 39.6736 44.6667 38.6935 44.6667 36.7333V29.2667C44.6667 27.3065 44.6667 26.3264 44.2852 25.5777C43.9497 24.9191 43.4142 24.3837 42.7557 24.0481C42.007 23.6667 41.0269 23.6667 39.0667 23.6667H26.9334C24.9732 23.6667 23.9931 23.6667 23.2444 24.0481C22.5858 24.3837 22.0504 24.9191 21.7149 25.5777C21.3334 26.3264 21.3334 27.3065 21.3334 29.2667V36.7333C21.3334 38.6935 21.3334 39.6736 21.7149 40.4223C22.0504 41.0809 22.5858 41.6163 23.2444 41.9519C23.9931 42.3333 24.9732 42.3333 26.9334 42.3333Z"
              stroke="#7244C8"
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
              stroke="#F9F5FF"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className={styles.verfiyDiv}>
          <h1 className={styles.verfiyH1}>Check your email</h1>
          <p className={styles.verifyP}>
            We sent a verification code to omarmouneer@gmail.com
          </p>
        </div>
        <div style={{ margin: "12px 0", display: "flex", gap: "12px" }}>
          <VerifyInput
            id="firstNum"
            style={code.firstNum && style}
            onChange={inputChangeHandler}
            autoFocus
          />
          <VerifyInput
            id="secondNum"
            style={code.secondNum && style}
            onChange={inputChangeHandler}
            // disabled={!code.firstNum}
            inputRef={secondStepRef}
          />
          <VerifyInput
            id="thirdNum"
            style={code.thirdNum && style}
            onChange={inputChangeHandler}
            // disabled={!code.secondNum}
            inputRef={thirdStepRef}
          />
          <VerifyInput
            id="fourthNum"
            style={code.fourthNum && style}
            onChange={inputChangeHandler}
            // disabled={!code.thirdNum}
            inputRef={fourthStepRef}
          />
        </div>
        <FormBtn onClick={nextStepHandler} content="Get started" />
        <div className={styles.formFooter}>
          <p className={styles.footerParag}>Didn’t receive the email?</p>
          <button className={styles.footerButton}>Click to resend</button>
        </div>
        <FormBackBtn onClick={backStepHandler} />
      </form>
    </>
  );
};

export default SecondStepForm;
