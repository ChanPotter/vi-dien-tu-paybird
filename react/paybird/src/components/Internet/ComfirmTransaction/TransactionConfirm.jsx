import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyCheck } from '../../lit-wrapper';
import BIDV from '../../../assets/bank/BIDV.webp';
import bank from '../../../assets/icon/bank1.png';
import Confirm from '../../LitItem/Confirm';

const TransactionConfirm = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedMethod, setSelectedMethod] = useState('BIDV');
	const selectedPackage = location.state?.selectedPackage;
	const [showModal, setShowModal] = useState(false);

	// Nếu không có dữ liệu, hiển thị thông báo
	if (!selectedPackage) {
		return (
			<div className="min-h-screen flex items-center justify-center text-gray-500">
				Không có gói nào được chọn.
			</div>
		);
	}
	const handleLink = () => {
		navigate('/Dashboard/SelectBank');
	};
	const handleLoading = () => {
		setIsLoading(true);
		// Hiển thị toast loading
		const toastId = toast.loading('Đang xử lý giao dịch...', {
			position: 'top-right',
			autoClose: false, // Không tự động đóng
		});

		setTimeout(() => {
			setIsLoading(false);

			// Đóng toast loading
			toast.dismiss(toastId);

			// Hiển thị toast thành công và mở modal
			toast.success('Giao dịch thành công! 🎉', { autoClose: 2000 });
			setShowModal(true);
		}, 2000);
	};

	return (
		<div className="bg-white flex items-center justify-center p-4 mt-5 mb-5 border border-gray-300">
			<ToastContainer />
			{!showModal && (
				<div className="w-full max-w-md bg-white shadow-lg rounded-2xl overflow-hidden">
					{/* Header */}
					<div className="bg-blue-600 text-white text-center py-4 text-xl font-semibold">
						Xác nhận giao dịch
					</div>

					{/* Thông tin giao dịch */}
					<div className="p-5">
						<div className="bg-gray-100 p-4 rounded-xl">
							<h2 className="text-xl font-bold text-center">Nạp Data 3G/4G</h2>
							<p className="text-2xl font-semibold text-blue-600 text-center">
								{selectedPackage?.price || 0}đ
							</p>
						</div>

						{/* Chi tiết giao dịch */}
						<div className="mt-4 space-y-2">
							<div className="flex justify-between text-gray-700">
								<span>Nhà mạng</span>
								<span className="font-semibold">Vinaphone</span>
							</div>
							<div className="flex justify-between text-gray-700">
								<span>Mệnh giá</span>
								<span className="font-semibold">
									{selectedPackage?.size || 'N/A'} -{' '}
									{selectedPackage?.price || 0}đ
								</span>
							</div>
							<div className="flex justify-between text-gray-700">
								<span>Nạp cho</span>
								<span className="font-semibold">0949360729</span>
							</div>
							<div className="flex justify-between text-gray-700">
								<span>Phí dịch vụ</span>
								<span className="font-semibold text-green-600">Miễn phí</span>
							</div>
						</div>

						{/* Phương thức thanh toán */}
						<div className="mt-10">
							<p className="text-md font-bold text-black mb-2">
								Phương thức thanh toán
							</p>
							<div className="flex gap-3">
								<div
									className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer ${
										selectedMethod === 'BIDV'
											? 'border-blue-500 bg-blue-50'
											: 'border-gray-300'
									}`}
									onClick={() => setSelectedMethod('BIDV')}
								>
									<img src={BIDV} alt="BIDV" className="w-6 h-6" />
									<div>
										<p className="text-sm font-medium text-black">BIDV</p>
										<p className="text-xs text-gray-500">BIDV ***6210</p>
									</div>
									{selectedMethod === 'BIDV' && (
										<MyCheck className="text-green-500" />
									)}
								</div>
								<div
									onClick={handleLink}
									className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer ${
										selectedMethod === 'Zalo'
											? 'border-blue-500 bg-blue-50'
											: 'border-gray-300'
									}`}
								>
									<img src={bank} alt="Bank" className="w-6 h-6" />
									<div>
										<p className="text-sm font-medium text-black">
											Thêm liên kết
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Nút xác nhận */}
						<button
							onClick={handleLoading}
							disabled={isLoading}
							className="cursor-pointer w-full bg-green-500 text-white py-3 mt-5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600"
						>
							✅ Xác nhận
						</button>
					</div>
				</div>
			)}
			{/* Modal */}
			{showModal && <Confirm />}
		</div>
	);
};

export default TransactionConfirm;
