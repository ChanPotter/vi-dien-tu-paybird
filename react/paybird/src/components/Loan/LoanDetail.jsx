import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { useParams, useNavigate } from 'react-router-dom';
import loan from '../../database/Loan.json';
import {
	MyPaymentPromo,
	MyCustomerCodeInput,
	MyConfirmButton,
} from '../lit-wrapper';
import { useState } from 'react';
const LoanDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams(); // Lấy ID từ URL
	const billData = loan.find((b) => b.id === parseInt(id)); // Tìm hóa đơn theo ID
	if (!billData) {
		return <p className="text-red-500">Không tìm thấy hóa đơn!</p>;
	}

	return (
		<div className="min-h-screen">
			<HeaderDashboard />
			<div className="max-w-4xl mt-5 items-center mx-auto max-sm:p-3">
				<MyPaymentPromo />
				<div className="mt-10 ">
					<MyCustomerCodeInput />
					<div className="">
						<MyConfirmButton className="mt-4">Xác Nhận</MyConfirmButton>
						<MyConfirmButton
							className="mt-4 ml-35"
							onClick={() => navigate(-1)}
						>
							Hủy
						</MyConfirmButton>
					</div>
				</div>
				<div className="mt-10 mb-15">
					<h2 className="font-semibold text-lg mb-2">Hóa đơn mẫu</h2>
					<img
						src={billData.bill}
						alt={billData.name}
						className="w-full aspect-video"
					/>{' '}
					{/* Ảnh sẽ giữ tỷ lệ 16:9 */}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default LoanDetail;
