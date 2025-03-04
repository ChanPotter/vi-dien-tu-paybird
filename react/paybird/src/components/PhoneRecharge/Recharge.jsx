import { useState, useEffect } from 'react';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { MyConfirmButton, MyAmountButton } from '../lit-wrapper';
import { useNavigate } from 'react-router-dom';
import Confirm from '../LitItem/Confirm';

const Recharge = () => {
	const navigate = useNavigate();
	const [phoneNumber, setPhoneNumber] = useState('');
	const [selectedAmount, setSelectedAmount] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const amounts = [
		'10.000',
		'20.000',
		'30.000',
		'50.000',
		'100.000',
		'200.000',
		'300.000',
		'500.000',
	];
	const handleContinue = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsModalOpen(true);
		}, 2000);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleAmountSelect = (event) => {
			setSelectedAmount(event.detail.amount);
		};
		document.addEventListener('select-amount', handleAmountSelect);

		return () => {
			document.removeEventListener('select-amount', handleAmountSelect);
		};
	}, []);

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<HeaderDashboard />
			<div className="flex-grow flex justify-center items-center">
				<div className="bg-white p-6 rounded-lg shadow-md w-80">
					<h2 className="text-xl font-semibold text-center p-2">
						Nạp điện thoại
					</h2>
					<input
						type="text"
						placeholder="Nhập số điện thoại"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className="w-full mt-4 p-2 border rounded-lg text-center"
					/>
					<div className="grid grid-cols-3 gap-2 mt-5">
						{amounts.map((amount, index) => (
							<MyAmountButton
								key={index}
								amount={amount}
								selected={selectedAmount === amount}
							></MyAmountButton>
						))}
					</div>
					<div className="flex justify-between mt-7">
						<MyConfirmButton
							onClick={handleContinue}
							disabled={isLoading} // Disable khi loading
						>
							{isLoading ? (
								<svg
									className="animate-spin h-5 w-5 mr-2 text-white items-center"
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
						</MyConfirmButton>
						<MyConfirmButton onClick={() => navigate(-1)}>Hủy</MyConfirmButton>
					</div>
					{/* Modal */}
					{isModalOpen && (
						<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
							<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
								<p className="text-2xl font-semibold mb-6 text-center">
									Xác nhận giao dịch của bạn
								</p>
								{/* Hiển thị số điện thoại */}
								<div className="mb-4 p-3 bg-gray-100 rounded-lg shadow-md text-center">
									<p className="text-gray-500 text-sm">Số điện thoại</p>
									<p className="text-lg font-medium">
										{phoneNumber || 'Chưa nhập'}
									</p>
								</div>

								{/* Hiển thị số tiền đã chọn */}
								<div className="mb-4 p-4 bg-blue-100 rounded-lg shadow-md text-center">
									<p className="text-gray-500 text-sm">Số tiền</p>
									<p className="text-2xl font-bold text-blue-600">
										{selectedAmount || 'Chưa chọn số tiền'}
									</p>
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
										<Confirm />
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Recharge;
