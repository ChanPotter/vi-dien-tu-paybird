/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';

const TimeSelector = ({
	movies,
	selectedMovie,
	selectedTime,
	setSelectedTime,
}) => {
	return (
		<AnimatePresence>
			{selectedMovie && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className="mb-8"
				>
					<h2 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full">
						Chọn Giờ Chiếu
					</h2>
					<div className="flex flex-wrap gap-4">
						{movies
							.find((m) => m.title === selectedMovie)
							?.times.map((time) => (
								<motion.button
									key={time}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className={`px-6 py-3 rounded-full font-semibold transition-colors shadow-md ${
										selectedTime === time
											? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
											: 'bg-white bg-opacity-90 text-gray-800 hover:bg-opacity-100'
									}`}
									onClick={() => setSelectedTime(time)}
								>
									{time}
								</motion.button>
							))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TimeSelector;
