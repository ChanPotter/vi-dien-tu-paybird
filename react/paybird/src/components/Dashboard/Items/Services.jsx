import Data from '../../../database/Service.json';
import { MyUtilitiesCard } from '../../lit-wrapper';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Services = ({ searchQuery }) => {
	const navigate = useNavigate();
	// Lọc ngân hàng theo từ khóa tìm kiếm (không phân biệt hoa/thường)
	function removeVietnameseTones(str) {
		return str
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();
	}

	const filteredServices = Data.filter((item) =>
		removeVietnameseTones(item.name).includes(
			removeVietnameseTones(searchQuery)
		)
	);
	const handleNavigation = (id) => {
		navigate(`/Dashboard/${id}`);
	};

	return (
		<div>
			<div className="max-w-7xl mx-auto bg-white p-10 rounded-xl shadow-lg">
				<div className="grid grid-cols-3 sm:grid-cols-4 gap-11">
					{filteredServices.length > 0 ? (
						filteredServices.map((item, index) => (
							<MyUtilitiesCard
								item={item}
								index={index}
								key={item.id}
								onClick={() => handleNavigation(item.id)}
							/>
						))
					) : (
						<p className="text-center text-gray-500 col-span-full">
							Không tìm thấy dịch vụ nào.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
export default Services;
