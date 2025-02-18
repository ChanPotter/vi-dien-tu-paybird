import supports from '../../database/Support';
import ServiceCard from '../Home/Items/ServiceCard';

const ServiceSupport = () => {
	return (
		<div className="mt-9">
			<div className="text-3xl text-center text-gray-700">Chủ Đề Phổ Biến</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
				{supports.map((service, index) => (
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
