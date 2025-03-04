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

const FilterBar = () => {
	const [selected, setSelected] = useState('Tất cả');

	return (
		<div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<div className="text-3xl text-center font-semibold bg-blue-500 text-white rounded-2xl p-6 max-sm:bg-white max-sm:text-blue-500 max-sm:text-4xl">
				Nạp dữ liệu
			</div>
			{/* Thanh filter cuộn ngang */}
			<div className="overflow-x-auto">
				<div className="flex justify-center gap-2 p-4 rounded-lg whitespace-nowrap overflow-x-auto scrollbar-hide">
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
			<PackageList />
		</div>
	);
};

export default FilterBar;
