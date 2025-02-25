import { useParams } from 'react-router-dom';
import bank from '../../../../database/Bank.json';
import { HeaderDashboard, Footer } from '../../../Header-Footer/index';
import TransCard from './TransCard';

const Transaction = () => {
	const { id } = useParams(); // Nhận ID từ URL
	// const { name } = useParams(); // Nếu dùng name

	const selectedBank = bank.find((item) => item.id.toString() === id);
	// const selectedBank = bank.find((item) => item.name === decodeURIComponent(name));

	// Xử lý khi nhấn vào nút liên kết

	return (
		<div className="bg-white">
			<HeaderDashboard />
			<h1 className="text-3xl font-inder text-center mt-5 py-5">
				{' '}
				Liên kết {selectedBank.name}
			</h1>
			<div className="flex justify-center mb-15">
				<TransCard bank={selectedBank.name} />
			</div>
			<Footer />
		</div>
	);
};

export default Transaction;
