import styles from "./Description.module.css";
const Description = (props) => {
  const { icon, header } = props;
  return (
    <div className={styles.container}>
      <div>
        {icon}
        <h1 className={styles.header}>{header}</h1>
        <p className={styles.parag}>
          Create a free account and get full access to all features for 30-days.
          No credit card needed. Get started in 2 minutes.
        </p>
      </div>
    </div>
  );
};

export default Description;
