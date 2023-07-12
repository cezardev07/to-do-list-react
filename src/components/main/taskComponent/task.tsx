export const Task = ({props} : any ) => {
    return(
        <div key={props.task.id} className="context-wrap">
            <div className="status">
                <p><strong>status:</strong> {props.task.status}</p>
            </div>
            <div className="context">
                <p className="task">{props.task.valueInput}</p>
            </div>
            <div className="remove-task">
                <button onClick={() => props.concluidaTask(props.task)} className="concluida">completed</button>
                <button onClick={() => props.deleteTask(props.task)} className="delete">delete</button>
            </div>
        </div>
    )
}