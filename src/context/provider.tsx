import { createContext, useState } from "react";

export const myContext = createContext({})

export const Provider = ({children} : any) => {
    const [tasks, setTasks] = useState<any>([])

    const value = {
        tasks,
        setTasks
    }

    return(
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    )
}