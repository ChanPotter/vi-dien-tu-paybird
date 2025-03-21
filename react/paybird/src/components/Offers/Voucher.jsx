import vouchers from '../../database/Voucher.json';
const Voucher = () => {
	return (
		<div className="max-w-7xl mx-auto mb-15">
			<div className="mt-10  max-xl:p-4">
				<h2 className="text-2xl font-semibold mb-4">Mua sắm</h2>
				<div className="flex gap-8 overflow-x-auto scrollbar-hide">
					{vouchers.map((voucher) => (
						<div
							key={voucher.id}
							className="bg-white rounded-xl shadow-xl min-w-[300px] border border-gray-300"
						>
							<img
								src={voucher.image}
								alt={voucher.name}
								className="rounded-xl w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-bold">{voucher.name}</h3>
								<p className="text-gray-500">{voucher.description}</p>
								<button className="mt-5 w-full bg-white text-blue-700 font-inder border border-blue-700 py-2 rounded-xl hover:bg-blue-700 hover:text-white cursor-pointer">
									Thu thập
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-9  max-xl:p-4">
				<h2 className="text-2xl font-semibold mb-4">Hóa đơn</h2>
				<div className="flex gap-8 overflow-x-auto scrollbar-hide">
					{vouchers.map((voucher) => (
						<div
							key={voucher.id}
							className="bg-white rounded-xl shadow-xl min-w-[300px] border border-gray-300"
						>
							<img
								src={voucher.image}
								alt={voucher.name}
								className="rounded-xl w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-bold">{voucher.name}</h3>
								<p className="text-gray-500">{voucher.description}</p>
								<button className="mt-5 w-full bg-white text-blue-700 font-inder border border-blue-700 py-2 rounded-xl hover:bg-blue-700 hover:text-white cursor-pointer">
									Thu thập
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mt-9 max-xl:p-4">
				<h2 className="text-2xl font-semibold mb-4">Ăn uống</h2>
				<div className="flex gap-8 overflow-x-auto scrollbar-hide">
					{vouchers.map((voucher) => (
						<div
							key={voucher.id}
							className="bg-white rounded-xl shadow-xl min-w-[300px] border border-gray-300"
						>
							<img
								src={voucher.image}
								alt={voucher.name}
								className="rounded-xl w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-bold">{voucher.name}</h3>
								<p className="text-gray-500">{voucher.description}</p>
								<button className="mt-5 w-full bg-white text-blue-700 font-inder border border-blue-700 py-2 rounded-xl hover:bg-blue-700 hover:text-white cursor-pointer">
									Thu thập
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Voucher;
