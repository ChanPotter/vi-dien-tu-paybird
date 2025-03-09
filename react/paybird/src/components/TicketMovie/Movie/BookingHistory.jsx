/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';

const BookingHistory = ({ bookingHistory }) => {
	return (
		<AnimatePresence>
			{bookingHistory.length > 0 && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mt-12"
				>
					<h2 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full">
						Lịch Sử Đặt Vé
					</h2>
					<div className="space-y-6">
						{bookingHistory.map((booking, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
								className="p-6 border-2 border-purple-300 rounded-xl bg-white bg-opacity-90 shadow-md"
							>
								<p>
									<strong>Rạp:</strong> {booking.cinema}
								</p>
								<p>
									<strong>Phim:</strong> {booking.movie}
								</p>
								<p>
									<strong>Giờ:</strong> {booking.time}
								</p>
								<p>
									<strong>Ghế:</strong> {booking.seats.join(', ')}
								</p>
								<p>
									<strong>Tổng tiền:</strong> {booking.total.toLocaleString()}{' '}
									VNĐ
								</p>
								<p>
									<strong>Thời gian đặt:</strong> {booking.date}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BookingHistory;
