import styles from "./Empty.module.css";
function Empty({ text, btnText, onBtnClick }) {
  return (
    <div className={styles.divWrapper}>
      <h2>{text}</h2>
      {btnText && (
        <button onClick={onBtnClick} className={styles.btn}>
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Empty;
