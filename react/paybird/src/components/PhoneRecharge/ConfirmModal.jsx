import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confirm from '../LitItem/Confirm';

const ConfirmModal = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { phoneNumber, selectedAmount } = location.state || {};
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Nếu không có dữ liệu, báo lỗi & quay về trang trước
	useEffect(() => {
		if (!phoneNumber || !selectedAmount) {
			toast.error('Vui lòng nhập thông tin trước khi xác nhận!');
			setTimeout(() => navigate('/Dashboard/1'), 2000);
		}
	}, [phoneNumber, selectedAmount, navigate]);

	return (
		<div className="bg-gray-100 flex flex-col min-h-screen">
			<HeaderDashboard />
			<div className="flex-grow flex justify-center items-center pt-10 pb-10">
				<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
					<p className="text-2xl font-semibold mb-6 text-center">
						Xác nhận giao dịch của bạn
					</p>

					{/* Hiển thị số điện thoại */}
					<div className="mb-4 p-3 bg-gray-100 rounded-lg shadow-md text-center">
						<p className="text-gray-500 text-sm">Số điện thoại</p>
						<p className="text-lg font-medium">{phoneNumber || 'Chưa nhập'}</p>
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
							onClick={() => setIsModalOpen(true)}
							className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-[#1A73E8]"
						>
							Tiếp tục
						</button>

						<button
							className="w-full py-2 text-gray-700 shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-100 mt-2"
							onClick={() => navigate(-1)}
						>
							Hủy
						</button>
					</div>
				</div>
			</div>

			{/* Modal xác nhận cuối cùng */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
					<Confirm />
				</div>
			)}

			<Footer />
		</div>
	);
};

export default ConfirmModal;
