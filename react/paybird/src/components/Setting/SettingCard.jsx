import { MySettingCard } from '../lit-wrapper';
import setting from '../../database/SettingService.json';
import { useNavigate } from 'react-router-dom';

const SettingCard = () => {
	const navigate = useNavigate();
	return (
		<div className="max-w-screen w-full bg-white shadow-md rounded-2xl border-2 border-gray-200 p-4">
			{/* Grid responsive: 1 cột trên mobile, 2 cột trên tablet, 3 cột trên desktop */}
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
				{setting.map((item) => (
					<MySettingCard
						onClick={() => navigate(item.link)}
						key={item.id}
						name={item.name}
						logo={item.logo}
					/>
				))}
			</div>
		</div>
	);
};

export default SettingCard;
