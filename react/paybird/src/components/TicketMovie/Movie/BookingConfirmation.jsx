/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';

const BookingConfirmation = ({
	showConfirmation,
	setShowConfirmation,
	selectedCinema,
	selectedMovie,
	selectedTime,
	selectedSeats,
	calculateTotal,
	confirmBooking,
}) => {
	return (
		<AnimatePresence>
			{showConfirmation && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						className="bg-white bg-opacity-95 rounded-2xl p-8 max-w-md w-full shadow-2xl"
					>
						<h2 className="text-2xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full text-white">
							Xác Nhận Đặt Vé
						</h2>
						<div className="space-y-3 text-gray-700">
							<p>
								<strong>Rạp:</strong> {selectedCinema}
							</p>
							<p>
								<strong>Phim:</strong> {selectedMovie}
							</p>
							<p>
								<strong>Giờ chiếu:</strong> {selectedTime}
							</p>
							<p>
								<strong>Ghế:</strong> {selectedSeats.join(', ')}
							</p>
							<p>
								<strong>Tổng tiền:</strong> {calculateTotal().toLocaleString()}{' '}
								VNĐ
							</p>
						</div>
						<div className="mt-8 flex justify-end gap-4">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 shadow"
								onClick={() => setShowConfirmation(false)}
							>
								Hủy
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 shadow"
								onClick={confirmBooking}
							>
								Xác nhận
							</motion.button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BookingConfirmation;
