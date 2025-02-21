import bank from '../../assets/icon/bank.png';
import computer from '../../assets/icon/computer.png';
import user from '../../assets/icon/user.png';
import { useNavigate } from 'react-router-dom';

const MoneyCard = () => {
	const navigate = useNavigate();
	return (
		<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<p className="text-2xl font-bold mb-6 text-center">
				Bạn muốn chuyển tiền cho ai?
			</p>
			<div className="mb-5">
				<input
					id="amount"
					type="text"
					className="w-full px-4 py-5 text-center text-4xl border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
					placeholder="0,00 Đ"
				/>
			</div>
			<div className="mb-4 relative">
				<input
					id="bank"
					type="text"
					className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
					placeholder="Chọn Ngân Hàng..."
				/>
				<img
					src={bank}
					alt="Bank Icon"
					className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
				/>
			</div>
			<div className="mb-4 relative">
				<input
					id="account"
					type="text"
					className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
					placeholder="Nhập Số Tài Khoản..."
				/>
				<img
					src={computer}
					alt="Bank Icon"
					className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
				/>
			</div>
			<div className="mb-8 relative">
				<input
					id="name"
					type="text"
					className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
					placeholder="Tên Chủ Tài Khoản..."
				/>
				<img
					src={user}
					alt="Bank Icon"
					className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
				/>
			</div>
			<div className="space-y-3">
				<button className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-[#1A73E8]">
					Tiếp tục
				</button>

				<button
					className="w-full py-2 text-gray-700 shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-100"
					onClick={() => navigate(-1)} // Quay lại trang trước đó
				>
					Hủy
				</button>
			</div>
		</div>
	);
};

export default MoneyCard;
