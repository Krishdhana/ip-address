import styles from "/styles/fullscreen-loading.module.scss";

const FullScreenLoading = () => {
  return (
    <div className="vw-100 vh-100 d-grid align-content-center">
      <div className={`${styles.spinner}`}>
        <div className={`${styles["double-bounce1"]}`}></div>
        <div className={`${styles["double-bounce2"]}`}></div>
      </div>
    </div>
  );
};

export default FullScreenLoading;
