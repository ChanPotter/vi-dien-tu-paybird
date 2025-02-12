import {
	FaUserCog, // Cài đặt tài khoản
	FaUnlockAlt, // Đăng nhập và mật khẩu
	FaShieldAlt, // Quyền riêng tư và bảo mật
	FaStore, // Marketplace
	FaFileInvoiceDollar, // Thanh toán hóa đơn
	FaGavel, // Trung tâm giải quyết tranh chấp
} from 'react-icons/fa';
import ServiceCard from '../Home/Items/ServiceCard';

const services = [
	{
		title: 'Cài Đặt Tài Khoản',
		description:
			'Điều chỉnh thông tin cá nhân, bảo mật tài khoản và cài đặt ứng dụng PayBird',
		icon: <FaUserCog />, // Biểu tượng cài đặt tài khoản
		bgColor: 'bg-blue-500',
	},
	{
		title: 'Đăng Nhập và Mật Khẩu',
		description:
			'Quên mật khẩu, không thể đăng nhập, tài khoản bị khóa, bị hack hoặc đặt lại mật khẩu',
		icon: <FaUnlockAlt />, // Biểu tượng khóa/mở khóa
		bgColor: 'bg-green-500',
	},
	{
		title: 'Quyền Riêng Tư và Bảo Mật',
		description: 'Bảo mật tài khoản, thông tin cá nhân và giao dịch trực tuyến',
		icon: <FaShieldAlt />, // Biểu tượng khiên bảo mật
		bgColor: 'bg-purple-500',
	},
	{
		title: 'Marketplace',
		description:
			'Chia sẻ, mua bán, giao dịch trên Marketplace, tìm kiếm sản phẩm, dịch vụ',
		icon: <FaStore />, // Biểu tượng cửa hàng
		bgColor: 'bg-yellow-500',
	},
	{
		title: 'Thanh toán hóa đơn',
		description:
			'Tìm hiểu về cách thanh toán tất cả các loại hóa đơn: Điện, nước, internet',
		icon: <FaFileInvoiceDollar />, // Biểu tượng hóa đơn có dấu $
		bgColor: 'bg-red-500',
	},
	{
		title: 'Trung Tâm Giải Quyết Tranh Chấp',
		description:
			'Giải quyết tranh chấp, khiếu nại, hoàn trả, bảo hành, đổi trả sản phẩm',
		icon: <FaGavel />, // Biểu tượng búa công lý
		bgColor: 'bg-pink-500',
	},
];

const ServiceSupport = () => {
	return (
		<div className="mt-9">
			<div className="text-3xl text-center text-gray-700">Chủ Đề Phổ Biến</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						icon={service.icon}
						bgColor={service.bgColor}
						className=""
					/>
				))}
			</div>
		</div>
	);
};

export default ServiceSupport;
