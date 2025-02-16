import styles from '../ui/Inputs.module.css'

export function Inputs() {
  console.log(styles);
  
  return (
    <div><h1 className={styles.tasks__title}>Smart Timer Tasks</h1>
    <div className={styles.inputs__tasks}>
        <input type="text" className={`${styles.inputs} ${styles.inputs__text}`} placeholder="Введите задачу"/>
        <input type="number" className={`${styles.inputs} ${styles.inputs__number}`}placeholder="Введите время для выполнения этой задачи"/>
    </div>
    <div className={styles.btn__add_contaner}>
    <button className={styles.btn__add}>Add task</button>
    </div></div>
  )
}
