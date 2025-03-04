import { SearchBar } from '../../../LitItem/SearchBar';
import { HeaderDashboard, Footer } from '../../../Header-Footer/index';
import bank from '../../../../database/Bank.json';
import MultipleBank from './MultipleBank';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MySelectBankCard } from '../../../lit-wrapper';

const SelectBank = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

	const handleClick = (id) => {
		navigate(`/Dashboard/SelectBank/${id}`); // Dùng ID
		// Nếu dùng name thì: navigate(`/bank/${encodeURIComponent(name)}`);
	};
	return (
		<div className="min-h-screen">
			<HeaderDashboard />
			<div className="bg-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col items-center">
				<div className="w-full max-w-4xl">
					<div className="rounded-lg text-center">
						<h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
							Chọn Ngân Hàng
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
			{searchQuery === '' && (
				<div className="mb-5">
					<h2 className="text-2xl font-inder text-center py-5 mt-1 text-gray-700">
						Ngân hàng nổi bật
					</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
						{bank.map((item) => (
							<MySelectBankCard
								key={item.id}
								item={JSON.stringify(item)}
								onClick={(e) => handleClick(item.id)}
							/>
						))}
					</div>
				</div>
			)}
			<div className="p-6">
				<MultipleBank searchQuery={searchQuery} />
			</div>
			<Footer></Footer>
		</div>
	);
};
export default SelectBank;
