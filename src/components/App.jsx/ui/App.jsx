import { Inputs } from '../../InputFields/ui/Inputs'
import { CurentTasks } from '../../CurentTasks/ui/CurentTasks'
import {ComplitedTasks} from '../../ComplitedTasks/ui/ComplitedTasks'

export function App() {
  return (
      <section className="main"> 
        <Inputs/>
        <CurentTasks/>
        <ComplitedTasks/>
    </section>
  )
}
