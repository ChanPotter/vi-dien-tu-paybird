// eslint-disable-next-line react/prop-types
export function MyButton({ children, className }) {
	return (
		<button
			className={`text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 me-2 ${className}`}
		>
			{children}
		</button>
	);
}
