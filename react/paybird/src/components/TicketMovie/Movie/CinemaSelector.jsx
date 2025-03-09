/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const CinemaSelector = ({ cinemas, selectedCinema, setSelectedCinema }) => {
	return (
		<motion.div
			id="cinema-selector" // Thêm ID để scroll đến
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className="mb-8"
		>
			<h2 className="text-2xl font-bold mb-3 text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full">
				Chọn Rạp
			</h2>
			<select
				className="w-full p-4 border-2 border-purple-300 rounded-xl focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-white bg-opacity-90 text-gray-800 shadow-md"
				value={selectedCinema}
				onChange={(e) => setSelectedCinema(e.target.value)}
			>
				<option value="">Chọn rạp chiếu phim</option>
				{cinemas.map((cinema) => (
					<option key={cinema.id} value={cinema.name}>
						{cinema.name}
					</option>
				))}
			</select>
		</motion.div>
	);
};

export default CinemaSelector;
