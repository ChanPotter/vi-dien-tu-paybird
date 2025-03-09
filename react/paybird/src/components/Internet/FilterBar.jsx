import { useState } from 'react';
import PackageList from './PackageList';

const filterOptions = [
	{ day: 'Tất cả' },
	{ day: '30 ngày' },
	{ day: '15 ngày' },
	{ day: '7 ngày' },
	{ day: '3 ngày' },
	{ day: '1 ngày' },
];

const networks = ['Viettel', 'Vinaphone', 'Mobifone', 'Vietnamobile'];

const FilterBar = () => {
	const [selected, setSelected] = useState('Tất cả');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);

	return (
		<div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<div className="text-3xl text-center font-semibold bg-blue-500 text-white rounded-2xl p-6 max-sm:bg-white max-sm:text-blue-500 max-sm:text-4xl max-sm:p-0">
				Nạp dữ liệu
			</div>

			{/* Form nhập số điện thoại và chọn nhà mạng */}
			<div className="p-5">
				<div className="text-lg font-bold mb-3">Nạp cho thuê bao</div>
				<div className="flex flex-col sm:flex-row gap-4">
					{/* Input nhập số điện thoại */}
					<input
						type="tel"
						placeholder="Nhập số điện thoại"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className="w-full sm:w-2/3 p-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
					/>

					{/* Dropdown chọn nhà mạng */}
					<select
						value={selectedNetwork}
						onChange={(e) => setSelectedNetwork(e.target.value)}
						className="w-full sm:w-1/3 p-3 border rounded-lg text-lg bg-white focus:ring-2 focus:ring-blue-500"
					>
						{networks.map((network, index) => (
							<option key={index} value={network}>
								{network}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Thanh filter cuộn ngang */}
			<div className="overflow-x-auto">
				<div className="flex gap-2 p-4 rounded-lg whitespace-nowrap overflow-x-auto scrollbar-hide">
					{filterOptions.map((item, index) => (
						<button
							key={index}
							onClick={() => setSelected(item.day)}
							className={`px-4 py-2 rounded-xl cursor-pointer border transition 
								${
									selected === item.day
										? 'text-blue-600 border-blue-600 bg-blue-200'
										: 'bg-blue-100 text-gray-700 border-gray-300 hover:bg-gray-200'
								}`}
						>
							{item.day}
						</button>
					))}
				</div>
			</div>
			<PackageList selectedDay={selected} />
		</div>
	);
};

export default FilterBar;
