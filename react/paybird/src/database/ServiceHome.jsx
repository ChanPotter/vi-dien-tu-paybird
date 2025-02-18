import { renderToString } from 'react-dom/server'; // Import renderToString để chuyển đổi React component thành string HTML
import {
	FaMoneyBillAlt,
	FaShoppingCart,
	FaMobileAlt,
	FaQrcode,
	FaFileInvoice,
	FaFilm,
} from 'react-icons/fa';

const services = [
	{
		title: 'Chuyển tiền - Nhận tiền',
		description:
			'Chạm là chuyển tiền miễn phí, 24/7 ngay trong khung chat Zalo',
		icon: renderToString(<FaMoneyBillAlt />), // Chuyển đổi icon thành string HTML
		bgColor: '#3b82f6', // Sử dụng mã màu hex thay vì class Tailwind
	},
	{
		title: 'Mua sắm dễ dàng',
		description:
			'Mua sắm online nhận nhiều khuyến mãi tại các sàn thương mại lớn',
		icon: renderToString(<FaShoppingCart />),
		bgColor: '#10b981', // Màu xanh lá cây
	},
	{
		title: 'Nạp/Mua thẻ điện thoại',
		description: 'Đa dạng nhà mạng, chiết khấu cạnh tranh, nạp trong một chạm',
		icon: renderToString(<FaMobileAlt />),
		bgColor: '#8b5cf6', // Màu tím
	},
	{
		title: 'Thanh toán tại quầy',
		description:
			'Thanh toán trực tiếp tại quầy qua các mã QR vô cùng nhanh chóng, tiện lợi',
		icon: renderToString(<FaQrcode />),
		bgColor: '#f59e0b', // Màu vàng
	},
	{
		title: 'Thanh toán hóa đơn',
		description:
			'Thanh toán tất cả các loại hóa đơn: Điện, nước, internet... đúng kỳ',
		icon: renderToString(<FaFileInvoice />),
		bgColor: '#ef4444', // Màu đỏ
	},
	{
		title: 'Giải trí thỏa thích',
		description:
			'Trải nghiệm kho trò chơi và phim ảnh hấp dẫn trên nhiều nền tảng',
		icon: renderToString(<FaFilm />),
		bgColor: '#ec4899', // Màu hồng
	},
];
export default services;
