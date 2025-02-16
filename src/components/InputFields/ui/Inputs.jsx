import { useState } from 'react';
import styles from '../ui/Inputs.module.css'

export function Inputs({addTask}) {
  const [taskName, setTaskName] = useState('');//стейт для названия задачи
  const [taskDuration, setTaskDuration] = useState('');//продолжительность задачи
  
  const handleAddTask = () => {
    if (taskName && taskDuration) {
      const newTask = {
        name: taskName,
        duration: parseInt(taskDuration, 10), // Преобразуем строку в число
      };
      addTask(newTask); // Вызываем функцию добавления задачи
      setTaskName(''); //после выполнения этой функции ,делаем поле ввода снова пустым
      setTaskDuration('');
    }
  };//создаем нвоый объект с именем и продоложительностью задачи
  
  return (
    <div><h1 className={styles.tasks__title}>Smart Timer Tasks</h1>
    <div className={styles.inputs__tasks}>
        <input onChange={(e)=>setTaskName(e.target.value)} type="text" className={`${styles.inputs} ${styles.inputs__text}`} placeholder="Введите задачу" value={taskName}/>
        <input onChange={(e)=>setTaskDuration(e.target.value)} type="number" className={`${styles.inputs} ${styles.inputs__number}`}placeholder="Введите время для выполнения этой задачи"
         value={taskDuration}/>
    </div>
    <div className={styles.btn__add_contaner}>
    <button onClick={handleAddTask} className={styles.btn__add}>Add task</button>
    </div></div>
  )
}
