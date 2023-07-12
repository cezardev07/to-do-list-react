import { useContext } from "react"
import { myContext } from "../../context/provider"

import { TagMain } from "./style";
import { Task } from "./taskComponent/task";

export const Main = () => {
    const {tasks, setTasks} = useContext<any>(myContext)

    const deleteTask = (taskToDelete : any) => {
      const updateTasks : any = tasks.filter(( task : any ) => {
        if(task !== taskToDelete){
          return task
        }
      })
      setTasks(updateTasks)
    }
  
    const concluidaTask = (taskToConcluida : any) => {
      taskToConcluida.status = "concluded"
      setTasks([...tasks])
    }

    return (
        <TagMain>
        {
          tasks.map((task : any) => {
            return (
              <Task props={{task, deleteTask, concluidaTask}}/>
            )
          })
        }
      </TagMain>
    )
}