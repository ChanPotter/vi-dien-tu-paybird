import { useState } from 'react';
import { MyConfirmButton, MyInputField } from '../lit-wrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const steps = ['Thông tin cơ bản', 'Địa chỉ cửa hàng', 'Xác nhận'];

export default function MultiStepProgress() {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		storeName: '',
		location: '',
		address: '',
		businessType: '',
		referralCode: '',
	});

	const handleChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
	};

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = () => {
		toast.success('Giao dịch thành công! 🎉', { autoClose: 2000 });
		setTimeout(() => {
			navigate('/Dashboard');
		}, 2000);
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 0:
				return (
					<>
						<MyInputField
							placeholder="Nhập tên cửa hàng"
							value={formData.storeName}
							onChange={(e) => handleChange('storeName', e.target.value)}
						/>
						<MyInputField
							placeholder="Nhập Thành phố, Quận/Huyện, Phường/Xã"
							value={formData.location}
							onChange={(e) => handleChange('location', e.target.value)}
						/>
					</>
				);
			case 1:
				return (
					<>
						<MyInputField
							placeholder="Nhập địa chỉ cửa hàng hiện tại"
							value={formData.address}
							onChange={(e) => handleChange('address', e.target.value)}
						/>
						<MyInputField
							placeholder="Chọn ngành nghề/lĩnh vực kinh doanh"
							value={formData.businessType}
							onChange={(e) => handleChange('businessType', e.target.value)}
						/>
					</>
				);
			case 2:
				return (
					<>
						<MyInputField
							placeholder="Nhập mã giới thiệu (không bắt buộc)"
							value={formData.referralCode}
							onChange={(e) => handleChange('referralCode', e.target.value)}
						/>
						<p className="text-center text-sm text-red-500 mt-2 mb-4">
							Kiểm tra lại thông tin trước khi xác nhận.
						</p>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="max-w-md mx-auto p-6">
			<ToastContainer position="center" />
			{/* Progress Bar */}
			<div className="flex justify-center items-center mb-6 space-x-4">
				{steps.map((step, index) => (
					<div key={index} className="flex items-center">
						<div
							className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-md font-bold transition-all duration-300 ${
								index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
							}`}
						>
							{index + 1}
						</div>
						{index < steps.length - 1 && (
							<div
								className={`w-[122px] h-1 transition-all duration-300 ${
									index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
								}`}
							></div>
						)}
					</div>
				))}
			</div>

			{/* Form */}
			<div className="bg-white p-5 rounded-xl shadow-md w-full max-w-md mx-auto">
				<h2 className="text-lg font-semibold mb-4 text-center">
					{steps[currentStep]}
				</h2>

				{renderStepContent()}

				{/* Buttons */}
				<div className="flex justify-between mt-3">
					<MyConfirmButton onClick={prevStep} disabled={currentStep === 0}>
						Quay lại
					</MyConfirmButton>
					<MyConfirmButton
						onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
					>
						{currentStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp tục'}
					</MyConfirmButton>
				</div>
			</div>
		</div>
	);
}
