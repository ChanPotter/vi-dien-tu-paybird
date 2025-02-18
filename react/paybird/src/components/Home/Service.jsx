import services from '../../database/ServiceHome'; // Import dữ liệu từ file services.js
import { MyServiceCard } from '../lit-wrapper'; // Đảm bảo đường dẫn chính xác
import { Link } from 'react-router-dom';

const Service = () => {
	return (
		<div className="mt-12">
			<div className="text-3xl text-center text-gray-700">DỊCH VỤ NỔI BẬT</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
				{services.map((service, index) => (
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

export default Service;
