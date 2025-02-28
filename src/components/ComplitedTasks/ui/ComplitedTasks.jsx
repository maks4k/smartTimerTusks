import styles from './ComplitedTasks.module.css';


export function ComplitedTasks({failedTasks}) {
  return (
    <div className={styles.tasks__list}>
    <ul className={styles.tasks__complited}>
        <h2>Выпоненные задачи
        </h2>
        <li>Обсудить дела</li>
        <li>Сходить на работу</li>
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
