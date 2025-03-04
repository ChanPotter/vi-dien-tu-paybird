/* eslint-disable react/prop-types */
import bank from '../../../../database/Bank.json';
import { MyAllBankCard } from '../../../lit-wrapper';
import { useNavigate } from 'react-router-dom';

const MultipleBank = ({ searchQuery }) => {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/Dashboard/SelectBank/${id}`);
	};

	// Lọc ngân hàng theo từ khóa tìm kiếm (không phân biệt hoa/thường)
	const filteredBanks = bank.filter(
		(item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="max-w-screen w-full bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<h1 className="text-2xl font-inder text-center mb-4 text-gray-700 p-6">
				Tất cả ngân hàng
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-10 p-4">
				{filteredBanks.length > 0 ? (
					filteredBanks.map((item) => (
						<MyAllBankCard
							key={item.id}
							item={JSON.stringify(item)}
							onClick={() => handleClick(item.id)}
						/>
					))
				) : (
					<p className="text-center text-gray-500 col-span-full">
						Không tìm thấy ngân hàng nào.
					</p>
				)}
			</div>
		</div>
	);
};

export default MultipleBank;
