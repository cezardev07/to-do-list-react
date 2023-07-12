import { useState, useContext } from "react"
import { myContext } from "../../context/provider"

import { TagHeader } from "./style";

export const Header = () => {
    const [valueInput, setValueInput] = useState("")
    const [count, setCount] = useState<number>(1)

    const {tasks, setTasks} = useContext<any>(myContext)

    const createTask = (event : any) => {
      event.preventDefault()
      if(valueInput.length > 0){
        setCount(prev => prev += 1)
        const msgTask = {
          id: count,
          status: "pending",
          valueInput
        }
        setTasks([...tasks, msgTask])
        setValueInput("")
      }
    }
  
    return(
        <TagHeader>
            <nav>
            <h1>To-Do-List</h1>
            <form onSubmit={createTask}>
                <input onChange={({ target }) => setValueInput(target.value)} type="text" placeholder="Create Task" value={valueInput} required/>
                <button type="submit">to add</button>
            </form>
            </nav>
        </TagHeader>
    )
}