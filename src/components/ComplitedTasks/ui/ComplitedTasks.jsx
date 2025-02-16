import styles from './ComplitedTasks.module.css';


export function ComplitedTasks() {
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
        <li>Прочитать книгу</li>
        <li>Заняться спортом</li>
    </ul>
</div>
  )
}
