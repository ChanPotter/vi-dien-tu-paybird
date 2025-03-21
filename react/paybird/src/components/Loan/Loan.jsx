import { HeaderDashboard, Footer } from '../Header-Footer/index';
import List from './LoanDetail';
import pic from '../../assets/images/8.png';
import loan from '../../database/Loan.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../LitItem/SearchBar';
import { MySelectBankCard } from '../lit-wrapper';

const Loan = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();
	const handleClick = (id) => {
		navigate(`/Dashboard/5/${id}`); // Dùng ID
		// Nếu dùng name thì: navigate(`/bank/${encodeURIComponent(name)}`);
	};
	const filteredLoans = loan.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);
	return (
		<div className="">
			<HeaderDashboard />
			<div className="relative flex items-center justify-center">
				<img
					src={pic}
					alt="Offers"
					className="img-fluid w-full max-h-30 sm:max-h-50 object-cover brightness-85"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
					<h1 className="text-white text-3xl font-bold px-6 py-3 rounded-lg">
						TRẢ KHOẢN VAY
					</h1>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						className="w-full max-w-lg mx-auto"
					/>
				</div>
			</div>

			<div className="mb-5">
				<h2 className="text-2xl font-inder text-center py-5 mt-1 text-gray-700">
					Nguồn vay nổi bật
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
					{filteredLoans.length > 0 ? (
						filteredLoans.map((item) => (
							<MySelectBankCard
								key={item.id}
								item={JSON.stringify(item)}
								onClick={() => handleClick(item.id)}
							/>
						))
					) : (
						<p className="text-center col-span-full text-gray-500">
							Không tìm thấy kết quả nào
						</p>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Loan;
