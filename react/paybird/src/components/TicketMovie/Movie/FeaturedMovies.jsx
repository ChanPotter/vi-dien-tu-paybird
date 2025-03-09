/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const FeaturedMovies = ({ movies, onSelectMovie, sectionId }) => {
	// Sắp xếp phim theo rating (giảm dần) để gán thứ hạng
	const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: 'easeOut',
			},
		}),
		hover: {
			scale: 1.05,
			y: -10,
			boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
	};

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.3 } },
	};

	return (
		<div className="mb-12">
			<h2
				className={`text-3xl max-sm:text-lg font-bold mb-6 text-white inline-block px-4 py-1 rounded-full shadow-md ${
					sectionId === 'featured'
						? 'bg-gradient-to-r from-purple-500 to-indigo-500'
						: 'bg-gradient-to-r from-blue-500 to-teal-500'
				}`}
			>
				{sectionId === 'featured' ? 'Phim Nổi Bật' : 'Phim Đang Chiếu'}
			</h2>
			<div className="flex overflow-x-auto space-x-6 px-2 py-4 scrollbar-hide snap-x snap-mandatory">
				{sortedMovies.map((movie, index) => (
					<motion.div
						key={movie.id}
						custom={index}
						initial="hidden"
						animate="visible"
						whileHover="hover"
						variants={cardVariants}
						className="relative bg-white shrink-0 w-64 snap-center rounded-xl shadow-lg overflow-hidden cursor-pointer"
					>
						<div className="relative">
							<img
								src={movie.poster}
								alt={movie.title}
								className="w-full h-64 object-cover"
							/>
							<motion.div
								variants={overlayVariants}
								initial="hidden"
								whileHover="visible"
								className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
							>
								<p className="text-white text-sm font-semibold">
									{movie.genre}
								</p>
								<p className="text-white text-sm">{movie.duration} phút</p>
								<div className="flex items-center gap-2 mt-2">
									<span className="text-yellow-400">★</span>
									<span className="text-white font-semibold">
										{movie.rating}/10
									</span>
									<span className="text-gray-300 text-xs">
										({movie.reviews} đánh giá)
									</span>
								</div>
							</motion.div>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									delay: index * 0.2 + 0.3,
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
							>
								{movie.ageRating}
							</motion.div>
							{/* Thêm thứ hạng */}
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									delay: index * 0.2 + 0.4,
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
							>
								#{index + 1}
							</motion.div>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg text-gray-800 truncate">
								{movie.title}
							</h3>
							{/* Bỏ thông tin trùng lặp, chỉ giữ thứ hạng */}
							<ScrollLink
								to="cinema-selector"
								smooth={true}
								duration={500}
								offset={-100}
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 shadow-md"
									onClick={() => onSelectMovie(movie.title)}
								>
									Đặt vé ngay
								</motion.button>
							</ScrollLink>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default FeaturedMovies;
