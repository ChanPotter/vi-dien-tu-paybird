import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bank from '../../assets/icon/bank.png';
import computer from '../../assets/icon/computer.png';
import user from '../../assets/icon/user.png';
import Confirm from '../LitItem/Confirm';

const MoneyCard = () => {
	const navigate = useNavigate();
	const [amount, setAmount] = useState('');
	const [bankName, setBankName] = useState('');
	const [account, setAccount] = useState('');
	const [ownerName, setOwnerName] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [errors, setErrors] = useState({});

	const handleContinue = () => {
		if (validate()) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				setIsModalOpen(true);
			}, 2000);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const validate = () => {
		let newErrors = {};
		if (!amount || isNaN(amount) || Number(amount) < 1000) {
			newErrors.amount = 'Số tiền phải lớn hơn 1,000 VNĐ';
		}
		if (!bankName) {
			newErrors.bankName = 'Vui lòng chọn ngân hàng';
		}
		if (!account || !/^\d{9,16}$/.test(account)) {
			newErrors.account = 'Số tài khoản phải có 9-16 chữ số';
		}
		if (!ownerName || !/^[a-zA-ZÀ-ỹ\s]+$/.test(ownerName)) {
			newErrors.ownerName = 'Tên chủ tài khoản không hợp lệ';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	return (
		<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<p className="text-2xl font-bold mb-6 text-center">
				Bạn muốn chuyển tiền cho ai?
			</p>
			<div className="mb-5">
				<input
					id="amount"
					type="text"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="w-full px-4 py-5 text-center text-4xl border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
					placeholder="0,00 Đ"
				/>
				{errors.amount && <p className="text-red-500">{errors.amount}</p>}
			</div>
			<div className="mb-4 ">
				<div className="relative">
					<input
						id="bank"
						type="text"
						value={bankName}
						onChange={(e) => setBankName(e.target.value)}
						className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
						placeholder="Chọn Ngân Hàng..."
					/>
					<img
						src={bank}
						alt="Bank Icon"
						className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
					/>
				</div>
				{errors.bankName && <p className="text-red-500">{errors.bankName}</p>}
			</div>
			<div className="mb-4 ">
				<div className="relative">
					<input
						id="account"
						type="text"
						value={account}
						onChange={(e) => setAccount(e.target.value)}
						className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
						placeholder="Nhập Số Tài Khoản..."
					/>
					<img
						src={computer}
						alt="Bank Icon"
						className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
					/>
				</div>
				{errors.account && <p className="text-red-500">{errors.account}</p>}
			</div>
			<div className="mb-8 ">
				<div className="relative">
					<input
						id="name"
						type="text"
						value={ownerName}
						onChange={(e) => setOwnerName(e.target.value)}
						className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder"
						placeholder="Tên Chủ Tài Khoản..."
					/>
					<img
						src={user}
						alt="Bank Icon"
						className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
					/>
				</div>
				{errors.ownerName && <p className="text-red-500">{errors.ownerName}</p>}
			</div>
			<div className="space-y-3">
				<button
					className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-[#1A73E8] flex justify-center items-center"
					onClick={handleContinue}
					disabled={isLoading} // Disable khi loading
				>
					{isLoading ? (
						<svg
							className="animate-spin h-5 w-5 mr-2 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
							></path>
						</svg>
					) : (
						'Tiếp tục'
					)}
				</button>

				<button
					className="w-full py-2 text-gray-700 shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-100"
					onClick={() => navigate(-1)} // Quay lại trang trước đó
				>
					Hủy
				</button>
			</div>
			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
					<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
						<p className="text-2xl font-bold mb-6 text-center">
							Xác nhận giao dịch của bạn
						</p>
						<div className="mb-5">
							<input
								id="amount"
								type="text"
								className="w-full px-4 py-5 text-center text-4xl border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder text-gray-600"
								value={amount}
								readOnly={true}
							/>
						</div>
						<div className="mb-4 relative">
							<input
								id="bank"
								type="text"
								className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder text-gray-600"
								value={bankName}
								readOnly={true}
							/>
							<img
								src={bank}
								alt="Bank Icon"
								className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
								value={bankName}
							/>
						</div>
						<div className="mb-4 relative">
							<input
								id="account"
								type="text"
								className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder text-gray-600"
								value={account}
								readOnly={true}
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
								className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder text-gray-600"
								value={ownerName}
								readOnly={true}
							/>
							<img
								src={user}
								alt="Bank Icon"
								className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
							/>
						</div>
						<div className="space-y-3">
							<button
								onClick={() => setIsModalOpen2(true)}
								className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-[#1A73E8]"
							>
								Tiếp tục
							</button>

							<button
								className="w-full py-2 text-gray-700 shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-100 mt-2"
								onClick={handleCloseModal} // Quay lại trang trước đó
							>
								Hủy
							</button>
						</div>
						{isModalOpen2 && (
							<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
								<Confirm number={account} />
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default MoneyCard;
