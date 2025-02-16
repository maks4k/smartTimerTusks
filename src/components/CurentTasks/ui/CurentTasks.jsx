import styles from "./CurentTasks.module.css";

export function CurentTasks() {
  return (
    <ul className={styles.tasks__performeds}>
      <li className={styles.task__prefomed}>
        Задача 1
        <div className={styles.btnTask__state}>
          <button className={`${styles.btnTask} ${styles.btnTask__complited}`}>
            <img
              src="../src/assets/img/free-icon-check-mark-5299035.png"
              alt="complited"
            />
          </button>
          <button className={`${styles.btnTask} ${styles.btnTask__play}`}>
            <img
              src="../src/assets/img/free-icon-play-3318660.png"
              alt="play"
            />
          </button>
          <button className={`${styles.btnTask} ${styles.btnTask__pause}`}>
            <img
              src="../src/assets/img/free-icon-pause-button-3249396.png"
              alt="pause"
            />
          </button>
          <button className={`${styles.btnTask} ${styles.btnTask__close}`}>
            <img
              src="../src/assets/img/free-icon-close-151882.png"
              alt="close"
            />
          </button>
        </div>
      </li>
    </ul>
  );
}
