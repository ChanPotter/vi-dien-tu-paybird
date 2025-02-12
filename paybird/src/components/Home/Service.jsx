import {
	FaMoneyBillAlt,
	FaShoppingCart,
	FaMobileAlt,
	FaQrcode,
	FaFileInvoice,
	FaFilm,
} from 'react-icons/fa';
import ServiceCard from './Items/ServiceCard';

const services = [
	{
		title: 'Chuyển tiền - Nhận tiền',
		description:
			'Chạm là chuyển tiền miễn phí, 24/7 ngay trong khung chat Zalo',
		icon: <FaMoneyBillAlt />,
		bgColor: 'bg-blue-500', // Màu xanh dương
	},
	{
		title: 'Mua sắm dễ dàng',
		description:
			'Mua sắm online và nhận nhiều khuyến mãi tại các sàn thương mại điện tử lớn',
		icon: <FaShoppingCart />,
		bgColor: 'bg-green-500', // Màu xanh lá
	},
	{
		title: 'Nạp/Mua thẻ điện thoại',
		description: 'Đa dạng nhà mạng, chiết khấu cạnh tranh, nạp trong một chạm',
		icon: <FaMobileAlt />,
		bgColor: 'bg-purple-500', // Màu tím
	},
	{
		title: 'Thanh toán tại quầy',
		description:
			'Thanh toán trực tiếp tại quầy qua các mã QR vô cùng nhanh chóng, tiện lợi',
		icon: <FaQrcode />,
		bgColor: 'bg-yellow-500', // Màu vàng
	},
	{
		title: 'Thanh toán hóa đơn',
		description:
			'Thanh toán tất cả các loại hóa đơn: Điện, nước, internet... đúng kỳ',
		icon: <FaFileInvoice />,
		bgColor: 'bg-red-500', // Màu đỏ
	},
	{
		title: 'Giải trí thỏa thích',
		description:
			'Trải nghiệm kho ứng dụng, trò chơi và phim ảnh hấp dẫn trên nhiều nền tảng',
		icon: <FaFilm />,
		bgColor: 'bg-pink-500', // Màu hồng
	},
];

const Service = () => {
	return (
		<div className="mt-12">
			<div className="text-3xl text-center text-gray-700">
				DỊCH VỤ NỔI BẬT
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						icon={service.icon}
						bgColor={service.bgColor}
					/>
				))}
			</div>
		</div>
	);
};

export default Service;
