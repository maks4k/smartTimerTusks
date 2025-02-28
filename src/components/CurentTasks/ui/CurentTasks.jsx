import { useState } from "react";
import { Inputs } from "../../InputFields/ui/Inputs";
import styles from "./CurentTasks.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FinishedTasks } from "../../FinishedTasks/ui/FinishedTasks";
import 'animate.css';

export function CurentTasks() {
  const [tasks, setTasks] = useState([]); //стейт добавленных задач
  const [isPlaying, setIsPlaying] = useState({}); //стетй для управления кнопками плей и пауза
  const [completedTasks, setCompletedTasks] = useState([]);
  const [failedTasks, setFailedTasks] = useState([]);

  const handlePause = (index) => {
    setIsPlaying((prev) => ({ ...prev, [index]: false }));
  };
  const handlerPlay = (index) => {
    setIsPlaying((prev) => ({ ...prev, [index]: true }));
  };
  //принимает объект task аругемнтом из инпута,распоковываем старый масив для образования нового
  //tasks.length-длинна масива всегда индекс новой задачи ,делаем атк что бы при добавление сразу шел таймер

  const addTasks = (task) => {
    setTasks([...tasks, task]);
    setIsPlaying((prev) => ({ ...prev, [tasks.length]: true }));
  };
  const handlerTaskComplited = (index) => {
    const task = tasks[index];
    setTasks((prevTasks) =>
      prevTasks.filter((_, taskIndex) => taskIndex !== index)
    );
    setCompletedTasks((prevCompleted) => [...prevCompleted, task]);
    setIsPlaying((prev) => {
      const newPlaying = { ...prev };
      delete newPlaying[index];
      return newPlaying;
    });
  };

  const handlerTaskFailed = (index) => {
    const task = tasks[index];
    setTasks((prevTasks) =>
      prevTasks.filter((_, taskIndex) => taskIndex !== index)
    );
    setFailedTasks((prevFailed) => [...prevFailed, task]);
    setIsPlaying((prev) => {
      const newPlaying = { ...prev };
      delete newPlaying[index];
      return newPlaying;
    });
  };
  const removeTask = (index) => {
    setTasks((prevTask) => {
      return prevTask.filter((_, taskIndex) => taskIndex != index);
    }); //фильтруем задачи по индексу ,если индекст элемента не равен индксу который хотим удалить
    setIsPlaying((prev) => {
      const newPlaying = { ...prev }; //создали копию текущего состояния
      delete newPlaying[index]; //удаляем сво-во с ключом индекс
      return newPlaying;
    });
  };

  return (
    <>
      <Inputs addTask={addTasks} />
      <ul className={styles.tasks__performeds}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task__prefomed}>
            {task.name}
            <div className={styles.btnTask__state}>
              <CountdownCircleTimer
                className={styles.timer}
                isPlaying={isPlaying[index] ?? true} //делаем атк что бы при добавление сразу шел таймер
                duration={task.duration}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                size={30}
                strokeWidth={3}
                onComplete={() => handlerTaskFailed(index)}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
              <button
                className={`${styles.btnTask} ${styles.btnTask__complited}`}
                onClick={() => handlerTaskComplited(index)}
              >
                <img
                  src="../src/assets/img/free-icon-check-mark-5299035.png"
                  alt="complited"
                />
              </button>
              <button
                className={`${styles.btnTask} ${styles.btnTask__play}`}
                onClick={() => handlerPlay(index)}
                style={{
                  display: isPlaying[index] ? "none" : "block",
                }} //меняем кнопку
              >
                <img
                  src="../src/assets/img/free-icon-play-3318660.png"
                  alt="play"
                />
              </button>
              <button
                className={`${styles.btnTask} ${styles.btnTask__pause}`}
                onClick={() => handlePause(index)}
                style={{
                  display: isPlaying[index] ? "block" : "none",
                }} //меняем кнопку
              >
                <img
                  src="../src/assets/img/free-icon-pause-button-3249396.png"
                  alt="pause"
                />
              </button>
              <button
                className={`${styles.btnTask} ${styles.btnTask__close}`}
                onClick={() => removeTask(index)}
              >
                <img
                  src="../src/assets/img/free-icon-close-151882.png"
                  alt="close"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FinishedTasks
        failedTasks={failedTasks}
        completedTasks={completedTasks}
      />
    </>
  );
}
