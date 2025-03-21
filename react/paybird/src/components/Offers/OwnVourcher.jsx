import { HeaderDashboard, Footer } from '../Header-Footer/index';
import pic from '../../assets/images/8.png';
import vouchers from '../../database/Voucher.json';
const OwnVoucher = () => {
	return (
		<div className="bg-gray-50 min-h-screen">
			<HeaderDashboard />
			<div className="relative flex items-center justify-center">
				<img
					src={pic}
					alt="Offers"
					className="img-fluid w-full max-h-30 sm:max-h-50  object-cover brightness-85"
				/>
				<h1 className="absolute text-white text-3xl font-bold px-4 py-2 rounded-lg">
					ƯU ĐÃI CỦA BẠN
				</h1>
			</div>
			<div className="mb-3">
				<div className="max-w-7xl mx-auto mb-15">
					<div className="mt-10  max-xl:p-4">
						<h2 className="text-2xl font-semibold mb-4">Voucher</h2>
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
											Sử dụng
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};
export default OwnVoucher;
