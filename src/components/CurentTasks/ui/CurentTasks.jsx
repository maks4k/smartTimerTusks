import { useState } from "react";
import { Inputs } from "../../InputFields/ui/Inputs";
import styles from "./CurentTasks.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function CurentTasks() {
  const [tasks,setTasks] = useState([]);//стейт добавленных задач
  //принимает объект task аругемнтом из инпута
  const addTasks=(task)=>{
    setTasks([...tasks, task]);
  }
  return (
    <>
    <Inputs addTask={addTasks}/>
    <ul className={styles.tasks__performeds}>
      {tasks.map((task, index) => (
      <li key={index} className={styles.task__prefomed}>
       {task.name}
        <div className={styles.btnTask__state}>
          <CountdownCircleTimer
          className={styles.timer}
            isPlaying
            duration={task.duration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={30}
            strokeWidth={3}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
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
      </li>))}
    </ul>
    </>
  );
}
