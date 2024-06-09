import { useSelector } from "react-redux";
import styles from "./ProgressBar.module.css";
import ProgressFirstStep from "./progress/ProgressFirstStep";
import ProgressSecondStep from "./progress/ProgressSecondStep";
import ProgressThirdStep from "./progress/ProgressThirdStep";
import UnSelectedSecondStep from "./progress/UnSelectedSecondStep";
import UnSelectedThirdStep from "./progress/UnSelectedThirdStep";
import SuccessFirstStep from "./progress/SuccessFirstStep";
import SuccessSecondStep from "./progress/SuccessSecondStep";

const ProgressBar = () => {
  const step = useSelector((state) => state.stepNumber);
  const stepProgress = [
    <ProgressFirstStep />,
    <ProgressSecondStep />,
    <ProgressThirdStep />,
  ];
  const stepUnSelected = [<UnSelectedSecondStep />, <UnSelectedThirdStep />];
  const stepSuccess = [<SuccessFirstStep />, <SuccessSecondStep />];
  return (
    <div className={styles.progressContainer}>
      {step === 0 && (
        <>
          {stepProgress[0]}
          {stepUnSelected[0]}
          {stepUnSelected[1]}
        </>
      )}
      {(step === 1 || step === 2) && (
        <>
          {stepSuccess[0]}
          {stepProgress[1]}
          {stepUnSelected[1]}
        </>
      )}
      {step === 3 && (
        <>
          {stepSuccess[0]}
          {stepSuccess[1]}
          {stepProgress[2]}
        </>
      )}
      <hr className={styles[`progressBar${step === 2 ? 1 : step}`]} />
    </div>
  );
};

export default ProgressBar;
