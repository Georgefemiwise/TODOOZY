interface Props {
	title: string;
	description: string;
	deadline: string;
	completed: boolean;
	toggle: () => void;
}
export default function TaskCard(props: Props) {
	return (
		<div className='hover:bg-gray-100'>
			{/* <!-- component --> */}

			{props.completed === false && (
				<div className='flex mb-2 items-center '>
					<p className='w-full text-gray-900  p-3'>
						{props.title}
						<small className='text-xs block'>
							{props.deadline}
						</small>
					</p>
					<button
						onClick={props.toggle}
						className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500'>
						Done
					</button>
					<button className='flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500'>
						Remove
					</button>
				</div>
			)}

			{props.completed === true && (
				<div className='flex mb-4 items-center '>
					<p className='w-full line-through decoration-4 text-green-500'>
						{props.title}
						<small className='text-xs block'>
							{props.deadline}
						</small>
					</p>
					<button
						onClick={props.toggle}
						className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500'>
						Not Done
					</button>
					<button className='flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500'>
						Remove
					</button>
				</div>
			)}
		</div>
	);
}
