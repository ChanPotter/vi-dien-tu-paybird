import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import bill from '../../database/Bill.json';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { SearchBar } from '../LitItem/SearchBar';
import { MyBillCard } from '../lit-wrapper';
import BillCard from './BillCard';
const Bill = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

	const handleClick = (id) => {
		navigate(`/Dashboard/2/${id}`); // Dùng ID
		// Nếu dùng name thì: navigate(`/bank/${encodeURIComponent(name)}`);
	};
	const bills = [
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
		{ code: 'PB19020041367', amount: '459.292' },
	];
	// Lọc ngân hàng theo từ khóa tìm kiếm (không phân biệt hoa/thường)
	const filteredBills = bill.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);
	return (
		<div className="min-h-screen">
			<HeaderDashboard />
			<div className="bg-blue-400 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col items-center">
				<div className="w-full max-w-4xl">
					<div className="rounded-lg text-center">
						<h1 className="text-3xl sm:text-3xl font-semibold text-white mb-3">
							Hóa Đơn
						</h1>
					</div>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						className="w-full !max-w-lg mx-auto"
					/>
				</div>
			</div>

			{/* Ẩn phần này nếu searchQuery có giá trị */}
			<div className="mb-5 mt-6 px-4 md:px-10 lg:px-20">
				<h2 className="text-2xl font-semibold p-4">Thanh toán hóa đơn</h2>
				<div className="grid grid-cols-3 md:grid-cols-4 gap-5 p-4 mx-auto max-w-8xl">
					{filteredBills.length > 0 ? (
						filteredBills.map((item) => (
							<MyBillCard
								key={item.id}
								item={JSON.stringify(item)}
								onClick={() => handleClick(item.id)}
							/>
						))
					) : (
						<p className="col-span-3 md:col-span-4 text-center text-gray-500">
							Không tìm thấy hóa đơn nào.
						</p>
					)}
				</div>
			</div>

			<div className="mb-5 mt-6 px-4 md:px-10 lg:px-20">
				<h2 className="text-2xl font-semibold p-4">Hóa đơn chưa thanh toán</h2>
				<div className="w-full overflow-x-auto whitespace-nowrap p-2 scrollbar-hide">
					<div className="flex space-x-4">
						{bills.map((bill, index) => (
							<div key={index} className="min-w-[230px] flex-shrink-0">
								<BillCard bill={bill} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
export default Bill;
