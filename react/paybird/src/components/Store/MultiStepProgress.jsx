import { useState, useEffect } from 'react';
import { MyConfirmButton, MyInputField } from '../lit-wrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const steps = ['Thông tin cơ bản', 'Địa chỉ cửa hàng', 'Xác nhận'];

export default function MultiStepProgress() {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(() => {
		// Load bước hiện tại từ localStorage, mặc định là 0
		return parseInt(localStorage.getItem('currentStep')) || 0;
	});

	// Khởi tạo savedData từ localStorage hoặc giá trị mặc định
	const [savedData, setSavedData] = useState(() => {
		const storedData = localStorage.getItem('savedData');
		return storedData
			? JSON.parse(storedData)
			: {
					step1: { storeName: '', location: '' },
					step2: { address: '', businessType: '' },
					step3: { referralCode: '' },
				};
	});

	// Dữ liệu tạm thời cho từng bước, khởi tạo từ savedData
	const [step1Data, setStep1Data] = useState(savedData.step1);
	const [step2Data, setStep2Data] = useState(savedData.step2);
	const [step3Data, setStep3Data] = useState(savedData.step3);

	useEffect(() => {
		try {
			const storedData = JSON.parse(localStorage.getItem('savedData')) || {};

			if (typeof storedData !== 'object' || storedData === null) {
				console.warn('savedData in localStorage is invalid.');
				return;
			}

			switch (currentStep) {
				case 0:
					setStep1Data(storedData.step1 ?? { storeName: '', location: '' });
					break;
				case 1:
					setStep2Data(storedData.step2 ?? { address: '', businessType: '' });
					break;
				case 2:
					setStep3Data(storedData.step3 ?? { referralCode: '' });
					break;
				default:
					console.warn('Invalid step:', currentStep);
			}
		} catch (error) {
			console.error('Error reading from localStorage:', error);
		}
	}, [currentStep]);

	// 🔥 NEW: Cập nhật dữ liệu vào localStorage khi state thay đổi
	useEffect(() => {
		const savedData = {
			step1: step1Data,
			step2: step2Data,
			step3: step3Data,
		};
		localStorage.setItem('savedData', JSON.stringify(savedData));
	}, [step1Data, step2Data, step3Data]);

	const handleChange = (step, field, value) => {
		setSavedData((prev) => {
			const newData = { ...prev };
			if (step === 0) {
				newData.step1 = { ...newData.step1, [field]: value };
				setStep1Data(newData.step1);
			} else if (step === 1) {
				newData.step2 = { ...newData.step2, [field]: value };
				setStep2Data(newData.step2);
			} else if (step === 2) {
				newData.step3 = { ...newData.step3, [field]: value };
				setStep3Data(newData.step3);
			}
			return newData;
		});
	};

	const validateStep = () => {
		switch (currentStep) {
			case 0:
				if (!step1Data.storeName.trim() || !step1Data.location.trim()) {
					return true;
				}
				return true;
			case 1:
				if (!step2Data.address.trim() || !step2Data.businessType.trim()) {
					return true;
				}
				return true;
			case 2:
				return true; // referralCode không bắt buộc
			default:
				return true;
		}
	};

	const nextStep = () => {
		if (!validateStep()) {
			return;
		}

		const newSavedData = { ...savedData };
		if (currentStep === 0) {
			newSavedData.step1 = step1Data;
		} else if (currentStep === 1) {
			newSavedData.step2 = step2Data;
		} else if (currentStep === 2) {
			newSavedData.step3 = step3Data;
		}
		setSavedData(newSavedData);
		localStorage.setItem('savedData', JSON.stringify(newSavedData));
		localStorage.setItem('currentStep', currentStep + 1);

		setCurrentStep((prev) => prev + 1);
	};

	const prevStep = () => {
		if (currentStep === 0) {
			navigate(-1);
			return;
		}

		localStorage.setItem('currentStep', currentStep - 1);
		setCurrentStep((prev) => prev - 1);
	};

	const handleSubmit = () => {
		const finalData = {
			step1: savedData.step1,
			step2: savedData.step2,
			step3: step3Data,
		};
		toast.success('Giao dịch thành công! 🎉', { autoClose: 2000 });

		setTimeout(() => {
			console.log('Dữ liệu gửi đi:', finalData);
			navigate('/Dashboard');
			// Xóa localStorage sau khi hoàn tất (tùy chọn)
			localStorage.removeItem('savedData');
			localStorage.removeItem('currentStep');
		}, 2000);
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 0:
				return (
					<div key="step1">
						<MyInputField
							placeholder="Nhập tên cửa hàng *"
							value={step1Data.storeName}
							on-input-change={(e) =>
								handleChange(0, 'storeName', e.detail.value)
							}
						/>
						<MyInputField
							placeholder="Nhập Thành phố, Quận/Huyện, Phường/Xã *"
							value={step1Data.location}
							on-input-change={(e) =>
								handleChange(0, 'location', e.detail.value)
							}
						/>
					</div>
				);
			case 1:
				return (
					<div key="step2">
						<MyInputField
							placeholder="Nhập địa chỉ cửa hàng hiện tại *"
							value={step2Data.address}
							on-input-change={(e) =>
								handleChange(1, 'address', e.detail.value)
							}
						/>
						<MyInputField
							placeholder="Chọn ngành nghề/lĩnh vực kinh doanh *"
							value={step2Data.businessType}
							on-input-change={(e) =>
								handleChange(1, 'businessType', e.detail.value)
							}
						/>
					</div>
				);
			case 2:
				return (
					<div key="step3">
						<MyInputField
							placeholder="Nhập mã giới thiệu (không bắt buộc)"
							value={step3Data.referralCode}
							on-input-change={(e) =>
								handleChange(2, 'referralCode', e.detail.value)
							}
						/>
						<p className="text-center text-sm text-red-500 mt-2 mb-4">
							Kiểm tra lại thông tin trước khi xác nhận.
						</p>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="max-w-md mx-auto p-6">
			<ToastContainer position="top-right" />
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
			<div className="bg-white p-5 rounded-xl shadow-md w-full max-w-md mx-auto">
				<h2 className="text-lg font-semibold mb-4 text-center">
					{steps[currentStep]}
				</h2>
				{renderStepContent()}
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
