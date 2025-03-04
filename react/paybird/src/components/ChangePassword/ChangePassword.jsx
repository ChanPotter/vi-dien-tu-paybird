import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { MyInput, MyConfirmButton } from '../lit-wrapper';

const ChangePassword = () => {
	const navigate = useNavigate();
	const [number, setNumber] = useState('');
	const handleConfirm = () => {
		if (number === '123456') {
			toast.success('Giao dịch thành công! 🎉', { autoClose: 2000 });
			setTimeout(() => {
				navigate('/Dashboard');
			}, 2000);
		} else {
			toast.error('Giao dịch thất bại! ❌', { autoClose: 4000 });
		}
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<HeaderDashboard />
			<ToastContainer position="center" />
			<div className="flex-grow flex items-center justify-center">
				<div className="bg-white p-5 rounded-xl  w-full max-w-sm flex flex-col items-center gap-4">
					<div className="text-center font-bold text-2xl p-2">
						Change Password
					</div>
					<MyInput placeholder="Old Password" type="password" />
					<MyInput placeholder="New Password" type="password" />
					<MyInput placeholder="Confirm Password" type="password" />
					<div className="flex justify-between gap-4 w-full max-w-sm mt-2">
						<MyConfirmButton onClick={handleConfirm}>Xác nhận</MyConfirmButton>
						<MyConfirmButton onClick={() => navigate(-1)}>Hủy</MyConfirmButton>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default ChangePassword;
