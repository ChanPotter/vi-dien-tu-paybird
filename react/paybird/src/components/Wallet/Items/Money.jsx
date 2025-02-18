import pic1 from '../../../assets/icon/transfer.png';
import pic2 from '../../../assets/icon/dollar.png';
import pic3 from '../../../assets/icon/donation.png';

export const Data = [
	{ name: 'Chuyển Tiền', icon: pic1 },
	{ name: 'Nhận Tiền', icon: pic2 },
	{ name: 'Nạp Tiền', icon: pic3 },
];

const Money = () => {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-4 sm:px-8">
			{/* Grid chia cột theo màn hình */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center w-full max-w-4xl">
				{/* Cột trái: Số dư khả dụng */}
				<div className="lg:col-span-2 bg-blue-600 text-white p-10 rounded-4xl text-center flex flex-col items-center justify-center w-full">
					<p className="text-xl sm:text-2xl font-semibold">Số Dư Khả Dụng</p>
					<p className="text-4xl sm:text-5xl font-bold mt-4">0,00 $</p>
				</div>

				{/* Cột phải: Danh sách chức năng */}
				<div className="lg:col-span-3 bg-green-500 rounded-4xl p-6 sm:p-10 flex flex-wrap justify-around items-center gap-4 sm:gap-6 w-full">
					{Data.map((item, index) => (
						<button
							key={index}
							className="flex flex-col items-center cursor-pointer focus:outline-none active:scale-95 transition-all"
						>
							<div className="bg-white p-4 rounded-full shadow-md">
								<img
									src={item.icon}
									alt={item.name}
									className="w-16 sm:w-20 h-16 sm:h-20"
								/>
							</div>
							<p className="mt-2 text-white font-medium text-sm sm:text-base">
								{item.name}
							</p>
						</button>
					))}
				</div>
			</div>

			{/* Nút "Khám phá thêm" */}
			<button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 text-sm sm:text-base">
				Khám phá thêm
			</button>
		</div>
	);
};

export default Money;
