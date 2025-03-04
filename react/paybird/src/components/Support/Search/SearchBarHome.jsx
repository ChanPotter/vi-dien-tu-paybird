import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import faqData from '../../../database/Question.json';

// eslint-disable-next-line react/prop-types
export function SearchBarHome({ searchQuery, setSearchQuery, className }) {
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const value = e.target.value;
		setSearchQuery(value);

		if (value.length > 0) {
			const filteredSuggestions = faqData
				.filter((item) =>
					item.question.toLowerCase().includes(value.toLowerCase())
				)
				.map((item) => ({ question: item.question, id: item.id })); // Giữ cả id và question
			setSuggestions(filteredSuggestions.slice(0, 5));
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (suggestion) => {
		setSearchQuery(suggestion.question);
		setSuggestions([]);
		navigate(`/Support/${suggestion.id}`); // Điều hướng với id
	};

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

				<input
					type="search"
					id="default-search"
					className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Search events..."
					value={searchQuery}
					onChange={handleInputChange}
					required
				/>

				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>

				{suggestions.length > 0 && (
					<ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								className="p-2 text-gray-900 hover:bg-blue-50 cursor-pointer"
								onClick={() => handleSuggestionClick(suggestion)}
							>
								{suggestion.question} {/* Chỉ hiển thị question */}
							</li>
						))}
					</ul>
				)}
			</div>
		</form>
	);
}

export default SearchBarHome;
