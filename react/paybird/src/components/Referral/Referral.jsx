import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { MyReferral, MyConfirmButton } from '../lit-wrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Referral = () => {
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
			<ToastContainer position="top-right" />
			<div className="flex-grow flex items-center justify-center p-4 sm:p-8">
				<div className="bg-white p-5 rounded-lg  w-full max-w-md flex flex-col items-center gap-4">
					<MyReferral />
					<div className="flex justify-center gap-4 w-full max-w-sm mt-2">
						<MyConfirmButton onClick={handleConfirm}>Xác nhận</MyConfirmButton>
						<MyConfirmButton onClick={() => navigate(-1)}>Hủy</MyConfirmButton>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Referral;
