import supports from '../../database/Support';
import { MyServiceCard } from '../lit-wrapper'; // Đảm bảo đường dẫn chính xác
import { Link } from 'react-router-dom';

const ServiceSupport = () => {
	return (
		<div className="mt-9">
			<div className="text-3xl text-center text-gray-700">Chủ Đề Phổ Biến</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
				{supports.map((service, index) => (
					<Link to={`/Login`} key={index}>
						{' '}
						{/* Add a `to` prop */}
						<MyServiceCard
							title={service.title}
							description={service.description}
							icon={service.icon} // Truyền icon dưới dạng string HTML
							bgColor={service.bgColor}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ServiceSupport;
