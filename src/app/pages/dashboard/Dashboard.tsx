

import { useState } from 'react';
import TodoTask from '../../shared/components/TodoTask';
import  '../../shared/css/style.css'
import { ITask } from '../../../Interfaces';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {

	const [task, setTask] = useState("")

	//agora criar aonde vai ser guardada a lista de tasks
	const [todoList, setTodoList] = useState<ITask[]>([])



	//função de crirar as anotações
	function addTask(): void{

		if(task === ""){
			toast.error("Digite Alguma Coisa")

		}else{

		//essa função irá chamar o componente ToostContainer
		toast.success("Task Cadastrada com sucesso!")
		}


		const idRandom = (num: number) => Math.round(Math.random() * num)

		console.log(idRandom (10))

		const newTask = { id: idRandom(99999999999), nameTask: task}

		setTodoList([...todoList, newTask])

	
	}


	//função para todos que tem o id diferente do parametro ser add no setTodoList, e os iguais serem deixado de fora do array
	function deleteTask(d: number): void{
		setTodoList(todoList.filter((taskName) => taskName.id !== d))
	}





	return (

		<div className="Dashboard">

			<ToastContainer
			autoClose={2500}
			pauseOnHover={false}
			theme="dark"
		
			/>

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					className="input"
				/>

				<button type="submit" onClick={addTask} className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			{todoList.map((task, key) => (

				//passando o task iterado para o TodoTask
				<TodoTask task={task} key={key} deleteTask={deleteTask}/>
			))}
			

			{/* jeito de usar codigo aqui */}
		</div>
	);
}

export default Dashboard;