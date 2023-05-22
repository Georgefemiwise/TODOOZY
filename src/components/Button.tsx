interface Props {
	children: string;
	backgroundColor: 'danger' | 'warning' | 'neutral';
	handleClick?: () => void;
}

export default function Button(prop: Props) {
	return (
		<button
			onClick={prop.handleClick}
			className={`class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 capitalize
		${
			prop.backgroundColor === 'danger'
				? 'bg-red-500'
				: prop.backgroundColor === 'warning'
				? 'bg-yellow-500'
				: prop.backgroundColor === 'neutral'
				? 'bg-emerald-500'
				: ''
		}`}>
			{prop.children}
		</button>
	);
}
