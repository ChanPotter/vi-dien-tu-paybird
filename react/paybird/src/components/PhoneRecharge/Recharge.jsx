import { useState, useEffect } from 'react';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { MyConfirmButton, MyAmountButton } from '../lit-wrapper';
import { useNavigate } from 'react-router-dom';
import Confirm from '../LitItem/Confirm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recharge = () => {
	const navigate = useNavigate();
	const [phoneNumber, setPhoneNumber] = useState('');
	const [selectedAmount, setSelectedAmount] = useState(null);
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
		if (!phoneNumber || !selectedAmount) {
			toast.error('Vui lòng nhập số điện thoại và số tiền!');
			return;
		}

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/Dashboard/1/Confirm', {
				state: { phoneNumber, selectedAmount }, // Truyền state
			});
		}, 2000);
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
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Recharge;
