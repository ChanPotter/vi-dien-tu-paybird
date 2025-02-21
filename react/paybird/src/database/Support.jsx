import { renderToString } from 'react-dom/server';
import {
	FaUserCog, // Cài đặt tài khoản
	FaUnlockAlt, // Đăng nhập và mật khẩu
	FaShieldAlt, // Quyền riêng tư và bảo mật
	FaStore, // Marketplace
	FaFileInvoiceDollar, // Thanh toán hóa đơn
	FaGavel, // Trung tâm giải quyết tranh chấp
} from 'react-icons/fa';

const services = [
	{
		title: 'Cài Đặt Tài Khoản',
		description:
			'Điều chỉnh thông tin cá nhân, bảo mật tài khoản và cài đặt ứng dụng PayBird',
		icon: renderToString(<FaUserCog />),
		bgColor: '#007BFF', // Màu xanh dương
	},
	{
		title: 'Đăng Nhập và Mật Khẩu',
		description:
			'Quên mật khẩu, không thể đăng nhập, tài khoản bị khóa, bị hack hoặc đặt lại mật khẩu',
		icon: renderToString(<FaUnlockAlt />),
		bgColor: '#28A745', // Màu xanh lá
	},
	{
		title: 'Quyền Riêng Tư và Bảo Mật',
		description:
			'Bảo mật tài khoản, thông tin cá nhân và các giao dịch trực tuyến',
		icon: renderToString(<FaShieldAlt />),
		bgColor: '#6F42C1', // Màu tím
	},
	{
		title: 'Marketplace',
		description:
			'Chia sẻ, mua bán, giao dịch trên Marketplace, tìm kiếm sản phẩm, dịch vụ',
		icon: renderToString(<FaStore />),
		bgColor: '#FFC107', // Màu vàng
	},
	{
		title: 'Thanh toán hóa đơn',
		description:
			'Tìm hiểu về cách thanh toán tất cả các loại hóa đơn: Điện, nước, internet',
		icon: renderToString(<FaFileInvoiceDollar />),
		bgColor: '#DC3545', // Màu đỏ
	},
	{
		title: 'Trung Tâm Giải Quyết Tranh Chấp',
		description:
			'Giải quyết tranh chấp, khiếu nại, hoàn trả, bảo hành, đổi trả sản phẩm',
		icon: renderToString(<FaGavel />),
		bgColor: '#E83E8C', // Màu hồng
	},
];

export default services;
