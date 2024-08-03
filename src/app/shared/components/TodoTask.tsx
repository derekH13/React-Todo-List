
import { ITask } from '../../../Interfaces';
import '../../shared/css/TodoTask.css'


//fazendo um obejeto para destruturar/ recebendo uma função no objeto
interface TaskProps {
    task: ITask
    deleteTask(d: number): void
}


function TodoTask({ task, deleteTask }: TaskProps) {
	
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={() => deleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;