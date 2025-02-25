import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransCard = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		bank: '',
		cardDate: '',
		cardName: '',
		idNumber: '',
	});

	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};
		// Kiểm tra số thẻ (8-16 chữ số)
		if (!formData.bank.trim()) {
			newErrors.bank = 'Vui lòng nhập số thẻ';
		} else if (!/^\d{8,16}$/.test(formData.bank)) {
			newErrors.bank = 'Số thẻ không hợp lệ (8-16 chữ số)';
		}

		// Kiểm tra ngày phát hành (MM/YYYY)
		if (!formData.cardDate.trim()) {
			newErrors.cardDate = 'Vui lòng nhập ngày phát hành thẻ';
		} else if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(formData.cardDate)) {
			newErrors.cardDate = 'Định dạng MM/YYYY không hợp lệ';
		}

		// Kiểm tra tên chủ thẻ (chỉ chứa chữ cái và dấu cách)
		if (!formData.cardName.trim()) {
			newErrors.cardName = 'Vui lòng nhập tên chủ thẻ';
		} else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(formData.cardName)) {
			newErrors.cardName = 'Tên không hợp lệ (chỉ chứa chữ cái)';
		}

		// Kiểm tra CCCD/CMT/Hộ chiếu/VISA (9-12 chữ số)
		if (!formData.idNumber.trim()) {
			newErrors.idNumber = 'Vui lòng nhập số CCCD/CMT/Hộ chiếu/VISA';
		} else if (!/^\d{9,12}$/.test(formData.idNumber)) {
			newErrors.idNumber = 'Số không hợp lệ (9-12 chữ số)';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleLink = () => {
		if (validate()) {
			toast.success('Liên kết thành công!', {
				autoClose: 1500,
			});
			setTimeout(() => {
				navigate('/Dashboard');
			}, 1500);
		} else {
			toast.error('Vui lòng nhập đầy đủ và chính xác thông tin!');
		}
	};

	return (
		<div className="max-w-sm w-full p-5 bg-white shadow-xl border-2 border-gray-100">
			<p className="text-red-600 text-[14px] mb-7 font-inder">
				<span className="text-[15px] font-semibold">Note:</span> Vui lòng kiểm
				tra kĩ thông tin trước khi liên kết để đảm bảo tính chính xác và an
				toàn.
			</p>

			<ToastContainer position="top-right" />
			<div className="mb-4 relative">
				<input
					id="bank"
					type="text"
					value={formData.bank}
					onChange={handleChange}
					className={`w-full px-4 py-2 border border-gray-100 shadow-md rounded-xl focus:outline-none focus:ring-2 font-inder ${
						errors.bank
							? 'border-red-500 focus:ring-red-500'
							: 'focus:ring-blue-500'
					}`}
					placeholder="Số thẻ"
				/>
				{errors.bank && (
					<p className="text-red-500 text-sm mt-1">{errors.bank}</p>
				)}
			</div>
			<div className="mb-4 relative">
				<input
					id="cardDate"
					type="text"
					value={formData.cardDate}
					onChange={handleChange}
					className={`w-full px-4 py-2 border border-gray-100 shadow-md rounded-xl focus:outline-none focus:ring-2 font-inder ${
						errors.cardDate
							? 'border-red-500 focus:ring-red-500'
							: 'focus:ring-blue-500'
					}`}
					placeholder="Ngày phát hành thẻ (MM/YYYY)"
				/>
				{errors.cardDate && (
					<p className="text-red-500 text-sm mt-1">{errors.cardDate}</p>
				)}
			</div>
			<div className="mb-4 relative">
				<input
					id="cardName"
					type="text"
					value={formData.cardName}
					onChange={handleChange}
					className={`w-full px-4 py-2 border border-gray-100 shadow-md rounded-xl focus:outline-none focus:ring-2 font-inder ${
						errors.cardName
							? 'border-red-500 focus:ring-red-500'
							: 'focus:ring-blue-500'
					}`}
					placeholder="Tên chủ thẻ"
				/>
				{errors.cardName && (
					<p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
				)}
			</div>
			<div className="mb-8 relative">
				<input
					id="idNumber"
					type="text"
					value={formData.idNumber}
					onChange={handleChange}
					className={`w-full px-4 py-2 border border-gray-100 shadow-md rounded-xl focus:outline-none focus:ring-2 font-inder ${
						errors.idNumber
							? 'border-red-500 focus:ring-red-500'
							: 'focus:ring-blue-500'
					}`}
					placeholder="Số CCCD/CMT/Hộ chiếu/VISA"
				/>
				{errors.idNumber && (
					<p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>
				)}
			</div>
			<div className="space-y-3">
				<button
					onClick={handleLink}
					className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-[#1A73E8]"
				>
					Liên kết
				</button>

				<button
					className="w-full py-2 text-gray-700 shadow-xl rounded-2xl border-2 border-gray-100 hover:bg-gray-100"
					onClick={() => navigate(-2)}
				>
					Hủy
				</button>
			</div>
		</div>
	);
};

export default TransCard;
