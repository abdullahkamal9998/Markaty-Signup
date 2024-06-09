import { useDispatch } from "react-redux";
import { stepActions } from "../../store/redux";
import Input from "../inputs/Input";
import styles from "./Form.module.css";
import FormBackBtn from "./FormBackBtn";
import FormBtn from "./FormBtn";

const ForthStepForm = () => {
  const dispatch = useDispatch();
  const backStepHandler = (event) => {
    event.preventDefault();
    dispatch(stepActions.prevStep());
  };
  return (
    <>
      <form className={styles.formDiv2}>
        <Input
          label="Store name"
          id="StoreName"
          placeHolder="Type your store name"
        />
        <Input
          // require
          label="Store URL"
          id="StoreURL"
          placeHolder="mystore"
        />
        <Input
          // require
          select
          label="Store language"
          id="StoreLanguage"
          options={["English"]}
        />
        <Input
          // require
          select
          label="Store Industry"
          id="StoreIndustry"
          options={["Fashion"]}
          isHint={true}
          hintString="Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)"
        />
        <FormBtn style={{ margin: "12px 0" }} content="Save" />
        <FormBackBtn onClick={backStepHandler} />
      </form>
    </>
  );
};

export default ForthStepForm;
