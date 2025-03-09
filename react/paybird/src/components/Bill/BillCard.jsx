/* eslint-disable react/prop-types */
import electric from '../../assets/bill/bulb.png';

const BillCard = ({ bill }) => {
	return (
		<div className="border border-gray-300 rounded-lg p-4 shadow-md w-80 sm:w-96  bg-white">
			{/* Icon + Thông tin hóa đơn */}
			<div className="flex items-center gap-7 p-1 mb-2">
				<img src={electric} alt="electric-bill" className="w-10 h-10" />
				<div>
					<h3 className="text-lg font-semibold">Hóa đơn điện 02/2025</h3>
					<p className="text-gray-500 text-sm">{bill.code}</p>
				</div>
			</div>
			<hr className="border-t border-gray-400" />
			{/* Số tiền + Nút thanh toán (xuống dòng) */}
			<div className="flex justify-between items-center mt-2">
				<p className="text-xl font-semibold">{bill.amount}đ</p>
				<button className="bg-blue-600 hover:bg-blue-700 text-white text-md px-4 py-2 rounded-md mt-1 font-inder">
					Thanh toán
				</button>
			</div>
		</div>
	);
};

export default BillCard;
