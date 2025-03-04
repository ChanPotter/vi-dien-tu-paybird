import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MyConfirmButton } from '../lit-wrapper';

const Confirm = () => {
	const navigate = useNavigate();
	const [number, setNumber] = useState('');

	const handleConfirm = () => {
		toast.success('Giao dịch thành công! 🎉', { autoClose: 2000 });
		setTimeout(() => {
			navigate('/Dashboard');
		}, 2000);
	};

	return (
		<div className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100">
			<ToastContainer position="top-right" />
			<p className="text-2xl font-bold mb-6 text-center">Xác nhận giao dịch</p>
			<div className="mb-4 relative">
				<input
					id="bank"
					type="text"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					className="w-full px-4 py-2 border bg-gray-200 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-inder text-gray-600"
					placeholder="Nhập mã xác nhận"
				/>
			</div>
			<div className="flex justify-between">
				<MyConfirmButton onClick={handleConfirm}>Xác nhận</MyConfirmButton>
				<MyConfirmButton onClick={() => navigate(-1)}>Hủy</MyConfirmButton>
			</div>
		</div>
	);
};

export default Confirm;
