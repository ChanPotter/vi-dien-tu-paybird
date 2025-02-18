const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<section className="bg-blue-500">
			<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<nav className="flex flex-wrap justify-center -mx-5 -my-2">
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-00"
						>
							About
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-500"
						>
							Blog
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-500"
						>
							Team
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-500"
						>
							Pricing
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-500"
						>
							Contact
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-200 hover:text-gray-500"
						>
							Terms
						</a>
					</div>
				</nav>
				<div className="flex justify-center mt-8 space-x-6">
					<a href="#" className="text-gray-100 hover:text-gray-500">
						<span className="sr-only">GitHub</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 
            0-.237-.009-.868-.014-1.704-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.109-1.462-1.109-1.462-.907-.62.069-.607.069-.607 
            1.003.07 1.532 1.03 1.532 1.03.89 1.525 2.34 1.085 2.91.83.09-.646.35-1.085.636-1.334-2.22-.253-4.555-1.11-4.555-4.943 
            0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.845c.85.004 
            1.705.114 2.505.334 1.91-1.294 2.75-1.025 2.75-1.025.543 1.376.2 2.393.097 2.646.64.699 1.029 1.592 1.029 
            2.683 0 3.842-2.34 4.687-4.566 4.936.36.31.678.92.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.576.688.477A10.013 
            10.013 0 0022 12c0-5.523-4.477-10-10-10z"
								clipRule="evenodd"
							/>
						</svg>
					</a>

					<a href="#" className="text-gray-100 hover:text-gray-500">
						<span className="sr-only">Facebook</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fillRule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
					<a href="#" className="text-gray-100 hover:text-gray-500">
						<span className="sr-only">Instagram</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5c3.07 0 5.25 2.18 5.25 5.25v8.5c0 3.07-2.18 5.25-5.25 5.25h-8.5c-3.07 0-5.25-2.18-5.25-5.25v-8.5c0-3.07 2.18-5.25 5.25-5.25zM12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zM17.25 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
						</svg>
					</a>
					<a href="#" className="text-gray-100 hover:text-gray-500">
						<span className="sr-only">YouTube</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M23.5 6.6c-.3-1.3-1.3-2.3-2.6-2.6C18.5 3.5 12 3.5 12 3.5s-6.5 0-8.9.5C1.8 4.3.8 5.3.5 6.6 0 9.1 0 12 0 12s0 2.9.5 5.4c.3 1.3 1.3 2.3 2.6 2.6 2.4.5 8.9.5 8.9.5s6.5 0 8.9-.5c1.3-.3 2.3-1.3 2.6-2.6.5-2.5.5-5.4.5-5.4s0-2.9-.5-5.4zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
						</svg>
					</a>

					<a href="#" className="text-gray-100 hover:text-gray-500">
						<span className="sr-only">Twitter</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
						</svg>
					</a>
				</div>
				{/* Copyright */}
				<p className="mt-8 text-base leading-6 text-center text-gray-400">
					&copy; {currentYear} Your Company. All rights reserved.
				</p>
			</div>
		</section>
	);
};
export default Footer;
