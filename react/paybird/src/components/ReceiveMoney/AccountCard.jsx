import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setting from '../../assets/icon/setting.png';
import copy from '../../assets/icon/copy.png';
import account from '../../database/Received.json';
import { useState } from 'react';
import domtoimage from 'dom-to-image';
import { MySaveButton, MyCancelButton } from '../lit-wrapper';

const AccountCard = () => {
	const navigate = useNavigate();
	// Lấy dữ liệu tài khoản đầu tiên từ JSON
	const { QR, name, number } = account[0];

	// eslint-disable-next-line no-unused-vars
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(number); //sao chép văn bản vào clipboard
		setCopied(true);

		toast.success('Sao chép thành công', { autoClose: 2000 });
	};

	const handleSave = () => {
		const node = document.getElementById('my-element');

		domtoimage
			.toPng(node)
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'screenshot.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((error) => {
				console.error('Oops, something went wrong!', error);
			});
	};

	return (
		<div
			id="my-element"
			className="max-w-sm w-full p-7 bg-white shadow-xl rounded-2xl border-2 border-gray-100"
		>
			<ToastContainer position="top-right" />
			<div className="mb-4 text-center">
				<div className="flex justify-center">
					<img src={QR} alt="QR" className="w-45 h-45" />
				</div>
				<p className="text-lg font-inder p-2">{name}</p>
			</div>

			<div className="mb-3 relative">
				<div className="shadow-lg border-2 border-gray-100 p-2">
					{/* Icon Cài Đặt */}
					<div className="flex justify-center mb-2">
						<img src={setting} alt="Setting" className="w-6 h-6" />
					</div>

					{/* Thông Tin Tài Khoản và Số Tiền Nhận */}
					<div className="p-2">
						<div className="flex justify-between mb-1">
							<span className="font-medium">Tài Khoản:</span>
							<span>PayBird</span>
						</div>

						<div className="flex justify-between">
							<span className="font-medium">Số Tiền Nhận:</span>
							<span>Không có</span>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-6 relative">
				<div className="shadow-lg border-2 border-gray-100 text-center p-2">
					<div className="font-inder">Số tài khoản PayBird</div>
					<div className="flex p-2 justify-center items-center gap-1">
						<span>{number}</span>
						<button onClick={handleCopy} className="focus:outline-none">
							<img src={copy} alt="Copy" className="w-4 h-4 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>

			<div className="space-y-3">
				<MySaveButton onClick={handleSave}>Lưu</MySaveButton>
				<MyCancelButton onClick={() => navigate(-1)}>Hủy</MyCancelButton>
			</div>
		</div>
	);
};

export default AccountCard;
