/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';

const SeatSelector = ({
	seats,
	selectedTime,
	selectedSeats,
	bookedSeats,
	getBookingKey,
	handleSeatClick,
	calculateTotal,
}) => {
	return (
		<AnimatePresence>
			{selectedTime && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className="mb-10"
				>
					<h2 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full">
						Chọn Ghế
					</h2>
					<div className="text-center mb-6">
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: '75%' }}
							transition={{ duration: 0.5 }}
							className="inline-block h-4 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full mx-auto shadow"
						/>
						<p className="text-sm text-gray-200 mt-2">Màn hình</p>
					</div>
					<div className="grid gap-4 justify-center">
						{seats.map((seatRow, rowIndex) => (
							<div key={rowIndex} className="flex gap-3 justify-center">
								{seatRow.row.map((seat) => {
									const isBooked = (
										bookedSeats[getBookingKey()] || []
									).includes(seat);
									const isSelected = selectedSeats.includes(seat);
									return (
										<motion.button
											key={seat}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className={`w-14 h-14 rounded-lg font-semibold transition-colors shadow ${
												isBooked
													? 'bg-red-600 text-white cursor-not-allowed'
													: isSelected
														? 'bg-green-500 text-white'
														: seatRow.type === 'vip'
															? 'bg-gradient-to-br from-purple-400 to-indigo-400 text-white hover:from-purple-500 hover:to-indigo-500'
															: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
											}`}
											onClick={() => handleSeatClick(seat)}
											disabled={isBooked}
										>
											{seat}
										</motion.button>
									);
								})}
							</div>
						))}
					</div>
					<div className="mt-6 flex justify-center gap-6 text-sm text-gray-200">
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-gray-100 rounded"></div>
							<span>Thường (80K)</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-indigo-400 rounded"></div>
							<span>VIP (120K)</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-green-500 rounded"></div>
							<span>Đang chọn</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-4 h-4 bg-red-600 rounded"></div>
							<span>Đã đặt</span>
						</div>
					</div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mt-4 text-center text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 inline-block px-4 py-1 rounded-full"
					>
						Tổng tiền: {calculateTotal().toLocaleString()} VNĐ
					</motion.p>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SeatSelector;
