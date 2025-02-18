import { FaGoogle, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ForgotPasswordModal from './ForgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const navigate = useNavigate(); // Initialize useNavigate
	const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

	const handleBackClick = (event) => {
		event.preventDefault(); // Prevent form submission
		navigate(-1); // Navigate back to the previous page
	};
	const handleForgotPasswordClick = () => {
		setIsModalOpen(true); // Open the modal
	};

	const closeModal = () => {
		setIsModalOpen(false); // Close the modal
	};

	const [showPassword, setShowPassword] = useState(false);

	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [errorPass, setErrorPass] = useState('');
	const handleChange = (e) => {
		const value = e.target.value;

		// Kiểm tra xem có phải số không (regex: chỉ chứa chữ số)
		if (!/^\d*$/.test(value)) {
			setError('Số điện thoại chỉ được chứa chữ số!');
			return;
		}

		// Giới hạn độ dài số điện thoại (Ví dụ: 9 - 11 số)
		if (value.length < 9 || value.length > 11) {
			setError('Số điện thoại phải từ 9 đến 11 số!');
		} else {
			setError('');
		}

		setPhone(value);
	};
	const handlePassword = (e) => {
		const value = e.target.value;

		if (value.length < 6 || value.length > 16) {
			setErrorPass('Mật khẩu phải từ 6 đến 16 kí tự!');
		} else {
			setErrorPass('');
		}

		setPassword(value);
	};

	const handleLogin = (event) => {
		event.preventDefault(); // Ngăn trang load lại

		if (!phone || !password) {
			setError(!phone ? 'Vui lòng nhập số điện thoại!' : '');
			setErrorPass(!password ? 'Vui lòng nhập mật khẩu!' : '');
			return;
		}

		// Kiểm tra thông tin đăng nhập
		if (phone === '0949360729' && password === 'nhatban') {
			toast.success('Đăng nhập thành công! 🎉', { autoClose: 2000 });
			setTimeout(() => {
				navigate('/Dashboard');
			}, 2000); // Đợi 5s để toast hiển thị rồi mới chuyển trang
		} else {
			toast.error('Sai số điện thoại hoặc mật khẩu! ❌', { autoClose: 4000 });
		}
	};

	return (
		<div className="bg-[#080710] h-screen flex items-center justify-center">
			<ToastContainer position="top-right" />
			<div className="relative w-[400px] h-[505px]">
				<div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#1845ad] to-[#23a2f6] -left-20 -top-20"></div>
				<div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -right-10 -bottom-20"></div>
				<div>
					<form className="h-full w-full bg-white/10 backdrop-blur-md border-2 border-white/10 rounded-lg shadow-lg p-12">
						{/* Return Button with "X" Icon */}
						<button
							onClick={handleBackClick} // Use the new handler
							className="absolute top-4 right-4 text-red-600 text-2xl hover:text-red-800"
							type="button" // Ensure it's a button type
						>
							<FaTimes /> {/* This is the "X" icon */}
						</button>
						<h3 className="text-2xl font-medium text-center text-white">
							Đăng Nhập
						</h3>
						<div className="mt-5 flex">
							<div className="bg-black rounded-lg p-2 flex items-center justify-center w-full hover:bg-blue-600 cursor-pointer text-white font-bold">
								<FaGoogle className="mr-2" /> Đăng nhập với Google
							</div>
						</div>
						<label
							className="block mt-8 text-white font-medium"
							htmlFor="phone"
						>
							Số điện thoại
						</label>
						<input
							type="text" // Dùng type="text" để kiểm soát đầu vào tốt hơn (tránh dấu mũi tên tăng/giảm của input number)
							placeholder="Nhập số điện thoại"
							id="phone"
							value={phone}
							required
							onChange={handleChange}
							className={`block h-12 w-full bg-white/10 rounded-md p-2 mt-2 text-white placeholder:text-gray-300 ${
								error ? 'border border-red-500' : ''
							}`}
						/>
						{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
						<label
							className="block mt-6 text-white font-medium"
							htmlFor="password"
						>
							Mật khẩu
						</label>
						<div className="relative">
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder="Mật Khẩu"
								id="password"
								value={password}
								required
								onChange={handlePassword}
								autoComplete="current-password"
								className={`block h-12 w-full bg-white/10 rounded-md p-2 mt-2 text-white placeholder:text-gray-300 pr-10 ${
									errorPass ? 'border border-red-500' : ''
								}`}
							/>
							{errorPass && (
								<p className="text-red-500 text-sm mt-2">{errorPass}</p>
							)}
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300"
							>
								{showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</button>
						</div>
						{/* Button Container */}
						<div className="flex justify-between gap-4 mt-11">
							<button
								onClick={handleLogin}
								className="bg-white text-[#080710] py-2 text-lg font-semibold rounded-md cursor-pointer hover:bg-gray-400 flex-1"
							>
								Đăng nhập
							</button>
							<button
								type="button"
								onClick={handleForgotPasswordClick} // Open the modal
								className="bg-white text-[#080710] py-2 text-lg font-semibold rounded-md cursor-pointer hover:bg-orange-400 flex-1"
							>
								Quên mật khẩu
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* Forgot Password Modal */}
			<ForgotPasswordModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

export default Login;
