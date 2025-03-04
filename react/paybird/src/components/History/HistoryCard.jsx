/* eslint-disable react/prop-types */
import { useState } from 'react';
import transactions from '../../database/History.json';
import { MyHistoryCard } from '../lit-wrapper';

const HistoryCard = ({ searchQuery }) => {
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedYear, setSelectedYear] = useState('');

	// Lọc giao dịch theo tháng và năm
	const filteredTransactions = transactions.filter((item) => {
		const [month, year] = item.date.split('/');
		return (
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(selectedMonth === '' || month === selectedMonth) &&
			(selectedYear === '' || year === selectedYear)
		);
	});
	return (
		<div className="space-y-3 p-5 bg-white shadow-lg pb-9 pt-5">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-center mb-5 space-y-3">
				<div className="flex items-center space-x-2">
					<span className="text-gray-700 font-medium">Tháng:</span>
					<select
						className="border rounded-md p-1 text-gray-700"
						value={selectedMonth}
						onChange={(e) => setSelectedMonth(e.target.value)}
					>
						<option value="">Tất cả</option>
						{Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
							<option key={month} value={month.toString().padStart(2, '0')}>
								{month}
							</option>
						))}
					</select>

					<span className="text-gray-700 font-medium">Năm:</span>
					<select
						className="border rounded-md p-1 text-gray-700"
						value={selectedYear}
						onChange={(e) => setSelectedYear(e.target.value)}
					>
						<option value="">Tất cả</option>
						{[2023, 2024, 2025].map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>

				{/* Hiển thị tháng và năm hiện tại */}
				<div className="flex items-center space-x-2">
					<span className="text-gray-700 font-medium">
						{`Tháng ${new Date().getMonth() + 1}-${new Date().getFullYear()}`}
					</span>
				</div>
			</div>

			{/* Danh sách giao dịch */}
			{filteredTransactions.length > 0 ? (
				filteredTransactions.map((item) => (
					<div
						key={item.id}
						className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 cursor-pointer hover:shadow-lg transition text-center sm:text-left"
					>
						{/* Icon thẻ */}
						<img
							src={item.card.image}
							alt={item.card.type}
							className="w-14 h-14 shadow-lg"
						/>

						{/* Thông tin giao dịch */}
						<div className="flex-1 w-full">
							<h3 className="text-lg font-semibold">{item.name}</h3>
							<p className="text-gray-500 text-sm line-clamp-2">
								{item.description}
							</p>

							{/* Hiển thị dưới 500px - Căn giữa */}
							<div className="block sm:hidden mt-3 text-center">
								<p
									className={`text-lg font-semibold ${
										item.amount < 0 ? 'text-red-500' : 'text-green-500'
									}`}
								>
									{item.amount.toLocaleString()} {item.currency}
								</p>
								<div className="flex justify-center space-x-2 text-gray-500 text-sm">
									<p>{item.time}</p>
									<p>{item.date}</p>
								</div>
							</div>
						</div>

						{/* Số tiền và thời gian - Chỉ hiển thị trên 500px */}
						<div className="hidden sm:block text-right">
							<p
								className={`text-lg font-semibold ${
									item.amount < 0 ? 'text-red-500' : 'text-green-500'
								}`}
							>
								{item.amount.toLocaleString()} {item.currency}
							</p>
							<p className="text-gray-500 text-sm">{item.time}</p>
							<p className="text-gray-500 text-sm">{item.date}</p>
						</div>
					</div>
				))
			) : (
				<div className="w-full sm:w-[500px] md:w-[600px] lg:w-[667px] border border-white rounded-lg p-4 shadow-sm text-center py-10 px-10 mx-auto">
					<p className="text-gray-500">Không có giao dịch nào.</p>
				</div>
			)}
		</div>
	);
};

export default HistoryCard;
