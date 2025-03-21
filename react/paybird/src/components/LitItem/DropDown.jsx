import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MyDropdown } from '../lit-wrapper';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function DropDown({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/Login');
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{/* Nút dropdown */}
			<button
				className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
			>
				{children}
				<svg
					className="w-2.5 h-2.5 ms-3"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{/* Menu dropdown */}
			{isOpen && <MyDropdown onClick={handleLogin}></MyDropdown>}
		</div>
	);
}
