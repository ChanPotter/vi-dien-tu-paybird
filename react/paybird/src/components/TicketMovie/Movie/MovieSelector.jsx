/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';

const MovieSelector = ({
	movies,
	selectedCinema,
	selectedMovie,
	setSelectedMovie,
}) => {
	return (
		<AnimatePresence>
			{selectedCinema && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className="mb-8"
				>
					<h2 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full">
						Chọn Phim
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{movies.map((movie) => (
							<motion.div
								key={movie.id}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 shadow-md ${
									selectedMovie === movie.title
										? 'border-purple-500 bg-purple-50'
										: 'border-gray-200 bg-white bg-opacity-90'
								}`}
								onClick={() => setSelectedMovie(movie.title)}
							>
								<img
									src={movie.poster}
									alt={movie.title}
									className="w-full h-48 object-cover rounded-lg mb-3 shadow"
								/>
								<h3 className="font-bold text-lg text-gray-800">
									{movie.title}
								</h3>
								<p className="text-sm text-gray-600">
									{movie.genre} • {movie.duration} phút
								</p>
								<div className="flex items-center gap-2 mt-2">
									<span className="text-yellow-500">★</span>
									<span className="text-gray-700">{movie.rating}/10</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MovieSelector;
