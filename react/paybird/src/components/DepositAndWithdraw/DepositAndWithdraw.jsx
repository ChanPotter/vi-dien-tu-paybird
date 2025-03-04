import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from './Select';

const DepositAndWithdraw = () => {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState('deposit');
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [amount, setAmount] = useState('');

	const handleContinue = () => {
		if (activeTab === 'withdraw') {
			setShowModal(true);
		} else {
			setShowModal2(true);
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<HeaderDashboard />
			<div className="flex-grow flex justify-center items-center">
				<div className="w-96 p-6 bg-white shadow-lg rounded-2xl">
					{/* Tab Selection */}
					<div className="flex justify-center mb-4 bg-gray-100 p-1 rounded-full w-full max-w-xs mx-auto">
						<button
							className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full transition ${
								activeTab === 'deposit'
									? 'bg-white shadow text-black border border-blue-600'
									: 'bg-transparent text-gray-500'
							}`}
							onClick={() => setActiveTab('deposit')}
						>
							Nạp tiền
						</button>
						<button
							className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full transition ${
								activeTab === 'withdraw'
									? 'bg-white shadow text-black border border-blue-600'
									: 'bg-transparent text-gray-500'
							}`}
							onClick={() => setActiveTab('withdraw')}
						>
							Rút tiền
						</button>
					</div>
					<div className="font-inder text-center mb-2 flex justify-center gap-4 text-gray-600">
						<p>Số dư ví: </p>
						<div className="">100đ</div>
					</div>

					{/* Amount Input */}
					<input
						type="text"
						className="w-full bg-gray-200 text-gray-600 text-3xl font-semibold py-4 text-center rounded-lg focus:outline-none"
						placeholder="0,00 Đ"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>

					{/* Buttons */}
					<div className="mt-6 flex flex-col gap-3">
						<button
							onClick={handleContinue}
							className="w-full bg-blue-600 text-white text-md font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700"
						>
							Tiếp tục
						</button>
						<button
							onClick={() => navigate(-1)}
							className="w-full bg-white text-blue-600 text-md font-semibold py-2 rounded-lg shadow-md hover:bg-gray-100"
						>
							Hủy
						</button>
					</div>
					{/* Modal */}
					{showModal && (
						<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
							<div className="bg-white p-6 rounded-lg shadow-lg">
								<p className="text-lg font-semibold">
									Chức năng rút tiền chưa cập nhật
								</p>
								<button
									className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
									onClick={() => setShowModal(false)}
								>
									Đóng
								</button>
							</div>
						</div>
					)}
					{/* Modal */}
					{showModal2 && <Select amount={amount} />}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default DepositAndWithdraw;
