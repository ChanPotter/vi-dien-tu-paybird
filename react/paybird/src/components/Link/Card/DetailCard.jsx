import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import copy from '../../../assets/icon/copy.png';
import account from '../../../database/Received.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailCard = () => {
	const navigate = useNavigate();
	const { name, number, bank } = account[0];

	// Hàm sao chép với thông báo toast
	const handleCopy = (text) => {
		navigator.clipboard.writeText(text); // Sao chép văn bản vào clipboard
		toast.success('Đã sao chép!', {
			position: 'top-center',
			autoClose: 2000, // Ẩn sau 2 giây
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			theme: 'light',
		});
	};

	return (
		<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<p className="text-2xl font-bold mb-6 text-center font-inder">
				Thông Tin Chi Tiết
			</p>

			{/* Số tài khoản */}
			<div className="mb-3 relative">
				<div className="shadow-lg border-2 border-gray-100 text-center p-2">
					<div className="font-inder">Số tài khoản PayBird</div>
					<div className="flex p-2 justify-center items-center gap-1">
						<span>{number}</span>
						<button
							onClick={() => handleCopy(number)}
							className="focus:outline-none"
						>
							<img src={copy} alt="Copy" className="w-4 h-4 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>

			{/* Ngân hàng */}
			<div className="mb-3 relative">
				<div className="shadow-lg border-2 border-gray-100 text-center p-2">
					<div className="font-inder">Ngân hàng</div>
					<div className="flex p-2 justify-center items-center gap-1">
						<span>{bank}</span>
						<button
							onClick={() => handleCopy(bank)}
							className="focus:outline-none"
						>
							<img src={copy} alt="Copy" className="w-4 h-4 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>

			{/* Tên người nhận */}
			<div className="mb-7 relative">
				<div className="shadow-lg border-2 border-gray-100 text-center p-2">
					<div className="font-inder">Tên người nhận</div>
					<div className="flex p-2 justify-center items-center gap-1">
						<span>{name}</span>
						<button
							onClick={() => handleCopy(name)}
							className="focus:outline-none"
						>
							<img src={copy} alt="Copy" className="w-4 h-4 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>

			{/* Nút Hủy */}
			<div className="space-y-3">
				<button
					className="w-full py-2 bg-blue-600 text-white shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-300 cursor-pointer"
					onClick={() => navigate(-1)}
				>
					Hủy
				</button>
			</div>

			{/* Toast container để hiển thị thông báo */}
			<ToastContainer />
		</div>
	);
};

export default DetailCard;
