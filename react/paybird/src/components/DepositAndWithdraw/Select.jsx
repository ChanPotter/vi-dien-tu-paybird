import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyReturn, MyCheck } from '../lit-wrapper';
import BIDV from '../../assets/bank/BIDV.webp';
import bank from '../../assets/icon/bank1.png';
import Confirm from '../LitItem/Confirm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const Select = ({ amount }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const [selectedMethod, setSelectedMethod] = useState('BIDV'); // Quản lý phương thức thanh toán được chọn
	const [showModal, setShowModal] = useState(false);

	const handleLoading = () => {
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

	const handleLink = () => {
		navigate('/Dashboard/SelectBank');
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
			<ToastContainer />
			{!showModal && (
				<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
					{/* Header */}
					<div className="flex items-center justify-between mb-4">
						<button
							onClick={() => navigate(-1)}
							className="text-gray-600 cursor-pointer"
						>
							<MyReturn />
						</button>
						<h2 className="text-xl font-bold text-center text-black">
							Xác nhận giao dịch
						</h2>
						<div className="w-6 h-6"></div>{' '}
						{/* Placeholder để căn giữa tiêu đề */}
					</div>

					{/* Số tiền và mô tả */}
					<div className="text-center">
						<p className="text-3xl font-bold text-black">{amount}đ</p>
						<p className="text-sm text-gray-600 mt-1">
							Nạp tiền vào tài khoản PayBirds
						</p>
					</div>

					{/* Phí dịch vụ */}
					<div className="flex justify-between mt-4 text-sm text-gray-500">
						<span>Phí dịch vụ</span>
						<span className="text-green-500">Miễn phí</span>
					</div>

					<hr className="my-4 border-dashed border-gray-300" />

					{/* Phương thức thanh toán */}
					<div className="mt-4">
						<p className="text-sm font-bold text-black mb-2">
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
								<img
									src={BIDV} // Thay bằng logo BIDV
									alt="BIDV"
									className="w-6 h-6"
								/>
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
								<img
									src={bank} // Thay bằng logo Zalopay
									alt="Zalo"
									className="w-6 h-6"
								/>
								<div>
									<p className="text-sm font-medium text-black">
										Thêm liên kết
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Chính sách */}
					<p className="text-xs text-gray-500 text-center mt-4">
						Bằng việc xác nhận bạn đồng ý với{' '}
						<a href="#" className="text-blue-500 underline">
							Chính sách bảo vệ quyền riêng tư của Zalopay.
						</a>{' '}
						<a href="#" className="text-blue-500 underline">
							Xem chính sách
						</a>
					</p>

					{/* Nút xác nhận */}
					<button
						onClick={handleLoading}
						disabled={isLoading} // Disable khi loading
						className="flex items-center justify-center gap-2 w-full mt-4 bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-all duration-300"
					>
						<MyCheck />
						Xác nhận
					</button>
				</div>
			)}
			{/* Modal */}
			{showModal && <Confirm />}
		</div>
	);
};

export default Select;
