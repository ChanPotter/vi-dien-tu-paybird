// eslint-disable-next-line react/prop-types
export function SearchBar({ searchQuery, setSearchQuery, className }) {
	return (
		<form
			className={`w-full max-w-md ${className}`}
			onSubmit={(e) => e.preventDefault()}
		>
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only"
			>
				Search
			</label>
			<div className="relative">
				{/* Icon search */}
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>

				{/* Input search */}
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Search events..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					required
				/>

				{/* Button search */}
				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>
			</div>
		</form>
	);
}
