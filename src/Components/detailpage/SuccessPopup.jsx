import styles from "./SuccessPopup.module.css";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        {/* <div className={styles.checkIcon}>✔</div> */}
        <img className={styles.checkIconImg} src='/SuccessCheck.svg'></img>
        <h2>Registration Submitted Successfully!</h2>
        <p>
          Thank you for registering! 🚀 You've successfully secured your spot in the hackathon.
          Get ready to innovate, collaborate, and compete with the best minds in tech!
        </p>
      </div>
    </div>
  );
};

export default SuccessPopup;
