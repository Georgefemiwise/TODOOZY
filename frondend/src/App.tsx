import React, { useState } from 'react';
import TasksList from './Tasks';
import Button from './components/Button';
import TaskCard from './components/TaskCard';

export default function App() {
	const [tasks, setTasks] = useState(TasksList);

	function toggle(id: number) {
		setTasks((prevTasks) => {
			return prevTasks.map((currentTask) => {
				return currentTask.id === id
					? {
							...currentTask,
							completed: !currentTask.completed,
					  }
					: currentTask;
			});
		});
	}

	// function deleteTask(id: number) {
	// 	setTasks((prevTasks) => {
	// 		return prevTasks.map((currentTask) => {
	// 			return currentTask.id === id
	// 				? prevTasks.pop()
	// 				: currentTask;
	// 		});
	// 	});
	// }

	function addTask() {
		const newTask = {
			id: tasks.length + 1,
			title: 'New Task',
			description: 'Description of the new task',
			deadline: 'Some deadline',
			completed: false,
		};

		setTasks((prevTasks) => [...prevTasks, newTask]);
	}


	

	// Sort the tasks based on the "completed" property
	const sortedTasks = [...tasks].sort((a, b) =>
		a.completed === b.completed ? 0 : a.completed ? 1 : -1,
	);

	return (
		<div className='bg-zinc-300 p-5 rounded w-screen min-h-screen grid place-content-center'>
			<div className=' min-w-[80rem]** px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
				<h1 className='font-black text-6xl capitalize mb-7 text-center'>
					tasks manager
				</h1>
				<div className='my-5 p-3 flex gap-3 justify-center'>
					<Button
						children='add Task'
						backgroundColor='warning'
						handleClick={addTask}
					/>
					
				</div>

				<div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
					<div className='bg-white rounded shadow p-6 m-4  lg:w-screen lg:max-w-4xl sm:w-[30rem]'>
						<div className='mb-4'>
							<h1 className='text-gray-950'>
								Todo List
							</h1>
							<div className='flex mt-4'>
								<input
									className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-950'
									placeholder='Add Todo / '
								/>
								<button className='flex-no-shrink p-2 border-2 rounded text-teal border-indigo-500 hover:text-white hover:bg-indigo-500'>
									Add
								</button>
							</div>
						</div>
						<div>
							{sortedTasks.map((task) => (
								<TaskCard
									key={task.id}
									title={task.title}
									description={task.description}
									deadline={task.deadline}
									toggle={() => toggle(task.id)}
									completed={task.completed}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
