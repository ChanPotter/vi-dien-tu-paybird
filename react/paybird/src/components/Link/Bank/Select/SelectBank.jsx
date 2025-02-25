import { SearchBar } from '../../../LitItem/SearchBar';
import { HeaderDashboard, Footer } from '../../../Header-Footer/index';
import bank from '../../../../database/Bank.json';
import MultipleBank from './MultipleBank';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
							<div
								key={item.id}
								onClick={() => handleClick(item.id)}
								className="border border-gray-100 rounded-lg p-4 text-center shadow-md cursor-pointer hover:shadow-xl transition"
							>
								<img
									src={item.image}
									alt={item.name}
									className="w-20 h-20 mx-auto mb-2 p-1"
								/>
								<h3 className="text-lg font-inder">{item.name}</h3>
								<p className="text-gray-500 text-sm max-lg:hidden">
									{item.description}
								</p>
							</div>
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
