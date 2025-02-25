import { useState } from 'react';
import bank from '../../../assets/icon/bank1.png';
import card from '../../../assets/icon/card.png';
import { Link } from 'react-router-dom';
const LinkBank = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className="flex justify-center items-center pb-8 p-4">
			<div className="grid grid-cols-11 gap-6 justify-items-center">
				{/* Cột 1 (5 phần) */}
				<div className="flex flex-col col-span-5 items-center text-center max-w-xl">
					<img
						src="https://www.paypalobjects.com/paypal-ui/illustrations/focused/svg/empty-state-add-fi.svg"
						alt="Add Bank"
						className="w-35 h-32"
					/>
					<h2 className="text-xl font-semibold mt-4">
						Liên kết tài khoản ngân hàng mới
					</h2>
					<p className="text-gray-500 text-md mt-2 max-md:hidden">
						Hãy tham gia cùng hàng triệu khách hàng sử dụng PayPal để thanh toán
						cho các giao dịch mua sắm hàng ngày mọi lúc mọi nơi.
					</p>
					<Link to="/Dashboard/SelectBank">
						<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
							Liên kết ngân hàng
						</button>
					</Link>
				</div>

				{/* Cột 2 (1 phần): Dấu cộng */}
				<div className="flex items-center justify-center col-span-1">
					<button
						type="button"
						className="w-12 h-12 bg-red-500 text-white font-bold text-3xl flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 transition-colors"
						onClick={() => setIsModalOpen(true)}
					>
						+
					</button>
					{isModalOpen && (
						<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
							<div className="bg-white p-6 rounded-lg shadow-lg w-96">
								<h2 className="text-xl font-bold mb-4 text-center">
									Nạp tiền vào PayBird
								</h2>

								{/* Danh sách phương thức nạp tiền */}
								<div className="space-y-6">
									{/* Liên kết ngân hàng - Option 1 */}
									<Link to="/Dashboard/SelectBank">
										<div className="flex items-center p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100 mb-2">
											<img
												src={bank}
												alt="Ngân hàng"
												className="w-12 h-12 mr-4"
											/>
											<div>
												<p className="font-semibold">Liên kết ngân hàng</p>
												<p className="text-sm text-gray-600">
													Nạp tiền miễn phí từ ngân hàng ngay trên website
													PayBird
												</p>
											</div>
										</div>
									</Link>

									{/* Liên kết ngân hàng - Option 2 (Thẻ) */}
									<Link to="/Dashboard/LinkCard">
										<div className="flex items-center p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100">
											<img
												src={card}
												alt="Thẻ ngân hàng"
												className="w-12 h-12 mr-4"
											/>
											<div>
												<p className="font-semibold">Liên kết thẻ ngân hàng</p>
												<p className="text-sm text-gray-600">
													Nạp tiền miễn phí từ thẻ ngân hàng ngay trên website
													PayBird
												</p>
											</div>
										</div>
									</Link>
								</div>

								{/* Nút đóng */}
								<div className="flex justify-center mt-4">
									<button
										className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 cursor-pointer"
										onClick={() => setIsModalOpen(false)}
									>
										Đóng
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* Cột 3 (5 phần) */}
				<div className="flex flex-col col-span-5 items-center text-center max-w-xl">
					<img
						src="https://www.paypalobjects.com/paypal-ui/illustrations/focused/svg/empty-state-add-fi.svg"
						alt="Add Bank"
						className="w-35 h-32"
					/>
					<h2 className="text-xl font-semibold mt-4">
						Liên kết thẻ ngân hàng, VISA mới
					</h2>
					<p className="text-gray-500 text-md mt-2 max-md:hidden">
						Hãy tham gia cùng hàng triệu khách hàng sử dụng PayPal để thanh toán
						cho các giao dịch mua sắm hàng ngày mọi lúc mọi nơi.
					</p>
					<Link to="/Dashboard/LinkCard">
						<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 cursor-pointer">
							Liên kết thẻ, Visa
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LinkBank;
