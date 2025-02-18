const LinkBank = () => {
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
					<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
						Liên kết ngân hàng
					</button>
				</div>

				{/* Cột 2 (1 phần): Dấu cộng */}
				<div className="flex items-center justify-center col-span-1">
					<button
						type="button"
						className="w-12 h-12 bg-red-500 text-white font-bold text-3xl flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 transition-colors"
					>
						+
					</button>
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
					<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
						Liên kết thẻ, Visa
					</button>
				</div>
			</div>
		</div>
	);
};

export default LinkBank;
