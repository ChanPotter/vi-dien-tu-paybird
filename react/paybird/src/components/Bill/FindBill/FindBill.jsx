import { HeaderDashboard, Footer } from '../../Header-Footer/index';
import {
	MyPaymentPromo,
	MyCustomerCodeInput,
	MyConfirmButton,
} from '../../lit-wrapper';
import billicon from '../../../assets/bill/invoice.png';
import clock from '../../../assets/bill/clock.png';
import bills from '../../../database/Bill.json';
import { useParams, useNavigate } from 'react-router-dom';

const FindBill = () => {
	const { id } = useParams(); // Lấy ID từ URL
	const navigate = useNavigate();

	const billData = bills.find((b) => b.id === parseInt(id)); // Tìm hóa đơn theo ID
	if (!billData) {
		return <p className="text-red-500">Không tìm thấy hóa đơn!</p>;
	}
	const discounts = [
		{
			id: 1,
			title: 'Hóa đơn',
			discount: 'Giảm 80.000đ',
			condition: 'cho đơn từ 150.000đ',
			timeLeft: 'còn 1 ngày',
		},
		{
			id: 2,
			title: 'Hóa đơn',
			discount: 'Giảm 50.000đ',
			condition: 'cho đơn từ 100.000đ',
			timeLeft: 'còn 2 ngày',
		},
		{
			id: 3,
			title: 'Hóa đơn',
			discount: 'Giảm 30.000đ',
			condition: 'cho đơn từ 80.000đ',
			timeLeft: 'còn 3 ngày',
		},
		{
			id: 4,
			title: 'Hóa đơn',
			discount: 'Giảm 20.000đ',
			condition: 'cho đơn từ 50.000đ',
			timeLeft: 'còn 4 ngày',
		},
	];

	return (
		<div className="bg-gray-50 min-h-screen">
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
				<div className="mt-7 rounded-2xl w-full">
					<h2 className="text-lg font-semibold mb-2">Ưu đãi của bạn</h2>
					<div className="max-w-full overflow-x-auto whitespace-nowrap p-2 rounded-xl flex gap-3 scrollbar-hide">
						{discounts.map((item) => (
							<div
								key={item.id}
								className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-md min-w-[380px]"
							>
								<img src={billicon} alt="Bill Icon" className="w-10 h-10" />
								<div className="flex-1">
									<p className="text-sm text-gray-700">{item.title}</p>
									<p className="text-lg font-semibold text-black">
										{item.discount}
									</p>
									<p className="text-sm text-gray-500">{item.condition}</p>
								</div>
								<div className="flex items-center gap-1 text-gray-500 text-sm">
									<img src={clock} alt="Clock Icon" className="w-4 h-4 mr-1" />
									<p className="text-gray-500">{item.timeLeft}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="mt-7 mb-10">
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
export default FindBill;
