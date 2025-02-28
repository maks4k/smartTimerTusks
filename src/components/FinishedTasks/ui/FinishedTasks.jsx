import styles from './FinishedTasks.module.css';


export function FinishedTasks({failedTasks,completedTasks}) {
  return (
    <div className={styles.tasks__list}>
    <ul className={styles.tasks__complited}>
        <h2>Выпоненные задачи
        </h2>
        {completedTasks&&completedTasks.map((task,index) => (
          <li key={index}>{task.name}</li>
        ))}
    </ul>
    <ul className={styles.tasks__failed}>
        <h2>Проваленные задачи</h2>
        {failedTasks&&failedTasks.map((task,index) => (
          <li key={index}>{task.name}</li>
        ))}
    </ul>
</div>
  )
}
